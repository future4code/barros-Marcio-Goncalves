
type TypeStatic = {
    maior:number,
    menor:number,
    media:number,
}

function obterEstatisticas(numeros:number[]):TypeStatic {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Amostra = {
    numeros:number[],
    obterEstatisticas:(numeros:number[]) => TypeStatic
}

const amostra:Amostra = {
    numeros : [10,5,7,6,4,2,46],
    obterEstatisticas
}

console.table(amostra.obterEstatisticas(amostra.numeros));

