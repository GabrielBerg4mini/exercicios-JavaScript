
// const sum = function(n1, n2) {
//     let total = n1 + n2;
//     return total
// };

// let n1 = 34;
// let n2 = 25;

// console.log(`n1 é ${n1}`);
// console.log(`n2 é ${n2}`);
// console.log(`A soma é  ${sum(n1, n2)}`);

// function fazerSuco(fruta1, fruta2) {
//     return fruta1 + fruta2;
// };

// const copo = fazerSuco("banana", "maça");
// console.log(copo);

// let subject = 'create video'
// function createThink(subject) {
//     subject = 'study'
//     return subject
// }

// console.log(subject);
// console.log(createThink(subject));

// function sayMyName(name) {
//     console.log('antes da callback')
//     name()
//     console.log('dps da callback')
// }

// sayMyName(
//     ()=>{
//         console.log('estou em uma callback')
//     }
// )

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const mayk = new Person("mayk")
const joao = new Person("joão")
console.log(mayk.walk())
console.log(joao.walk())