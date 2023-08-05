// components/AddUserModal.js
import React, { useState } from "react";

const AddUserModal = ({ isOpen, onClose, onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [avatar, setAvatar] = useState("");
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = { name, email, age: parseInt(age), avatar };
    onAddUser(newUser);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${
        isOpen ? "flex items-center justify-center" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block">Avatar:</label>
            <input
              type="file"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add User
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
