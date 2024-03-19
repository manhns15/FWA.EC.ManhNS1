const QuizPlay = () => {
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
          <div className="quiz-ques__item">
            <div className="quiz-ques__item--left"></div>
            <div className="quiz-ques__item--right">
              <p>Question 1/5</p>
              <span>
                Guy Bailey, Roy Hackett and Paul Stephenson made history in
                1963, as part of a protest against a bus company that refused to
                employ black and Asian drivers in which UK city?
              </span>
            </div>
          </div>
          <div className="quiz-ques__answer">
            <p>Choose answer</p>
            <div className="quiz-ques__answer--option">
              <div className="quiz-ques__answer--item">
                <input
                  type="radio"
                  id="answer_1"
                  name="answer"
                  value="answer_1"
                  checked
                />
                <label htmlFor="answer_1">Answer 1</label>
              </div>
              <div className="quiz-ques__answer--item">
                <input
                  type="radio"
                  id="answer_2"
                  name="answer"
                  value="answer_2"
                />
                <label htmlFor="answer_2">Answer 2</label>
              </div>
              <div className="quiz-ques__answer--item">
                <input
                  type="radio"
                  id="answer_3"
                  name="answer"
                  value="answer_3"
                />
                <label htmlFor="answer_3">Answer 3</label>
              </div>
              <div className="quiz-ques__answer--item">
                <input
                  type="radio"
                  id="answer_4"
                  name="answer"
                  value="answer_4"
                />
                <label htmlFor="answer_4">Answer 4</label>
              </div>
            </div>
          </div>
          <div className="quiz-ques__btn">
            <button className="btn">Back</button>
            <button className="btn">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPlay;
