const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const hour = String(now.getHours()).padStart(2, "0");
const minute = String(now.getMinutes()).padStart(2, "0");
const second = String(now.getSeconds()).padStart(2, "0");

const utcString = `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;

export function create_task_text(text: string) {
  const create_task_text = `
Com base no texto: "${text}".
retorne um json "{"title": "", "utc": "", "description": ""}", 
onde tittle é o titulo curto da tarefa, 
utc é a data da realização da tarefa. e 
descrição imperativa sem o uso de pronomes com as infos adicionais que o texto da.
considere que hoje é dia ${utcString}, segunda feira
`;
  return create_task_text;
}
