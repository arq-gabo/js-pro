function add(a: number, b: number): number{
    return a + b
}

const sum = add(4, 6);

function createAddler(a: number): (number) => number {
    return function(b: number){
        return b + a
    }
}

const addFour = createAddler(4)
const fourPlusSix = addFour(6)

function fullName(firstName: string, lastName: string = "Guerra"): string {
    return `${firstName} ${lastName}`
}

const aaroncito = fullName("Aaron")

console.log(aaroncito)