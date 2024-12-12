// Uma fábrica de bolachas produz pacotes com 500 gramas cada e tem disponível um banco de dados contendo o peso de todos os pacotes por lote produzido.
// A partir desses dados, a fábrica quer saber qual a variação do maior e do menor pacote e quantos pacotes estão acima e quantos pacotes estão abaixo.
// Caso a variação ocorra em mais de 20% do lote, deve mostrar uma mensagem dizendo "lote com alta divergência", caso contrário, mostrar mensagem, "lote padrão".
// Gere um array contendo valores aleatórios entre 400 e 600, para poder usá-lo no exercício.


// Função para gerar um array com valores aleatórios entre um mínimo e um máximo
function gerarArrayAleatorio(tamanho: number, minimo: number, maximo: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < tamanho; i++) {

      // Gera um número aleatório entre mínimo e máximo (inclusive)
      const valor = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      array.push(valor);
    }

    return array;
  }

  // Gera um array com 100 valores aleatórios entre 400 e 600
  const pesosPacotes: number[] = gerarArrayAleatorio(100, 400, 600);

  // Encontra o maior e o menor peso
  const maiorPeso: number = Math.max(...pesosPacotes);
  const menorPeso: number = Math.min(...pesosPacotes);

  // Calcula a variação entre o maior e o menor peso
  const variacao: number = maiorPeso - menorPeso;

  // Conta quantos pacotes estão acima e abaixo do peso ideal (500g)
  let acimaDoPeso: number = 0;
  let abaixoDoPeso: number = 0;

  pesosPacotes.forEach((peso) => {
    if (peso > 500) {
      acimaDoPeso++;
    } else if (peso < 500) {
      abaixoDoPeso++;
    }
  });

  // Verifica se a variação é maior que 20% do lote
  const limiteVariacao: number = pesosPacotes.length * 0.2;
  const mensagem: string =
    variacao > limiteVariacao
      ? "Lote com alta divergência"
      : "Lote padrão";

  // Imprime os resultados
  console.log("Pesos dos pacotes:", pesosPacotes);
  console.log("Maior peso:", maiorPeso);
  console.log("Menor peso:", menorPeso);
  console.log("Variação:", variacao);
  console.log("Pacotes acima do peso:", acimaDoPeso);
  console.log("Pacotes abaixo do peso:", abaixoDoPeso);
  console.log(mensagem);
