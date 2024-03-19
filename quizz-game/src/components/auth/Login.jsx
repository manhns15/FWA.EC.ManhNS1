import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authAction";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi action login thông qua useDispatch
    dispatch(login(form.email, form.password));
    setForm({
      email: "",
      password: "",
    });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="auth">
        <div className="auth-container">
          <div className="auth-left">
            <img src="../../../public/images/quizzes.png" alt="" />
          </div>
          <div className="auth-right">
            <div className="auth-right__heading">
              <p>Login to your Account</p>
              <span>with your registered Email Address</span>
            </div>
            <form className="auth-right__form" onSubmit={handleSubmit}>
              <div className="auth-right__inp">
                <label htmlFor="email">
                  Emai andress<span>*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email andress"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="auth-right__inp">
                <label htmlFor="password">
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <a href="#" className="auth-right__forgot">
                Forgot password ?
              </a>
              <button type="submit" className="auth-right__btn">
                Login
              </button>
              <div className="auth-right__ques">
                <span>
                  Not a member ? <Link to="/register">Sign up now</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
