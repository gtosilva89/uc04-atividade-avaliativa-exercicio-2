// Uma fábrica de bolachas produz pacotes com 500 gramas cada e tem disponível um banco de dados contendo o peso de todos os pacotes por lote produzido.
// A partir desses dados, a fábrica quer saber qual a variação do maior e do menor pacote e quantos pacotes estão acima e quantos pacotes estão abaixo.
// Caso a variação ocorra em mais de 20% do lote, deve mostrar uma mensagem dizendo "lote com alta divergência", caso contrário, mostrar mensagem, "lote padrão".
// Gere um array contendo valores aleatórios entre 400 e 600, para poder usá-lo no exercício.


// Função para gerar um array com valores aleatórios entre um mínimo e um máximo
function gerarArrayAleatorio(tamanho: number, minimo: number, maximo: number): number[] {

  // Inicializa um array vazio para armazenar os valores aleatórios
  const array: number[] = [];

  // Loop para gerar a quantidade especificada de valores aleatórios
  for (let i = 0; i < tamanho; i++) {

    // Gera um número aleatório entre mínimo e máximo (inclusive)
      const valor = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

      // Adiciona o valor gerado ao array
      array.push(valor);
  }

  // Retorna o array com os valores aleatórios
  return array;
}

// Gera um array com 100 valores aleatórios entre 400 e 600, representando os pesos dos pacotes
const pesosPacotes: number[] = gerarArrayAleatorio(50, 400, 600);

// Encontra o maior peso no array usando Math.max()
const maiorPeso: number = Math.max(...pesosPacotes);

// Encontra o menor peso no array usando Math.min()
const menorPeso: number = Math.min(...pesosPacotes);

// Calcula a variação entre o maior e o menor peso
const variacao: number = maiorPeso - menorPeso;

// Inicializa contadores para pacotes acima e abaixo do peso ideal (500g)
let acimaDoPeso: number = 0;
let abaixoDoPeso: number = 0;

// Loop para percorrer todos os pesos no array
for (let i = 0; i < pesosPacotes.length; i++) {

  // Obtém o peso atual do pacote
  const peso = pesosPacotes[i];

  // Verifica se o peso é maior que 500g
  if (peso > 500) {

    // Incrementa o contador de pacotes acima do peso
      acimaDoPeso++;

      // Caso contrário, verifica se o peso é menor que 500g
  } else if (peso < 500) {

    // Incrementa o contador de pacotes abaixo do peso
      abaixoDoPeso++;
  }
}

// Calcula o limite de variação de 20% do tamanho do lote
const limiteVariacao: number = pesosPacotes.length * 0.2;

// Define uma mensagem com base na variação do peso
const mensagem: string =

// Se a variação for maior que o limite, define a mensagem como "Lote com alta divergência"
  variacao > limiteVariacao
      ? "Lote com alta divergência"

      // Caso contrário, define a mensagem como "Lote padrão"
      : "Lote padrão";

// Imprime os resultados no console
console.log("Pesos dos pacotes:", pesosPacotes);
console.log("Maior peso:", maiorPeso);
console.log("Menor peso:", menorPeso);
console.log("Variação:", variacao);
console.log("Pacotes acima do peso:", acimaDoPeso);
console.log("Pacotes abaixo do peso:", abaixoDoPeso);
console.log(mensagem);
