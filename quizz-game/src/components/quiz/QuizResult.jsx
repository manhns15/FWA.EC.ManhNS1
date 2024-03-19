const QuizResult = () => {
  return (
    <>
      <div className="quiz-result">
        <div className="quiz-result__heading">
          <p className="h2">Nguyen Sy Manh</p>
          <span>Read the following instructions</span>
        </div>
        <div className="quiz-result__content">
          <div className="quiz-result__content--left"></div>
          <div className="quiz-result__content--right">
            <ul>
              <li>
                <span>Name: </span>
                <span>Nguyen Sy Manh</span>
              </li>
              <li>
                <span>Date: </span>
                <span>14/03/2024</span>
              </li>
              <li>
                <span>Time Limit: </span>
                <span>30 Mins</span>
              </li>
              <li>
                <span>Quizz pass: </span>
                <span>20/30</span>
              </li>
              <li>
                <span>Points: </span>
                <span>100 Points</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="quiz-result__desc">
          <p>Instructions</p>
          <span>
            This quiz consists of 5 multiple-choice questions. To be successful
            with the quizzes, it’s important to conversant with the topics. Keep
            the following in mind: <br />
            Timing - You need to complete each of your attempts in one sitting,
            as you are allotted 30 minutes to each attempt.
            <br />
            Answers - You may review your answer-choices and compare them to the
            correct answers after your final attempt. <br />
            To start, click the `Start` button. When finished, click the
            `Submit` button.
          </span>
        </div>
        <div className="quiz-result__btn">
          <button className="btn">Done</button>
        </div>
      </div>
    </>
  );
};

export default QuizResult;
