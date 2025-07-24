import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./post.scss";
import EX from "../../assets/exPost.png";
import CommentInput from "./components/CommentInput";
import axios from "axios";

const PostDetailPage = () => {
  const navigation = useNavigate();

  const goPostPageHandler = () => {
    navigation(`/post`);
  };

  const [post, setPost] = useState(null); // 받아온 특정 게시물

  useEffect(() => {
    const postId = localStorage.getItem("postId");

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://43.202.217.156:8080/api/posting/${postId}`
        );

        setPost(response.data.data);
        console.log(post);
      } catch (error) {
        throw Error("게시글상세: " + error);
      }
    };
    fetchPosts();
  }, []);

  // const { id } = useParams();
  // const post = posts.find((p) => String(p.id) === String(id));
  if (!post) {
    return <div>불러오는 중...</div>;
  }

  return (
    <div className="PostDetailConatiner">
      <div className="PostDetailContent">
        <h2>Q. {post.title}</h2>
        <div className="userAndDate">
          <div className="userText">{post.nickname}</div>
          <div className="dateText">{post.created_at}</div>
        </div>
        <div>{post.content}</div>
        .<br />.<br />.<br />.<br />.<br />
        <img src={EX} />
      </div>
      <div className="buttonContainer">
        <button className="bookmarkButton">북마크</button>
        <button className="listButton" onClick={goPostPageHandler}>
          목록
        </button>
      </div>
      <div>
        <CommentInput />
      </div>
    </div>
  );
};

export default PostDetailPage;
