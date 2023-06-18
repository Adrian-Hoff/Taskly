import axios from "axios";
import { TypeCompletionAPI } from "../types/@api/TypeCompletionAPI";

export default async function completitionAPI({
  prompt,
  user,
}: TypeCompletionAPI) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt,
        max_tokens: 100,
        model: "text-davinci-003",
        temperature: 0.3,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.key}`,
        },
      }
    );
    console.log(response.data.usage);
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error("Erro na requisição");
  }
}
