import { LMStudioClient } from "@lmstudio/sdk";
import * as readline from 'readline';

// Função assíncrona para obter uma resposta da API do LM Studio
async function getAnswer(prompt: string) {
  const client = new LMStudioClient();

  // Obtém qualquer LLM carregado
  const llm = await client.llm.model();
  
  if (llm) {
    try {
      const prediction = llm.respond(prompt);
      
      for await (const { content } of prediction) {
        process.stdout.write(content);
      }
      
      process.stdout.write("\n");
    } catch (error) {
      console.error("Erro ao obter a resposta:", error);
    }
  } else {
    console.error("Nenhum LLM carregado");
  }
}

// Função assíncrona para obter uma resposta da API do LM Studio
async function getAnswerWithContext(prompt: string, context?: string) {
  const client = new LMStudioClient();

  // Obtém qualquer LLM carregado
  const llm = await client.llm.model();
  
  if (llm) {
    try {
      // Cria o prompt completo incluindo o contexto (se fornecido)
      let fullPrompt = context ? `${context}\n\n${prompt}` : prompt;

      const prediction = llm.respond(fullPrompt);
      
      for await (const { content } of prediction) {
        process.stdout.write(content);
      }
      
      process.stdout.write("\n");
    } catch (error) {
      console.error("Erro ao obter a resposta:", error);
    }
  } else {
    console.error("Nenhum LLM carregado");
  }
}

// Create an interface for reading lines from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Faça sua pergunta: ', (answer) => {
  // Log the user's input
  console.log(`Segue a resposta:`);
  getAnswer(answer);
  
  // Close the readline interface
  rl.close();
});
