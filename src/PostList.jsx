import Post from "./Post";

function PostList({ posts }) {
  if (posts.length === 0) {
    return <p style={{textAlign:"center"}} >No matching posts found.</p>;
  }

  return (
    <div style={{textAlign:"center"}} >
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
