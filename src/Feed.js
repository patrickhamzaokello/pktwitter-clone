import React from "react";
import TweetBox from "./TweetBox.js";
import PostBox from "./Post.js";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      {/* header  */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet box  */}
      <TweetBox />
      {/* Post  */}
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />




    </div>
  );
}

export default Feed;
