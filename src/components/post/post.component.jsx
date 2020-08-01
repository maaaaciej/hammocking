import React from "react";

import "./post.style.scss";

const Post = () => {
  return (
    <div className="post">
      <h3 className="post_header">Username</h3>
      {/* header  with avatar and username and location*/}
      <img
        className="post_image"
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt=""
      />
      {/* image */}
      {/* username and caption */}
      <div className="post_caption">
        <h4>username</h4> <p>caption</p>
      </div>
    </div>
  );
};

export default Post;
