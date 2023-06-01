import { useState } from "react";
import { useQuestionContext } from "../context/QuestionContext";

function QuestionInput() {
  const [question, setQuestion] = useState("");

  const { askQuestion } = useQuestionContext();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    askQuestion(question);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
    </form>
  );
}

export default QuestionInput;
