## O que é API? REST e RESTful? 💻👨‍💻

### Entendendo oque é API

#### Analogia Restaurante 🍗🍕

> Cliente (client)
> Garçom (Pedidos, levar seus pedidos para a cozinha) (API)
> Cozinha (Server)

#### Conceito 📋

> Acrônimo de *Application Programming Interface* (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços;
- Meio e campo entre as tecnologias;
- Intermediador para troca de informações.

---

### Entendendo oque é REST

#### Analogia Restaurante 🍗🍕

> O cliente quer o restaurante Limpinho,
> Que te atenda bem,
> Que te de aquilo que você pediu de forma rápida.
> Não quer cliente gritando,
> Xingando etc...

#### Conceito 📋

> Um acrônimo para REpresentational State Transfer (Transferência de Estado Representativo).

> Será feita a transferência de dados de uma maneira simbólica, representativa, figurativa, de maneira didática, com boas práticas.

> O REST determina obrigações para uma API nessa transferência de dados.

> A transferência de dados geralmente é feita usando o protocolo HTTP.

> Resources no REST seria uma entidade, um objeto.
> É fundamental entender oque é um resource para poder trabalhar com REST. É um conceito um pouco abstrato.
-  Geralmente o nome de um **Resource** é o endpoint. Ex: http://localhost:3000/clientes > Resource é o "clients".


#### 06 NECESSIDADES/REGRAS (constraints) para ser RESTful

- *Client-server*: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para mobile com a mesma API, por exemplo.
- *Stateless*: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.
- *Cacheable*: As respostas para uma requisição, deverão ser explícitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.
- *Layered System*: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.
- *Code on demand (optional)*: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.
- *Uniform Interface*: 
> Uniform significa "uniforme", ou seja, uma única forma. Podemos usar a palavra consistente, constante, padrão ou coerente certo?? O que é então uma Interface Uniforme? Sabe quando falei que se você escolher o endpoint `/client` do seu resource, você deve sempre seguir isso para todos os seus Resources? Então, a interface que você está construindo para os resources está seguindo essa constraint. Você criou uma padronização dos seus resources. Então, posso afirmar que (por enquanto) você está seguindo corretamente a proposta. Sabe quando falo que usamos por padrão o **.json** como formato de escrita das mensagens? Então. Desde que sua API não fiquei usando uma hora json, outra hora xml,  outra hora outro formato, você continua seguindo o conceito de uniformidade da interface, e maneira de se comunicar está bacana. Sua API está coerente até aqui. Sabe quando falo que nossa API precisa enviar detalhes para quem está consumindo ela? Então, precisamos sempre manter nosso resource com informações suficientes para quem vai consumi-lo. Talvez links para outros endpoints, por exemplo. Muito bem, estamos coerentes neste passo também. Até aqui, fica intuitivo e tranquilo para meu cliente entender como minha API funciona, e o que posso fazer com ela, então, Interface está Uniforme. Sabe, também, quando falo que devemos usar bem certinho os verbos HTTP para comunicação clara e efetiva? É isso! Matou a charada!! O uso correto dos verbos é coerente, então, estamos sendo uniformes na nossa interface. Por fim, já ficou claro os conceitos que você deve usar para criar a interface de comunicação da sua API para ser uniforme! 

---

### Entendendo oque é RESTful

> RESTful, é uma aplicação nos padrões REST.


---
### ALGUMAS BOAS PRÁTICAS


- Usar nas requisições de sua aplicação, Verbos HTTP de acordo com sua função(abaixo os principais):
  - *GET*: Receber dados de um Resource;
  - *POST*: Enviar dados ou informações para serem processados por um Resource;
  - *PUT*: Atualizar dados de um Resource;
  - *DELETE*: Deletar dados de um Resource.

- Utilizar plural ou singular na criação dos endpoints? **_NÃO IMPORTA!_**  Use um padrão!

- Não deixar barra no final do endpoint;

- Nunca deixe o cliente sem resposta!
- Status das Respostas no HTTP:
  - 1xx: Informação;
  - 2xx: Sucesso:
    - 200: OK;
    - 201: CREATED;
    - 204: Não tem conteúdo PUT POST DELETE.
  - 3xx: Redirection;
  - 4xx: Client Error:
    - 400: Bad Request;
    - 404: Not Found!
  - 5xx: Server Error:
    - 500: Internal Server Error.