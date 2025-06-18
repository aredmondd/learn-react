function UserCard({ user }) {
  return (
    <div className="mx-6 mb-12">
      <h1 className="text-3xl font-bold">
        {user.name}
        <span className="font-light italic"> | @{user.username}</span>
      </h1>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
      <a
        href={"https://www." + user.website}
        target="_blank"
        className="underline">
        website: {user.website}
      </a>
    </div>
  );
}

export default UserCard;
