import React, { useState } from 'react';

function PersonForm({ onAdd }) {
  let [form, setForm] = useState({ name: '', img: '', money: '' });

  let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let { name, img, money } = form;
    if (!name || isNaN(parseFloat(money))) return;

    onAdd({
      name,
      img: img || 'https://via.placeholder.com/40',
      money: parseFloat(money),
    });

    setForm({ name: '', img: '', money: '' });
  };

  return (
    <form className="row g-3 mb-4" onSubmit={handleSubmit}>
      <div className="col-md-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-5">
        <input
          type="text"
          name="img"
          className="form-control"
          placeholder="Image URL (optional)"
          value={form.img}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-2">
        <input
          type="number"
          name="money"
          className="form-control"
          placeholder="₹ Amount"
          value={form.money}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-2">
        <button type="submit" className="btn btn-primary w-100">Add</button>
      </div>
    </form>
  );
}

export default PersonForm;