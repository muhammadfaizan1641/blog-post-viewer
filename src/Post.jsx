import { useState } from "react";

function Post({ post }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <h2>{post.title}</h2>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Hide" : "Show"} Content
      </button>
      {showContent && <p>{post.content}</p>}
    </div>
  );
}

export default Post;
