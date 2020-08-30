import React from "react";
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"
import "./Post.css";

import Postimage from "./images.jpg"

function Post({ displayname, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
          <div className="post__header">
              <div className="post__headerText">
                  <h3>
                      Hafise Pk{" "}
                      <span className="post__headerSpecial">
                        <VerifiedUserIcon className="post__badge" />
                        @pkasemer
                      </span>
                  </h3>
              </div>
              <div className="post__headerDescription">
                  <p>I challenge you to build a twitter clone with React</p>
              </div>
          </div>
          <img src={Postimage} alt="" />

          <div className="post__footer">
              <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <PublishIcon fontSize="small" />
          </div>
      </div>
    </div>
  );
}

export default Post;
