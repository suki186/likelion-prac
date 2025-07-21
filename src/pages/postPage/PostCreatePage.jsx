import React, { useState } from "react";
import "./post.scss";

const PostCreatePage = () => {
  const [type, setType] = useState("네편 답변");
  return (
    <>
      <div className="PostCreateContainer">
        <div>
          <h2>게시글 제목</h2>
          <input type="text" placeholder="질문 제목을 입력해 주세요" />
        </div>

        <h2>게시글 선택</h2>
        <div>
          <label>
            <input
              type="radio"
              name="postType"
              value="네편 답변"
              checked={type === "네편 답변"}
              onChange={(e) => setType(e.target.value)}
            />
            네편 답변
          </label>
          <label>
            <input
              type="radio"
              name="postType"
              value="네편 정보"
              checked={type === "네편 정보"}
              onChange={(e) => setType(e.target.value)}
            />
            네편 정보
          </label>
        </div>

        <div>
          <h2>게시글 내용</h2>
          <textarea placeholder="질문 내용을 입력해 주세요" />
        </div>

        <div>
          <h2>내 결과지 가져오기(선택)</h2>
        </div>
      </div>
      <button>등록하기</button>
    </>
  );
};

export default PostCreatePage;
