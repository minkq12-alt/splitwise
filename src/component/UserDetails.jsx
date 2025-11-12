import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDetails({ users, setUsers, setSelectedUserIndex }) {
  let navigate = useNavigate();
  let [selectedRowIndex, setSelectedRowIndex] = useState(null);

  let handleEdit = () => {
    if (selectedRowIndex !== null) {
      setSelectedUserIndex(selectedRowIndex);
      navigate("/add-user");
    }
  };

  let handleDelete = () => {
    if (selectedRowIndex !== null) {
      let updatedUsers = users.filter((_, i) => i !== selectedRowIndex);
      setUsers(updatedUsers);
      setSelectedRowIndex(null);
    }
  };

  return (
    <section className='mt-3 container-fluid'>
      <div className="row">
        <div className="col">
          <table className='table text-center'>
            <thead className='table-dark'>
              <tr>
                <th>Select</th>
                <th>UserName</th>
                <th>Designation</th>
                <th>Address</th>
                <th>PhNo</th>
                <th>DOB</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={selectedRowIndex === index ? "table-primary" : ""}
                  style={{ cursor: "pointer" }}
                >
                  <td>
                    <input
                      type="radio"
                      name="selectUser"
                      checked={selectedRowIndex === index}
                      onChange={() => setSelectedRowIndex(index)}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.designation}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>{user.dob}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <button className="btn btn-dark" onClick={() => {
              setSelectedUserIndex(null);
              navigate("/add-user");
            }}>Add User</button>

            <button className="btn btn-info" onClick={handleEdit} disabled={selectedRowIndex === null}>
              Edit User
            </button>

            <button className="btn btn-danger" onClick={handleDelete} disabled={selectedRowIndex === null}>
              Delete User
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}