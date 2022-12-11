import React, { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    console.log(process.env);
    const fetchUsers = async () => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) =>
          setUsers(data.map((user: { name: string }) => user.name))
        )
        .catch((data) => setError("Has Error"));
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error} </p>}

      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </div>
  );
}

export default User;
