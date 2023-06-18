import axios from "axios";

export default async function completitionAPI(prompt: string) {
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
          Authorization: `Bearer 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`,
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
