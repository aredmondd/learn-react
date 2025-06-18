import UserCard from "./UserCard";

function UserList({ users }) {
  if (users != null) {
    return users.map((user) => <UserCard user={user} key={user.id} />);
  } else {
    return <h1>Loading...</h1>;
  }
}

export default UserList;
