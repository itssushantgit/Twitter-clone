import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import {
  MoreHoriz,
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  PublishOutlined,
} from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU"
        className="post_avatar"
      />
      <div className="post_content">
        <div className="post_header">
          <div className="post_title">
            <h3>Sushant Bharati</h3>
            <h4>@sushantbharati</h4>
          </div>

          <MoreHoriz className="morehoriz_icon" />
        </div>
        <div className="post_desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>{" "}
        <div className="post_media">
          <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" />
        </div>
        <div className="post_footer">
          <ChatBubbleOutline fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderOutlined fontSize="small" />
          <SignalCellularAltIcon fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
