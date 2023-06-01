import "./App.css";
import AnswerText from "./components/AnswerText";
import QuestionInput from "./components/QuestionInput";
import QuestionText from "./components/QuestionText";
import { useQuestionContext } from "./context/QuestionContext";

function App() {
  const { questions, answers } = useQuestionContext();

  return (
    <>
      <section>
        <h1>Questions</h1>
        <ul>
          {questions.map((question, index) => (
            <QuestionText key={index} text={question} />
          ))}
        </ul>
        <ul>
          {answers.map((answer, index) => (
            <AnswerText key={index} text={answer} />
          ))}
        </ul>
      </section>

      <QuestionInput />
    </>
  );
}

export default App;
