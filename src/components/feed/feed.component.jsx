import React, { useState, useEffect } from "react";
import Post from "../post/post.component";
import { db } from "../../firebase/firebase";

import "./feed.style.scss";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  return (
    <div className="feed">
      {posts.length ? (
        posts
          .sort((a, b) => {
            const timeA = a.post.posted.seconds;
            const timeB = b.post.posted.seconds;
            return timeA > timeB ? -1 : 1;
          })
          .map(({ post, id }) => (
            <Post
              key={id}
              avatar={post.avatar}
              posted={post.posted}
              username={post.username}
              caption={post.caption}
              image={post.image}
            />
          ))
      ) : (
        <h3 className="feed_error">Loading all the hammocking-inspo you can think of!</h3>
      )}
    </div>
  );
};

export default Feed;
