import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserData({ users, setUsers, selectedUserIndex, setSelectedUserIndex }) {
  let navigate = useNavigate();
  let initialData = {
    name: "", designation: "", address: "", phone: "",
    dob: "", email: "", gender: ""
  };

  let [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (selectedUserIndex !== null) {
      setFormData(users[selectedUserIndex]);
    } else {
      setFormData(initialData);
    }
  }, [selectedUserIndex]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUserIndex !== null) {
      let updatedUsers = [...users];
      updatedUsers[selectedUserIndex] = formData;
      setUsers(updatedUsers);
    } else {
      setUsers(prev => [...prev, formData]);
    }
    setSelectedUserIndex(null);
    navigate("/");
  };

  return (
    <section className="mt-4 container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-dark text-white text-center">
              <h3>{selectedUserIndex !== null ? "Edit User" : "Add User"}</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">Designation</label>
                  <select id="designation" name="designation" className="form-select" value={formData.designation} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Developer">Developer</option>
                    <option value="Supporter">Supporter</option>
                    <option value="Tester">Tester</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea id="address" name="address" className="form-control" rows="3" value={formData.address} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input type="date" id="dob" name="dob" className="form-control" value={formData.dob} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div className="form-check">
                    <input type="radio" id="male" name="gender" value="Male" className="form-check-input" checked={formData.gender === "Male"} onChange={handleChange} />
                    <label htmlFor="male" className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" id="female" name="gender" value="Female" className="form-check-input" checked={formData.gender === "Female"} onChange={handleChange} />
                    <label htmlFor="female" className="form-check-label">Female</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" id="other" name="gender" value="Other" className="form-check-input" checked={formData.gender === "Other"} onChange={handleChange} />
                    <label htmlFor="other" className="form-check-label">Other</label>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-info">
                    {selectedUserIndex !== null ? "Update" : "Submit"}
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => {
                    setSelectedUserIndex(null);
                    navigate("/");
                  }}>Back</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}