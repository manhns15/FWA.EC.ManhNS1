import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsAction } from "../../actions/questionAction";

const QuizPlay = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { questions, loading, error } = useSelector((state) => state.questions);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});

  useEffect(() => {
    dispatch(fetchQuestionsAction(token));
  }, [dispatch, token]);

  const handleAnswerChange = (questionId, optionId) => {
    setSelectedAnswer({
      ...selectedAnswer,
      [questionId]: optionId,
    });
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = () => {
    // Tạo mảng listQuestionSubmitted từ selectedAnswer
    const listQuestionSubmitted = Object.keys(selectedAnswer).map(
      (questionId) => ({
        id: questionId,
        answersSubmittedId: [selectedAnswer[questionId]],
      })
    );

    // Đoạn này có thể dispatch mảng listQuestionSubmitted hoặc làm bất kỳ điều gì khác với dữ liệu đã submit
    console.log("Data submitted:", listQuestionSubmitted);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
            <span> 29:09</span>
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
                      type="radio"
                      id={option.id}
                      name={`question_${questions[currentPage]?.id}`}
                      value={option.id}
                      checked={
                        selectedAnswer[questions[currentPage]?.id] === option.id
                      }
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
