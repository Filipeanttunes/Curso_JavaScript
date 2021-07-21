console.log('Vai começar')
// for(var c = 1;c <= 5;c++){
// console.log(c)
// }
// console.log('Fim!')

const carros = ['gol', 'palio', 'celta', 'UNO(A Lenda)'];

function pintura(modelo){
    let cor;
    if(modelo.length <= 3){
        cor = 'vermelho'
    } else if(modelo.length <= 5 && modelo.length > 3){
        cor = 'preto'
    } else{
        cor = 'azul'
    }
    return cor
}


const carrosAfter = carros.map(carro => {
    const result = {
        Modelo: carro,
        cor: pintura(carro)
    }
    return result;
})

console.log(carrosAfter);