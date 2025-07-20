import React from "react";
import "../post.scss";

const CommentInput = () => {
  return (
    <div className="CommentInputContainer">
      <div className="commentName">코카콜라</div>
      <div className="commentInputAndButton">
        <textarea
          type="text"
          placeholder="답변을 남겨주세요"
          className="commentInput"
        />
        <button className="commentButton">답변 달기</button>
      </div>
    </div>
  );
};

export default CommentInput;
