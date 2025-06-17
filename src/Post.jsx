function Post({ post }) {
  return (
    <div className="mb-12">
      <p className="font-bold text-3xl m-2">
        #{post.id} {post.title}
      </p>
      <p className="ml-2">{post.body}</p>
    </div>
  );
}

export default Post;
