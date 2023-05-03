//ajustando meu conhecimento em condicionais

let temperature = 30.5;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature <= 38.5 && temperature >= 36.5;

if (highTemperature) {
    console.log('essa pessoa está com febre alta');
}else if(mediumTemperature) {
    console.log('febre moderada');
}
 else {
    console.log('essa pessoa está com temperatura normal');
};