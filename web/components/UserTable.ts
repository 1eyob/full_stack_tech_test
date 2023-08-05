// components/UserTable.js
import React from "react";

const UserTable = ({ users }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-gray-100 border">Name</th>
          <th className="px-4 py-2 bg-gray-100 border">Email</th>
          <th className="px-4 py-2 bg-gray-100 border">Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-4 py-2 border">{user.name}</td>
            <td className="px-4 py-2 border">{user.email}</td>
            <td className="px-4 py-2 border">{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
