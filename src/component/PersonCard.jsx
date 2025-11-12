import React from 'react';
import SplitForm from './SplitForm';

function PersonCard({ person, index, isActive, onSplitClick, onSplitSubmit, message }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <img
              src={person.img}
              alt={person.name}
              className="rounded-circle me-2"
              style={{ width: '40px', height: '40px' }}
            />
            <strong>{person.name}</strong>
          </div>
          <div>
            <span className={person.money >= 0 ? 'text-success' : 'text-danger'}>
              ₹{person.money}
            </span>
            <button
              className="btn btn-sm btn-outline-success ms-2"
              onClick={onSplitClick}
            >
              Split
            </button>
          </div>
        </div>

        {isActive && (
          <div className="mt-2">
            <SplitForm onSplit={onSplitSubmit} />
            {message && (
              <div className="alert alert-info mt-2 mb-0 py-2 px-3">
                {message}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonCard;