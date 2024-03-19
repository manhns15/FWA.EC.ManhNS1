const Home = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div className="quiz-info">
        <div className="quiz-info__avt">
          <img src={userData.avatar_link} alt="" />
        </div>
        <div className="quiz-info__item">
          <p className="h2">{userData.name}</p>
          <span>{userData.email}</span>
          <div className="quiz-info__poin">
            <div className="quiz-info__poin--item">
              <span className="quiz-info__poin--icon">
                <i className="bi bi-flag-fill"></i>
              </span>
              <div className="quiz-info__poin--card">
                <p>30</p>
                <span>Question</span>
              </div>
            </div>
            <div className="quiz-info__poin--item">
              <span className="quiz-info__poin--icon">
                <i className="bi bi-clock-fill"></i>
              </span>
              <div className="quiz-info__poin--card">
                <p>30min</p>
                <span>Fastest Time</span>
              </div>
            </div>
            <div className="quiz-info__poin--item">
              <span className="quiz-info__poin--icon">
                <i className="bi bi-check-circle-fill"></i>
              </span>
              <div className="quiz-info__poin--card">
                <p>100</p>
                <span>Poins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quiz-btn">
        <button className="btn">Start-quiz</button>
      </div>
    </>
  );
};

export default Home;
