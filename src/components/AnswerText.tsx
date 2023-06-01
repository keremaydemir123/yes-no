type Props = {
  text: string;
};

function AnswerText({ text }: Props) {
  return <div style={{ color: "30ff30" }}>{text}</div>;
}

export default AnswerText;
