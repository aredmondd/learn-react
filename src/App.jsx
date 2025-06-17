import { useEffect, useState } from "react";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState(null);
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  function sortPosts() {
    setAscending(!ascending);
    setPosts(posts.reverse());
    console.log(ascending);
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold uppercase text-center my-12 text-purple-500">
        blog posts
      </h1>
      <label htmlFor="checkbox">
        Ascending?
        <input type="checkbox" onChange={sortPosts} />
      </label>
      <PostList postsArray={posts} />
    </div>
  );
}

function PostList({ postsArray }) {
  if (postsArray != null) {
    return postsArray.map((post) => <Post post={post} key={post.id} />);
  } else {
    return <h1>Loading...</h1>;
  }
}

export default App;
