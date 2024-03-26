import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/authAction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ADMIN } from "../../constants/contants";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const roles = useSelector((state) => state.auth.role);

  const handleLogout = () => {
    dispatch(logout());
    navigate("login");
  };

  return (
    <div className="quiz-sidebar">
      <div className="container">
        <div className="quiz-sidebar__heading">
          <p>Quiz Game</p>
        </div>
        <ul className="quiz-sidebar__menu">
          <li
            className={`quiz-sidebar__item ${
              pathname === "/" ||
              pathname === "/quiz-play" ||
              pathname === "/quiz-result" ||
              pathname === "/quiz-review"
                ? "active"
                : ""
            }`}
          >
            <i className="bi bi-house"></i>
            <Link to="/">Home</Link>
          </li>
          {roles.includes(ADMIN) && (
            <>
              <li
                className={`quiz-sidebar__item ${
                  pathname === "/quiz-list" ? "active" : ""
                }`}
              >
                <i className="bi bi-question-square"></i>
                <Link to="/quiz-list">Quiz list</Link>
              </li>
              <li
                className={`quiz-sidebar__item ${
                  pathname === "/users" ? "active" : ""
                }`}
              >
                <i className="bi bi-person-gear"></i>
                <Link to="/users">User</Link>
              </li>
            </>
          )}

          <li className="quiz-sidebar__item">
            <i className="bi bi-headset"></i>
            <a href="#">Support</a>
          </li>
          <li className="quiz-sidebar__item">
            <i className="bi bi-bell"></i>
            <a href="#">Notification</a>
          </li>
        </ul>
        <div className="quiz-sidebar__footer">
          <i className="bi bi-box-arrow-left"></i>
          <span onClick={handleLogout}>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
