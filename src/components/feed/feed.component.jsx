import React, { useState, useEffect } from "react";
import Post from "../post/post.component";
import { db } from "../../firebase/firebase";

import "./feed.style.scss";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map(doc => ({id: doc.id, post: doc.data()})));
    });
  }, [posts]);

  return (
    <div className="feed">
      {posts.length ? (
        posts.map(({post, id}) => (
          <Post
            key={id}
            avatar={post.avatar}
            username={post.username}
            caption={post.caption}
            image={post.image}
          />
        ))
      ) : (
        <h3 className="feed_error">Oops! No posts found. 😳</h3>
      )}
    </div>
  );
};

export default Feed;
