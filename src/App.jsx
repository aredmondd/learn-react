import { useEffect, useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not okay");
        }
        return res.json();
      })
      .then((data) => initiateUsers(data))
      .catch((error) => setError(error));
  }, []);

  function initiateUsers(data) {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedData);
    setFilteredUsers(sortedData);
  }

  function findUsers() {
    let query = document.getElementById("userSearch");
    if (query.value != null) {
      let updatedData = users.filter((user) =>
        user.name.startsWith(query.value)
      );

      setFilteredUsers(updatedData);
    }
  }

  function sortUsers() {
    setFilteredUsers([...filteredUsers].reverse());
  }

  return (
    <>
      <h1 className="text-6xl text-purple-800 text-center uppercase font-black mt-12 mb-4">
        our users
      </h1>
      <div className="flex items-center justify-center mb-12">
        <input
          type="text"
          id="userSearch"
          placeholder="search names..."
          className="border px-1 py-0.5"
          onChange={findUsers}
        />
      </div>
      <label htmlFor="ascending">
        Ascending?
        <input type="checkbox" onChange={sortUsers} id="ascending" />
      </label>
      {error && <p className="text-red-400">{error.message}</p>}
      {users && <UserList users={filteredUsers} />}
    </>
  );
}

export default App;
