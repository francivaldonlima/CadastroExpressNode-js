# CadastroExpressNode-js
Exercicio do curso de desenvolvedor fullstacl utilizando o node.js, express, typescript, typeorm com a ajuda do chatgpt.

## Estrutura de Pastas
```shell
  $ bach
├── src
     ├── controllers
         └─ employeeController.ts
     ├─ models
         └─ employee.ts
     ├─ routes
         └─employeeRoutes.ts
     ├─ services
         └─ employeeService.ts
     ├─ database
         └─ connection.ts
     ├─ middlewares
         └─ validationMiddleware.ts
     ├─ app.ts
     ├─ server.ts
├── ormconfig.json
└── tsconfig.json

```
## Comando Completo para Criar Pastas e Arquivos

```sh
mkdir -p src/controllers src/models src/routes src/services src/database src/middlewares && \
touch src/controllers/employeeController.ts \
      src/models/employee.ts \
      src/routes/employeeRoutes.ts \
      src/services/employeeService.ts \
      src/database/connection.ts \
      src/middlewares/validationMiddleware.ts \
      app.ts \
      server.ts

```
## Instruções:
1. Execute  `npm init -y`  para inicializar o projeto .
2. Instale as dependências: `npm install express typeorm sqlite3 reflect-metadata class-validator`.
 3.  Adicione o suporte a TypeScript: `npm install typescript ts-node @types/node @types/express`.
4. Execute `npx tsc --init` para gerar o `tsconfig.json`.
5. Crie as pastas e arquivos conforme a estrutura de pastas fornecida.
6. Execute o projeto com `npx ts-node src/server.ts`.


Esse projeto segue o padrão MVC e fornece as funcionalidades de CRUD para o cadastro de funcionários, além de validação para campos obrigatórios.
