let Listadepeças = ['Filtro de ar', 'Roda', 'Pneu']

Listadepeças.push('Disco de freio')
Listadepeças.push('Motor')
Listadepeças.push('Amortecedor')


if (Listadepeças.length < 10) {
    console.log('É possível cadastrar mais peças!!!!')
}
else {
    console.log('Não há mais espaço na caixa')
}

let peso = 150;

if (peso < 100) {
    console.log('A peça deve pesar no mínimo 100g')
}
else {
    console.log('A peça possui o peso adequado')
}

let nomedapeca = 'Roda'

switch (nomedapeca.length) {
    case 0:
        console.log('O nome da peça não pode ser vazio')
    case 1:
    case 2:
    case 3:
        console.log('O nome da peça deve ter mais de caracteres')
        break;
    default:
        console.log('O nome da peça esta adequado para o cadastro')
        break;
}


/*
if (nomedapeca.length > 3) {
    console.log('O nome da peça esta adequado para o cadastro')
}
else if (nomedapeca.length == 0){
    console.log('O nome da peça não pode ser vazio')
    }
else{
    console.log('O nome da peça de ter mais de 3 caracteres, digite o nome adequado')
}
*/


