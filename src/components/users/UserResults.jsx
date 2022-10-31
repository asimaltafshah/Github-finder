import { useEffect, useContext } from "react";
import UserItems from "./UserItems";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { fetchUsers, users, loading } = useContext(GithubContext);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h1>Loading ...</h1>;
  }
}

export default UserResults;
