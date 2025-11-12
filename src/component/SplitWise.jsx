import React, { useState } from 'react';
import initialPeople from './data';
import PersonForm from './PersonForm';
import PersonCard from './PersonCard';

function SplitWise() {
  let [people, setPeople] = useState(initialPeople);
  let [activeSplitIndex, setActiveSplitIndex] = useState(null);
  let [messages, setMessages] = useState({});
  let [showForm, setShowForm] = useState(false);

  let addPerson = (person) => {
    setPeople([...people, person]);
    setShowForm(false);
  };

  let updateMoney = (index, moneyChange) => {
    let updated = [...people];
    updated[index].money += moneyChange;
    setPeople(updated);

    let friend = updated[index];
    let msg = moneyChange > 0
      ? `${friend.name} owes you ₹${moneyChange}`
      : `You owe ${friend.name} ₹${Math.abs(moneyChange)}`;

    setMessages((prev) => ({ ...prev, [index]: msg }));
  };

  return (
    <div className="container mt-4">
      <h2>💰 Split Wise</h2>

      <button
        className="btn btn-outline-primary mb-3"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add Person'}
      </button>

      {showForm && <PersonForm onAdd={addPerson} />}

      <div className="row">
        {people.map((person, idx) => (
          <div key={idx} className="col-md-6 col-lg-4 mb-4">
            <PersonCard
              person={person}
              index={idx}
              isActive={activeSplitIndex === idx}
              onSplitClick={() => setActiveSplitIndex(idx)}
              onSplitSubmit={(moneyChange) => {
                updateMoney(idx, moneyChange);
                setActiveSplitIndex(null);
              }}
              message={messages[idx]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SplitWise;