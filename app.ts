interface Pessoa{
    name: string,
    age: number,
    profession?: string // campo opcional
}//instanciando o objeto Pessoa

const francio: Pessoa = {
    name: "Francio",
    age: 19
}
const clara: Pessoa = {
    name: "Clara",
    age: 18
}

const listaPessoas: Array<Pessoa> = [
    francio,
    clara
] //O tipo passado é o tipo Array em que os campos são objetos do tipo pessoa

//OU

const listaNum: number[] = [1, 2, 3]