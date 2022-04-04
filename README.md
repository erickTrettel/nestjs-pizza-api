# Pizza step form API

Esta API é um mock para que [este portal](https://github.com/erickTrettel/pizza-step-form-portal) possa consumir seus dados.

## Como rodar?

Para executar o projeto, após fazer o clone deste repositório, você pode instalar as dependências necessárias
com o comando `yarn` e depois executar o comando `yarn start:dev`.
Esta aplicação se conecta com um banco de dados MySQL, que deve rodar localmente. Você precisa ter um servidor
MySQL rodando, e pode infomar as credenciais de conexão em um arquivo `.env`, seguindo o exemplo do arquivo
`.env.example`.

## Documentação

Dentro do projeto, você pode conferir um arquivo de importação para o Postman que contém os endpoints dessa API

## Produção

Esta API ainda não está em produção. Mais informações em breve...

## Endpoints

| Método | URL                  | Descrição                        |
| ------ | -------------------- | -------------------------------- |
| GET    | /dough               | Busca as massas disponíveis      |
| POST   | /dough               | Cria uma nova massa              |
| GET    | /sizes               | Busca os tamanhos disponíveis    |
| POST   | /sizes               | Cria um novo tamanho             |
| GET    | /fillings            | Busca os recheios disponíveis    |
| POST   | /fillings            | Cria um novo recheio             |
| GET    | /crusts              | Busca as bordas disponíveis      |
| POST   | /crusts              | Cria uma nova borda              |
| GET    | /day_suggestion/:day | Busca a sugestao de pizza do dia |
| POST   | /day_suggestion/:day | Seleciona a pizza do dia         |

## Progresso

- [x] Banco de dados
- [ ] Validação de dados
- [ ] Testes
- [ ] Autenticação com JWT
- [ ] Cache
- [ ] Logs
