import React from "react";
import "./Feed.css";
import TweetBox from "./Tweetbox/TweetBox";
import Post from "./posts/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2 className="feed_home"> Home</h2>
      </div>

      <TweetBox />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
