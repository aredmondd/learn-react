import { useEffect, useState } from "react";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return <PostList postsArray={posts} />;
}

function PostList({ postsArray }) {
  if (postsArray == null) {
    return <h1>loading...</h1>;
  }
  return postsArray.map((post) => <Post post={post} key={post.id} />);
}

export default App;
