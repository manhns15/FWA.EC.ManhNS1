import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuestionsAction } from "../../actions/questionAction";
import { useNavigate } from "react-router-dom";

const QuizPlay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questionsPlay, setQuestionsPlay] = useState({});
  const [seconds, setSeconds] = useState(30 * 60);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const questionData = JSON.parse(sessionStorage.getItem("questionPlay"));
    if (questionData) {
      setQuestionsPlay(questionData);
    }
    const storedSelectedAnswers = JSON.parse(
      sessionStorage.getItem("selectedAnswers")
    );
    if (storedSelectedAnswers) {
      setSelectedAnswers(storedSelectedAnswers);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
        setTimeUp(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerChange = (questionId, optionId) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = { ...prevSelectedAnswers };
      if (updatedAnswers[questionId]?.includes(optionId)) {
        updatedAnswers[questionId] = updatedAnswers[questionId].filter(
          (id) => id !== optionId
        );
      } else {
        updatedAnswers[questionId] = [
          ...(updatedAnswers[questionId] || []),
          optionId,
        ];
      }
      return updatedAnswers;
    });
  };

  const handleNext = () => {
    if (
      selectedAnswers[questionsPlay[currentPage]?.id] !== undefined &&
      selectedAnswers[questionsPlay[currentPage]?.id]?.length !== 0
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      alert("Please select an answer before proceeding.");
    }
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = () => {
    if (
      selectedAnswers[questionsPlay[currentPage]?.id] !== undefined &&
      selectedAnswers[questionsPlay[currentPage]?.id]?.length !== 0
    ) {
      // Tạo mảng listQuestionSubmitted từ selectedAnswers
      const listQuestionSubmitted = Object.keys(selectedAnswers).map(
        (questionId) => ({
          id: +questionId,
          answersSubmittedId: selectedAnswers[questionId],
        })
      );
      dispatch(submitQuestionsAction(token, listQuestionSubmitted));
      navigate(`/quiz-result`);
    } else {
      alert("Please select an answer before proceeding.");
    }
  };

  // Xác định loại input dựa trên số lượng đáp án
  const determineInputType = (question) => {
    return question.answers.length <= 4 ? "radio" : "checkbox";
  };

  return (
    <>
      <div className="quiz-ques">
        <div className="quiz-ques__heading">
          <div className="quiz-ques__name">
            <p className="h2">Nguyen Sy Manh</p>
            <span>Answer the question below</span>
          </div>
          <div className="quiz-ques__time">
            <span className="">Timer:</span>
            <span> {formatTime(seconds)}</span>
          </div>
        </div>

        <div className="quiz-ques__content">
          <>
            <div
              className="quiz-ques__item"
              key={questionsPlay[currentPage]?.id}
            >
              <div className="quiz-ques__item--left"></div>
              <div className="quiz-ques__item--right">
                <p>
                  Question {currentPage + 1}/{questionsPlay?.length}
                </p>
                <span>{questionsPlay[currentPage]?.title}</span>
              </div>
            </div>
            <div className="quiz-ques__answer">
              <p>Choose answer</p>
              <div className="quiz-ques__answer--option">
                {questionsPlay[currentPage]?.answers?.map((option) => (
                  <div className="quiz-ques__answer--item" key={option.id}>
                    <input
                      type={determineInputType(questionsPlay[currentPage])}
                      id={option.id}
                      name={`question_${questionsPlay[currentPage]?.id}`}
                      value={option.id}
                      checked={selectedAnswers[
                        questionsPlay[currentPage]?.id
                      ]?.includes(option.id)}
                      onChange={() =>
                        handleAnswerChange(
                          questionsPlay[currentPage]?.id,
                          option.id
                        )
                      }
                    />
                    <label htmlFor={option.id}>{option.content}</label>
                  </div>
                ))}
              </div>
            </div>
          </>

          <div className="quiz-ques__btn">
            {!timeUp && currentPage > 0 && (
              <button className="btn" onClick={handleBack}>
                Back
              </button>
            )}
            {!timeUp && currentPage < questionsPlay?.length - 1 && (
              <button className="btn" onClick={handleNext}>
                Next
              </button>
            )}
            {!timeUp && currentPage === questionsPlay?.length - 1 && (
              <button className="btn" onClick={handleSubmit}>
                Finish
              </button>
            )}
            {timeUp && (
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPlay;
