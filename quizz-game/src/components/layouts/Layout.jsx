import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      {/* sidebar */}
      <Sidebar />
      <div className="quiz-content">
        {/* header */}
        <Header />
        <div className="container">
          <div className="quiz-start">
            {/* content */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
