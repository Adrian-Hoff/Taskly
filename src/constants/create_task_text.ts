export const create_task_text = `
Separe as informações do texto a seguir em um objeto JSON contendo 
o dia da tarefa, o mes da tarefa, um título para a tarefa e o horário. 
Caso não seja possível responder com: "não foi possivel criar a tarefa". 
Atenha-se a responder com apenas um obj JSON. Formato do JSON:
{
    "dia":"",
    "mes":"",
    "horário":"",
    "titulo":"" 
}, o texto da tarefa é: 
`;

export const create_task_text_two = ` O texto é uma tarefa a ser realizada com
Dia,
Horario,
Titulo,
  o formato da resposta deve vir em JSON entre {}, nao adicione nada a mais que o objeto JSON na resposta. 

      "dia": resposta (padrão:{
          se for hoje => 'current_day';
          se for amanha => 'next_day';
          se for dia do mês => numero em string;
      }),
      "mes": se foi mencionado, retorne o numero do mes no calendario, se nao mencionado retorne: 'current_month'
      "time": horario em formato de tempo: "hh:mm", caso nao informado: "null"
      "tittle": de um titulo para a tarefa
  

  texto:`;
