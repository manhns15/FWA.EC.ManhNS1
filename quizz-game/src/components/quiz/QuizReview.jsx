import { useNavigate } from "react-router-dom";

const QuizReview = () => {
  const dataChecked = JSON.parse(sessionStorage.getItem("listQuestionChecked"));
  const navigate = useNavigate();
  const determineInputType = (question) => {
    return question.answers.length <= 4 ? "radio" : "checkbox";
  };
  return (
    <>
      <div className="quiz-ques">
        <div className="quiz-ques__heading">
          <div className="quiz-ques__name">
            <p className="h2">Review</p>
          </div>
        </div>
        <div className="quiz-ques__content">
          {dataChecked.listQuestionChecked.map((res, index) => (
            <>
              <div className="quiz-ques__item" key={res.id}>
                <div className="quiz-ques__item--right">
                  <p>Question {index + 1}: </p>
                  <span>{res.title}</span>
                </div>
              </div>
              <div className="quiz-ques__answer">
                <p>Choose answer</p>
                <div className="quiz-ques__answer--option">
                  {res.answers?.map((option, index) => (
                    <div className="quiz-ques__answer--item" key={index}>
                      <input
                        type={determineInputType(res)}
                        id={option.id}
                        name={`answer_${res.id}`}
                        value={option.content}
                        checked={option.hasOwnProperty.call(
                          option,
                          "is_submit_correct"
                        )}
                        disabled
                      />
                      <label htmlFor={option.id}>{option.content}</label>
                      <span>
                        {option.is_submit_correct == false ? (
                          <i className="bi bi-x-circle cl-fail"></i>
                        ) : option.is_correct == true ? (
                          <i className="bi bi-check2-circle cl-pass"></i>
                        ) : (
                          ""
                        )}
                        {/* <i className="bi bi-check2-circle cl-pass"></i>
                        <i className="bi bi-x-circle cl-fail"></i> */}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}

          <div className="quiz-ques__btn">
            <button
              type="button"
              className="btn"
              onClick={() => navigate(`/quiz-result`)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizReview;
