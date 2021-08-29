# quiz-backend

## Configurando e Iniciando o Projeto
1. Crie o arquivo .env copie o conteúdo do .env.example para dentro dele;
2. Inicie um banco de dados MySQL com o nome do shema 'quiz' ou configure da forma que achar melhor, mas não se esqueça de alterar no .env;
3. No terminal digite `yarn install` para instalar as dependencias do projeto;
4. No terminal digite `yarn knex migrate:latest` para rodar as migrations (após rodar esse comando visualize o banco de dados para ver se criou as tabelas corretamente);

## Criando novas tabelas
Sempre que for criar uma tabela nova ou alterar colunas digite no terminal  `yarn knex migrate:make <nome da migration>`;
Dando tudo certo basta visualizar o arquivo da migration em business/data/migrations;
Tudo pronto para rodar a nova migration digite no terminal `yarn knex migrate:latest`;
