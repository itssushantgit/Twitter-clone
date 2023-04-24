import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import {
  ImageOutlined,
  GifBoxOutlined,
  PollOutlined,
  SentimentSatisfiedAltOutlined,
  CalendarTodayOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";

const TweetBox = () => {
  return (
    <div className="tweetbox">
      <form className="tweetbox_form">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU"
          className="tweetbox_avatar"
        />
        <div className="tweetbox_form-field">
          <div className="tweetbox_input">
            <input type="text" placeholder="What's hapenning ?" />
          </div>
          <div className="tweetbox_input">
            <div className="tweetbox_icons">
              <ImageOutlined className="tweetbox_icon" />
              <GifBoxOutlined className="tweetbox_icon" />
              <PollOutlined className="tweetbox_icon" />
              <SentimentSatisfiedAltOutlined className="tweetbox_icon" />
              <CalendarTodayOutlined className="tweetbox_icon" />
              <LocationOnOutlined className="tweetbox_icon" />
            </div>
            <Button className="tweetbox_btn">Tweet</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
