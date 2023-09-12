pasta zerada => npm init -y
apagar o “type”:”module” do package.json
criar a pasta src e colocar o index.ts
npm i -D typescript nodemon ts-node
Muda o package.json para colocar o script: "dev": "nodemon src/index.ts"
npx tsc --init
usar a config que for passada ou usar a que for melhor
geralmente usamos essa aqui:
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
  },
}
rodar npx tsc
Mudar os scripts do package.json para:
  "scripts": {
    "build": "tsc && tsc-alias",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
criar o nodemon.json para fazer o tsconfig-paths/register para usar path mapping
próximos passos:
npm i express joi pg http-status
npm i -D @types/express @types/node @types/pg tsconfig-paths tsc-alias
banco pg:
CREATE TABLE "users" (
	"userId" SERIAL PRIMARY KEY,
	"name" TEXT,
	"email" TEXT,
	"password" TETX
);
Criar todas as pastas de camadas, o próprio projeto é uma documentação básica de um simples CRUD usando ts
