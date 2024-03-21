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
  const [questions, setQuestions] = useState({});
  const [seconds, setSeconds] = useState(30 * 60);

  useEffect(() => {
    const questionData = JSON.parse(sessionStorage.getItem("questions"));
    if (questionData) {
      setQuestions(questionData);
    }
    // Lấy trạng thái đã lưu từ localStorage
    const storedSelectedAnswers = JSON.parse(
      sessionStorage.getItem("selectedAnswers")
    );
    if (storedSelectedAnswers) {
      setSelectedAnswers(storedSelectedAnswers);
    }
  }, []);

  // Lưu trạng thái đã chọn vào localStorage khi có sự thay đổi
  useEffect(() => {
    sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
      // có lẽ sẽ xử lý ở đây
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  // Hàm chuyển đổi giây thành định dạng mm:ss
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    // Chọn đáp án đầu tiên cho mỗi câu hỏi khi danh sách câu hỏi thay đổi
    const setDefaultSelectedAnswers = () => {
      const defaultAnswers = {};
      questions.forEach((question) => {
        defaultAnswers[question.id] = [];
      });
      setSelectedAnswers(defaultAnswers);
    };

    if (questions.length > 0) {
      setDefaultSelectedAnswers();
    }
  }, [questions]);

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
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = () => {
    // Tạo mảng listQuestionSubmitted từ selectedAnswers
    const listQuestionSubmitted = Object.keys(selectedAnswers).map(
      (questionId) => ({
        id: +questionId,
        answersSubmittedId: selectedAnswers[questionId],
      })
    );
    dispatch(submitQuestionsAction(token, listQuestionSubmitted));
    navigate(`/quiz-result`);
  };

  // Xác định loại input dựa trên số lượng đáp án
  const determineInputType = (question) => {
    return question.answers.length === 2 ? "radio" : "checkbox";
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
            <div className="quiz-ques__item" key={questions[currentPage]?.id}>
              <div className="quiz-ques__item--left"></div>
              <div className="quiz-ques__item--right">
                <p>
                  Question {currentPage + 1}/{questions?.length}
                </p>
                <span>{questions[currentPage]?.title}</span>
              </div>
            </div>
            <div className="quiz-ques__answer">
              <p>Choose answer</p>
              <div className="quiz-ques__answer--option">
                {questions[currentPage]?.answers?.map((option) => (
                  <div className="quiz-ques__answer--item" key={option.id}>
                    <input
                      type={determineInputType(questions[currentPage])}
                      id={option.id}
                      name={`question_${questions[currentPage]?.id}`}
                      value={option.id}
                      checked={selectedAnswers[
                        questions[currentPage]?.id
                      ]?.includes(option.id)}
                      onChange={() =>
                        handleAnswerChange(
                          questions[currentPage]?.id,
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
            {currentPage > 0 && (
              <button className="btn" onClick={handleBack}>
                Back
              </button>
            )}
            {currentPage < questions?.length - 1 && (
              <button className="btn" onClick={handleNext}>
                Next
              </button>
            )}
            {currentPage === questions?.length - 1 && (
              <button className="btn" onClick={handleSubmit}>
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPlay;
