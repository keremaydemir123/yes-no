import { Configuration, OpenAIApi } from "openai";
import { Answer } from "./types";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
console.log("apiKey", apiKey);

const config = new Configuration({
  apiKey,
});

const openai = new OpenAIApi(config);

async function askChatGPT(question: string) {
  const todaysWord = "elma";
  const prompt = `There is a game called "Guess the Word" where one person tries to guess a word,
  either the person ask question about the word, or they guess the word directly,
  if they ask a question, you must answer with "Yes" or "No",
  you must only respond with one word "Yes" or "No",
  if the question does not make sense, just say 🤷
  if the question is not related to ${todaysWord}, just say 🤷
  if you don't understand the question, just say 🤷
  if the person guesses the correct word just say "Congratulations! You win! 🎉 🥳"
  ---
  Question: ${question}
`;
  const res: Answer = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 20,
      temperature: 0.9,
      top_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
    })
    .then((res) => res.data.choices[0].text as Answer)
    .catch((err) => `Unable to query ChatGPT: ${err}`);

  return res;
}

export default askChatGPT;
