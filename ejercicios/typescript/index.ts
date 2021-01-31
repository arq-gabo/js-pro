//Boolean
let muted: boolean = true;
muted = false;

// numbers
let numerador: number = 42
let denominador: number = 6
let resultado = numerador / denominador

// String
let nombre: string = "Aarón"
let saludo = `Te extraño ${nombre}`

// Arreglos
let people: string[] = []
people = ["Aarón", "Maria", "Ricardo"]
people.push("9000")

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push("Aarón")
peopleAndNumbers.push("2014")

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi Color Favorito es ${colorFavorito}`)

// Any
let comodin: any = "Joker"
comodin = { type: "WildCard" }

// Object
let someObject: object = { type: "WildCard" }