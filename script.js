var frutas = ["Banana", "Maçã"]

/* Ponto Push adiciona item no final da lista */
frutas.push("Pera")
frutas.push("Uva")

/* Ponto Unshit adiciona no início da lista */
frutas.unshift("Manga")
frutas.unshift("Kiwi")
console.log(frutas)

/* Ponto Pop remove o último item */
// frutas.pop()

/* Ponto Shift remove o primeiro item */
// frutas.shift()

/* Ponto Splice remove pelo índice */

var perguntaUsuario = prompt("Digite a fruta para deletar")

var indexFruta = frutas.indexOf(perguntaUsuario)

frutas.splice(indexFruta, 1)

console.log(frutas.sort())