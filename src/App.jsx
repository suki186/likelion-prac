import SignupPage from "./pages/signupPage/SignupPage";
import LoginPage from "./pages/signupPage/LoginPage";
import "./App.scss";
import MainPage from "./pages/mainPage/MainPage";
import NotiPage from "./pages/notiPage/NotiPage";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NotiDetailPage from "./pages/notiPage/NotiDetailPage";
// import ResultPage from "./pages/resultPage/ResultPage";
import PostPage from "./pages/postPage/PostPage";
import PostDetailPage from "./pages/postPage/PostDetailPage";
import PostCreatePage from "./pages/postPage/PostCreatePage";
import { useState } from "react";
import p from "./datas/posts.json";

function App() {
  const [posts, setPosts] = useState(p);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/noti" element={<NotiPage />} />
          <Route path="/noti/detail/:id" element={<NotiDetailPage />} />
          {/* <Route path="/result" element={<ResultPage />} /> */}
          <Route
            path="/post"
            element={<PostPage posts={posts} setPosts={setPosts} />}
          />
          <Route
            path="/post/create"
            element={<PostCreatePage setPosts={setPosts} />}
          />
          <Route path="/post/detail" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
