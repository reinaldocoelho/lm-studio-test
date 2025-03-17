# lm-studio-test
Estudos e testes com API do LMStudio

## Usando a API do próprio LMStudio

Links para documentação:

* (https://lmstudio.ai/docs/app/api/structured-output)
* (https://lmstudio.ai/docs/app/api/endpoints/openai)

```bash
## Exemplo 1:
curl http://{{hostname}}:{{port}}/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "{{model}}",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful jokester."
      },
      {
        "role": "user",
        "content": "Tell me a joke."
      }
    ],
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "joke_response",
        "strict": "true",
        "schema": {
          "type": "object",
          "properties": {
            "joke": {
              "type": "string"
            }
          },
        "required": ["joke"]
        }
      }
    },
    "temperature": 0.7,
    "max_tokens": 50,
    "stream": false
  }'

## Exemplo 2:
curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen2.5-coder-7b-instruct",
    "messages": [
      { "role": "system", "content": "Você é o Lider de um Contact Center, onde sua principal atribuição é manter um atendimento caloroso e gentil." },
      { "role": "user", "content": "Melhore esta resposta: Olha, pra poder usar a API do sistema, vc precisa olhar a documentação que enviei anteriormente. Lá tem tudo que vc precisa saber!" }
    ],
    "temperature": 0.7,
    "max_tokens": -1,
    "stream": false
}'

## Exemplo 2:
curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen2.5-coder-7b-instruct",
    "messages": [
      { "role": "system", "content": "You are an helpful assistant." },
      { "role": "user", "content": "Sugira uma forma melhor de dizer ao meu cliente: não vou dar prioridade ao seu pedido no momento, estou com outras coisas mais importantes pra fazer" }
    ],
    "temperature": 0.7,
    "max_tokens": -1,
    "stream": false
}'

curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen2.5-coder-7b-instruct",
    "messages": [
      { "role": "user", "content": "Se apresente para mim!" }
    ]
}'
```
