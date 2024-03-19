/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layouts/Layout";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Forgot from "./components/auth/Forgot";
import QuizPlay from "./components/quiz/QuizPlay";
import QuizResult from "./components/quiz/QuizResult";
import ListUser from "./components/management/ListUser";
import QuizList from "./components/management/QuizList";
import { useSelector } from "react-redux";
// import PageNF from "./components/page404/PageNF";
// import { ADMIN } from "./constants/contants";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const roles = useSelector((state) => state.auth.role);
  console.log(roles);
  return (
    <>
      <main id="main">
        <div className="quiz">
          <div className="quiz-container">
            <Routes>
              <Route
                path="/"
                element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
              >
                {/* <Route path="/" element={<Layout />}> */}
                <Route index element={<Home />} />
                <Route path="/quiz-play" element={<QuizPlay />} />
                <Route path="/quiz-result" element={<QuizResult />} />
                {/* {roles.includes(ADMIN) && (
                  <> */}
                <Route path="/quiz-list" element={<QuizList />} />
                <Route path="/users" element={<ListUser />} />
                {/* </>
                )} */}
              </Route>
            </Routes>
          </div>
        </div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
          {/* <Route path="*" element={<PageNF />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
