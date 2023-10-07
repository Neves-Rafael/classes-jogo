//variáveis com as informações
let nickName = "rafael";
let age = 50;
let classe = "guerreiro";
let messageAtaque = "";

//(1º opção)utilização do switchCase para verificar a classe e atribuir a mensagem de ataque
switch (classe) {
  case "guerreiro":
    messageAtaque = "atacou usando Espada";
    break;

  case "mago":
    messageAtaque = "atacou usando Magia";
    break;

  case "monge":
    messageAtaque = "atacou usando Artes Marciais";
    break;

  case "ninja":
    messageAtaque = "atacou usando Shuriken";
    break;
}

//(2º opção)utilizando um array para armazenar e facilitar ao adicionar mais dados

const tipoClasse = [
  { estilo: "guerreiro", messageAtaque: "atacou usando Espada" },
  { estilo: "mago", messageAtaque: "atacou usando Magia" },
  { estilo: "monge", messageAtaque: "atacou usando Artes maciais" },
  { estilo: "ninja", messageAtaque: "atacou usando Sjuriken" },
];

const verificarObj = tipoClasse.map((item) => {
  if (item.estilo === classe) {
    messageAtaque = item.messageAtaque;
  }
});

//classe para armazenar os dados
class hero {
  //construtor da classe
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  //Método da classe para exibir a mensagem
  resposta() {
    console.log(`o ${this.nome} da classe ${this.tipo} ${messageAtaque}!`);
  }
}

//pega o valor das variáveis e passa para a classe
const call = new hero(nickName, age, classe);

//chama o método da classe
call.resposta();
