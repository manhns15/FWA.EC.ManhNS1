const Forgot = () => {
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
              <a href="#">Back </a>
            </div>
            <div className="auth-right__heading">
              <p>Forgot Password</p>
              <span>with Email Address</span>
            </div>
            <div className="auth-right__form">
              <div className="auth-right__inp">
                <label htmlFor="email">
                  Emai andress<span>*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email andress"
                />
              </div>

              <button className="auth-right__btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
