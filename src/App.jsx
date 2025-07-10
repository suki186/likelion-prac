import SignupPage from "./pages/signupPage/SignupPage";
import LoginPage from "./pages/signupPage/LoginPage";
import "./App.scss";
import MainPage from "./pages/mainPage/MainPage";
import NotiPage from "./pages/notiPage/NotiPage";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NotiDetailPage from "./pages/notiPage/NotiDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<MainPage />} />
          <Route path="/noti" element={<NotiPage />} />
          <Route path="/notidetail" element={<NotiDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
