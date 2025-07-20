import React from "react";
import posts from "../../datas/posts.json";
import { useParams } from "react-router-dom";
import "./post.scss";
import EX from "../../assets/exPost.png";

const PostDetailPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === String(id));

  return (
    <div className="PostDetailContainer">
      <h2>Q. {post.title}</h2>
      <div className="userAndDate">
        <div className="userText">{post.user}</div>
        <div className="dateText">{post.date}</div>
      </div>
      <div>{post.content}</div>
      .<br />.<br />.<br />.<br />.<br />
      <img src={EX} />
    </div>
  );
};

export default PostDetailPage;
