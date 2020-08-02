import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./post.style.scss";

const Post = ({ username, caption, image,avatar }) => {
  return (
    <div className="post">
      <div className="header_container">
        <Avatar className="post_avatar" src={avatar} />
        <h3 className="post_header">{username}</h3>
      </div>

      <img className="post_image" src={image} alt="" />

      <div className="post_caption">
        <h4>{username}</h4> <span className="post_caption_text">{caption}</span>
      </div>
    </div>
  );
};

export default Post;
