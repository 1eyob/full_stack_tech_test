// pages/[id]/index.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p>ID: {id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserProfile;
