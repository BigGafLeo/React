import quizEndLogo from "../assets/quiz-complete.png";

import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const wrongAnswers = userAnswers.filter(
    (answer, index) => answer !== QUESTIONS[index].answers[0]
  );

  return (
    <div id="summary">
      <img src={quizEndLogo} alt="quizEndLogo" />
      <h2>Quiz is completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.round((skippedAnswers.length / userAnswers.length) * 100)}%
          </span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.round((correctAnswers.length / userAnswers.length) * 100)}%
          </span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">
            {Math.round(
              ((wrongAnswers.length - skippedAnswers.length) /
                userAnswers.length) *
                100
            )}
            %
          </span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let sccClass = "user-answer";
          if (answer === null) {
            sccClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            sccClass += " correct";
          } else {
            sccClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={sccClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
