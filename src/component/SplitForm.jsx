import React, { useState, useEffect } from 'react';

function SplitForm({ onSplit }) {
  let [total, setTotal] = useState('');
  let [yourExpense, setYourExpense] = useState('');
  let [friendExpense, setFriendExpense] = useState(0);
  let [whoPaid, setWhoPaid] = useState('you');

  useEffect(() => {
    let totalVal = parseFloat(total);
    let yourVal = parseFloat(yourExpense);
    if (!isNaN(totalVal) && !isNaN(yourVal)) {
      setFriendExpense(totalVal - yourVal);
    } else {
      setFriendExpense(0);
    }
  }, [total, yourExpense]);

  let handleSubmit = (e) => {
    e.preventDefault();
    let totalVal = parseFloat(total);
    let yourVal = parseFloat(yourExpense);

    if (isNaN(totalVal) || isNaN(yourVal)) return;

    let moneyChange = 0;
    if (whoPaid === 'you') {
      moneyChange = totalVal - yourVal; // friend owes you
    } else {
      moneyChange = -yourVal; // you owe friend
    }

    onSplit(moneyChange);
    setTotal('');
    setYourExpense('');
    setWhoPaid('you');
  };

  return (
    <form className="row g-2" onSubmit={handleSubmit}>
      <div className="col-3">
        <input
          type="number"
          className="form-control"
          placeholder="Total ₹"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </div>
      <div className="col-3">
        <input
          type="number"
          className="form-control"
          placeholder="Your ₹"
          value={yourExpense}
          onChange={(e) => setYourExpense(e.target.value)}
        />
      </div>
      <div className="col-2">
        <input
          type="number"
          className="form-control"
          placeholder="Friend ₹"
          value={friendExpense}
          disabled
        />
      </div>
      <div className="col-2">
        <select
          className="form-select"
          value={whoPaid}
          onChange={(e) => setWhoPaid(e.target.value)}
        >
          <option value="you">You Paid</option>
          <option value="friend">Friend Paid</option>
        </select>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success w-100">
          Split Bill
        </button>
      </div>
    </form>
  );
}

export default SplitForm;