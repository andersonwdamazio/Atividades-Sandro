# Lo-fi Flow

Landing page responsiva de playlists lo-fi, construída com React, TypeScript e Vite. O envio do formulário de contato é tratado por uma Netlify Function com Nodemailer.

## Rodar localmente

1. Instale as dependências com `npm install`.
2. Copie `.env.example` para `.env` e preencha as credenciais SMTP de teste e o seu próprio endereço em `CONTACT_EMAIL`.
3. Inicie o Vite e a Netlify Function juntos com `npm run dev:netlify`.
4. Abra o endereço local informado pelo Netlify CLI (normalmente `http://localhost:8888`) e envie uma mensagem para sua própria caixa de entrada.

O formulário só envia uma mensagem quando alguém o submete. Nenhum e-mail de teste é enviado automaticamente.

### Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `SMTP_HOST` | Host SMTP do provedor de e-mail |
| `SMTP_PORT` | Porta SMTP (normalmente `587`) |
| `SMTP_SECURE` | `true` para SSL direto; `false` para STARTTLS |
| `SMTP_USER` | Conta usada para autenticar no SMTP |
| `SMTP_PASS` | Senha de app ou credencial SMTP |
| `CONTACT_EMAIL` | Caixa de entrada que recebe as mensagens |
| `ALLOWED_ORIGIN` | URL do site publicado, sem barra final; pode ficar vazia localmente |

Nunca coloque credenciais reais no Git. O arquivo `.env` está ignorado; `.env.example` contém apenas valores de exemplo.

## Publicar na Netlify

1. Envie o projeto para um repositório Git.
2. Na Netlify, escolha **Add new site > Import an existing project** e conecte o repositório.
3. O `netlify.toml` configura o build (`npm run build`), a pasta publicada (`dist`), as Functions (`netlify/functions`) e o caminho `/api/*`.
4. Cadastre as variáveis SMTP e `CONTACT_EMAIL` em **Site configuration > Environment variables**. Use uma caixa de entrada que você controla durante os testes.
5. Defina `ALLOWED_ORIGIN` com a URL pública do site, salve as variáveis e faça um novo deploy.

A função de contato responde a `POST /api/send-email`. Ela valida o e-mail e a mensagem no servidor, protege a saída HTML contra conteúdo injetado e não retorna detalhes internos do SMTP ao navegador.

## Build local

```bash
npm run build
```
