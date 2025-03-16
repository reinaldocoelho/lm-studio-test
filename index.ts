import { LMStudioClient } from "@lmstudio/sdk";

const client = new LMStudioClient();

// Get any loaded LLM
client.llm.model().then(async (llm) => {
  const prediction = llm.respond("What is a Capybara?");
  for await (const { content } of prediction) {
    process.stdout.write(content);
  }
  process.stdout.write("\n");
}).catch(console.error);

