# desenrolai-web-sveltekit-template

Template GitHub para aplicações web Desenrolai com **SvelteKit + adapter-node**.

## Uso

```bash
npm install
npm run dev       # dev server
npm run build     # produção (output em build/)
node build        # serve na porta 3000
```

## Rotas

- `/` — página inicial
- `/api/health` — healthcheck `{ status: 'ok' }`

## Docker

```bash
docker build -t desenrolai-web-sveltekit-template .
docker run -p 3000:3000 desenrolai-web-sveltekit-template
```

## forge.yaml

Configuração para o Desenrolai Forge (`kind: web`, `tech: sveltekit`, porta 3000).
