import { TypeCompletionAPI } from "../types/@api/TypeCompletionAPI";

export default async function completitionAPI({
  prompt,
  user,
}: TypeCompletionAPI) {
  return fetch('https://api.openai.com/v1/chat/completions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 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`,
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo-0125",
      "response_format": { "type": "json_object" },

      "messages": [
        {
          "role": "system",
          "content": `create a task JSON with the following structure:
          {
            "title": "Task title e.g. shower, if the text doesnt seems to be a task return 'null'",
            "date_and_time_UTC": "Task UTC format date and time e.g. 2024-02-20T18:50:55.563Z. consider the current date 2024-28-02T18:18:00Z to determine the task utc time and date, adjust the time said by the user considering user GMT-3"
          }
          `
        },
        {
          "role": "user",
          "content": prompt
        }
      ]
    })
  })
    .then(response => {
      console.log('STEP-1');
      
      return response.json()
    })
    .then(data => {
      console.log('STEP-2');
      console.log(JSON.stringify(data));
      
      const taskJSON = JSON.parse((data.choices[0].message.content))
      return taskJSON
    })
  }
  