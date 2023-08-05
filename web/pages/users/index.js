//DO THE USERS PAGE HERE AND THE MODAL TO ADD NEW USER ALSO HERE
import React, { useState, userEffect } from "react";
import UserTable from "../../components/UserTable";
import AddUserModal from "../../components/AddUserModal";
import { getUsers } from "../utils/api";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddUser = (newUser) => {
    //Todo
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">User Table</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add User
      </button>
      <UserTable users={users} />

      {isModalOpen && (
        <AddUserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddUser={handleAddUser}
        />
      )}
    </div>
  );
};

export default Home;
