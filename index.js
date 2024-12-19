//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets(0));
const totalPassos = parseInt(gets(0));
let posicaoFinal = StepCount(posicaoInicial,totalPassos);

//TODO: Calcule a posição final do herói:

function StepCount(NumA,NumB){
     let posicao = NumA + NumB
    return posicao
}



// Imprime a posição final
print("Posicao final do heroi: ", posicaoFinal);

