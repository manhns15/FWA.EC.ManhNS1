import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuestionsAction } from "../../actions/questionAction";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatarAction } from "../../actions/profileAction";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selects] = useState([3, 10, 20, 30]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [avatar, setAvatar] = useState(null);

  const token = useSelector((state) => state.auth.token);
  const { questions } = useSelector((state) => state.questions);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const questionsData = JSON.stringify(questions);
  sessionStorage.setItem("questions", questionsData);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      dispatch(uploadAvatarAction(token, file));
    }
  };
  useEffect(() => {
    dispatch(fetchQuestionsAction(token, selectedOption));
  }, [dispatch, token, selectedOption]);

  const handleNavigate = () => {
    navigate(`/quiz-play`);
  };
  return (
    <>
      <div className="quiz-info">
        <div className="quiz-info__avt">
          {avatar ? (
            <img src={avatar} alt="Avatar" />
          ) : (
            <img src={userData.avatar_link} alt="Current Avatar" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: "none" }}
            id="avatar-input"
          />
          <label htmlFor="avatar-input" className="change-avatar-btn">
            Upload
          </label>
        </div>
        <div className="quiz-info__item">
          <p className="h2">{userData.name}</p>
          <span>{userData.email}</span>
          <div className="box">
            <select value={selectedOption} onChange={handleChange}>
              <option value={0}>Select question number</option>
              {selects?.map((value, index) => (
                <>
                  <option value={value} key={index}>
                    {value} questions
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="quiz-info__poin">
            <div className="quiz-info__poin--item">
              <span className="quiz-info__poin--icon">
                <i className="bi bi-flag-fill"></i>
              </span>
              <div className="quiz-info__poin--card">
                <p>{selectedOption}</p>
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
        <button
          type="button"
          className="btn"
          onClick={handleNavigate}
          disabled={selectedOption == 0 ? true : false}
        >
          Start-quiz
        </button>
      </div>
    </>
  );
};

export default Home;
