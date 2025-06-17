function Post({ post }) {
  return (
    <>
      <p style={{ color: "#FF0000" }}>{post.title}</p>
      <p>post.body</p>
    </>
  );
}

export default Post;
