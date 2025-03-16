# lm-studio-test
Estudos e testes com API do LMStudio

## Usando a API do próprio LMStudio

NOTA: Nao deu certo

```bash
curl -X POST https://api.lmstudio.com/ask \
-H "Content-Type: application/json" \
-d '{
  "context": "Capybara: A large, herbivorous rodent native to South America.",
  "question": "What is the habitat of a Capybara?"
}'
```