import { createContext, useContext, useState } from "react";
import askChatGPT from "../askChatGPT";
import { Answer, Question } from "../types";

interface QuestionContextType {
  questions: string[];
  answers: string[];
  askQuestion: (question: string) => void;
}

const QuestionContext = createContext<QuestionContextType>(
  {} as QuestionContextType
);

// eslint-disable-next-line react-refresh/only-export-components
export function useQuestionContext() {
  return useContext(QuestionContext);
}

const QuestionProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  async function askQuestion(question: string) {
    setQuestions([...questions, question]);
    const answer = await askChatGPT(question);
    setAnswers([...answers, answer]);
  }
  return (
    <QuestionContext.Provider
      value={{
        questions,
        answers,
        askQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
