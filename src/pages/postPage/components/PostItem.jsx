import React from "react";
import "../post.scss";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  const navigation = useNavigate();
  const handleClick = () => {
    // 로컬스토리지에 게시물 id 저장
    localStorage.setItem("postId", post.id);
    navigation(`detail`);
    //onClick();
  };

  return (
    <div className="PostItem">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4>Q. {post.title}</h4>
        <p className="PostText">{post.created_at}</p>
      </div>

      <div className="PostContent-Container">
        <p className="PostContent">{post.content}</p>
        <button className="PostButon" onClick={handleClick}>
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default PostItem;
