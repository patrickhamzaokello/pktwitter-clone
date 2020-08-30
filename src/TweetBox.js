import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input placeholder="what's happening" type="text" />
        </div>
        <input 
            placeholder="Optional: Enter image URL"
            className="tweetBox__imageInput"
            type="text" 
        /> 

        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
