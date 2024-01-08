# Esse repo não tem git ignore de propósito.
#### TODO: Código precisa de algumas atualizações para ficar de acordo com os paradigmas do ts e do que é proposto e terminar o markdown de read-me.
<br/>
<p>1 - Criar primeiro o repositório no github já escolhendo a tecnologia para ele criar o git ignore.<br/></p>
<p>2 - Fazer o git clone da repositório, fazer o remote connection se precisar.<br/>
<p>3 - rode: <strong>npm init -y<br/></strong>
<p>4 - apagar o <strong>“type”:”module”</strong> do package.json caso ele esteja.<br/>
<p>5 - criar a pasta <strong>src</strong> e colocar dentro o <strong>index.ts<br/></strong>
<p>6 - instalar as dependências para desenvolvimento: <strong>npm i -D typescript nodemon ts-node<br/></strong>
<p>7 - Muda o package.json para colocar o script: "dev": "nodemon src/index.ts"<br/>
<p>8 - criar o arquivo de configuração do ts: npx tsc --init<br/>
<p>9 - usar a config que for passada ou usar a que for melhor geralmente usamos essa aqui:<br/></p>
<blockquote>
{
  "compilerOptions": {
    "outDir": "dist",
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "baseUrl": "src",
    "paths": {
      "@/*": [
        "*"
      ]
    }
  },
  "ts-node": {
    "esm": true
  }
}</blockquote>
<br/>
<p>10 - Mudar os scripts do package.json para:</p>
  <blockquote>
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.ts",
    "build": "tsc && tsc-alias",
    "start": "node dist/index.js"
  };
  </blockquote>
  <br/>
<p>11 - rodar npx tsc (e sempre rodar quando quiser usar o npm run start, para ser feita a build em js);</br>
<p>12 - npm i express joi pg http-status dotenv
<p>13 - npm i -D @types/express @types/node @types/pg tsconfig-paths tsc-alias @types/dotenv
<p>14 - criar o .env, tem exemplo nesse repo
<p>15 - banco pg simples para criação de um CRUD:
<blockquote>
CREATE TABLE "users" (
	"userId" SERIAL PRIMARY KEY,
	"name" TEXT,
	"email" TEXT,
	"password" TEXT
);
</blockquote>
</br>
<p>16 - No tsconfig.json já está o mapeamento completo dos paths, porém precisa ainda criar o nodemon.json na raiz do projeto para fazer o tsconfig-paths/register para usar path mapping(muito bom para evitar paths hell):
<blockquote>
{
  "execMap": {
    "ts": "node --require ts-node/register --require tsconfig-paths/register"
  }
}
</blockquote>
</br>
<p>17 - para fazer os throw de erros devo instalar: npm i express-async-errors e colocar o import no app logo após o express</p>
<p>18 - Criar todas as pastas de camadas, o próprio projeto é uma documentação básica de um simples CRUD usando ts:
<ul>
<li>src: index.ts;
<li>errors: para usar o throw e tirar os try caught do código;
<li>routers: index-router.ts e um arquivo para cada rota exportado e importado para o index-router;
<li>controllers: se possível sem try caught, usando throw de erros;
<li>services: com throw e a lógicas/regras de negócios;
<li>repositories: consulta ao banco de forma segura e se possível sem lógica;
<li>protocols: estruturação das informações e tipagem com ts;
<li>schemas: mascaras de joi para integridade junto aos protocols do ts;
<li>middlewares: sempre vai ter validadeSchema e errorhandling;
<li>utils: para funções úteis que não encaixam nos acima;
</ul>
</br>
<p> 19 - criar a autenticação do usuário e login usando jwt, para isso segue os seguintes passos:
<ul>
<li>npm i jsonwebtoken @types/jsonwebtoken
<li>importar ele: import jwt = require('jsonwebtoken');
<li>
<li>
<li>
<li>
</ul>
Para fazer o deploy no render:
<ul>
<li>Build Command: npm i && npm run build
<li>Start Command: npm run start
</ul>
