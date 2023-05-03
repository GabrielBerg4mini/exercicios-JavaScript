//ajustando meu conhecimento em condicionais
// if...else
// let temperature = 30.5;
// let highTemperature = temperature >= 37.5;
// let mediumTemperature = temperature <= 38.5 && temperature >= 36.5;

// if (highTemperature) {
//     console.log('essa pessoa está com febre alta');
// }else if(mediumTemperature) {
//     console.log('febre moderada');
// }
//  else {
//     console.log('essa pessoa está com temperatura normal');
// };

//switch

// let expression = ''

// switch(expression) {
//     case 'a':
//         // código aqui
//         console.log('a')
//         break
//     case 'b': 
//         //código para expression b  
//         console.log('b')  
//         break
//     default:
//         //vai parar a condicional
//         console.log('default')
//         break
// }

// function calculate(number1, operator, number2) {
//     let result = 0;

//     switch(operator) {
//         case '+':
//             result = number1 + number2;
//             break
//         case '-':
//             result = number1 - number2;
//             break
//         case '*':
//             result = number1 * number2;
//             break
//         case '/':
//             result = number1 / number2;
//             break
//         default:
//             console.log('Não é um número');
//             break
//     }
//     return result
// }

// console.log(calculate(4, '%', 8))


// throw = significa disparar-lançar

function sayMyName(name = '') {
    if (name === '') {
        // throw new Error('nome é necessário')  , outra forma de fazer o disparo 
        throw 'Nome é obrigatório'
    }
     

    console.log(name)
}

// try = tentar/testar...catch = pegar
try {
    sayMyName('Mayk')
} catch(e) {
    console.log(e)
}

console.log('Após o try/catch')

