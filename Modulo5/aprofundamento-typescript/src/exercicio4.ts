type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// criaria a pasta src, dentro dela criaria o arquivo.ts, no caso exercicio4.ts,
// iria ate o package.json criar o script com o nome e o caminho para ser executado
// EX: "exerc4" : tsc && node ./build/exercicio4.ts 
// nao é necessario criar a pasta build, porque o proprio typeScript na transpilação ja faz nos faz esse favor!

//