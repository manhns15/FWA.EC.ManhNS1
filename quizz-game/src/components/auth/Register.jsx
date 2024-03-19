import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/authAction";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form.email, form.name, form.password));
    setForm({
      email: "",
      name: "",
      password: "",
    });
  };
  return (
    <>
      <div className="auth">
        <div className="auth-container">
          <div className="auth-left">
            <img src="../../../public/images/quizzes.png" alt="" />
          </div>
          <div className="auth-right">
            <div className="auth-right__back">
              <i className="bi bi-chevron-left"></i>
              <Link to="/login">Back </Link>
            </div>
            <div className="auth-right__heading">
              <p>Sign up your Account</p>
              <span>with your Email Address</span>
            </div>
            <form className="auth-right__form" onSubmit={handleSubmit}>
              <div className="auth-right__inp">
                <label htmlFor="name">
                  Full name<span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="auth-right__inp">
                <label htmlFor="email">
                  Email andress<span>*</span>
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
              <button type="submit" className="auth-right__btn">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
