
var total = 0

let lista_compra = []

//  box 1
function add_box1() {
    document.querySelector('#qtd').innerHTML += `<br><label>Air Jordan: </label> <input id="qtd1" type="number" value=1 name="quantidade" id="quantidade">x `
    //  Adicionado o valor do produto a lista de valores
    lista_compra.push(100)

}

//  box 2
function add_box2() {
    document.querySelector('#qtd').innerHTML += `<br><label>Camiseta canva: </label> <input id="qtd2" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(10)
}

//  box 3
function add_box3() {
    document.querySelector('#qtd').innerHTML += `<br><label>Blusa rosa: </label> <input id="qtd3" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(17)
}

//  box 4
function add_box4() {
    document.querySelector('#qtd').innerHTML += `<br><label>Chapéu: </label> <input id="qtd4" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(4)
}

//  box 5
function add_box5() {
    document.querySelector('#qtd').innerHTML += `<br><label>Jacket: </label> <input id="qtd5" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(80)
}

//  box 6
function add_box6() {
    document.querySelector('#qtd').innerHTML += `<br><label>Sapatos Jerry: </label> <input id="qtd6" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(99)
}

//  box 7
function add_box7() {
    document.querySelector('#qtd').innerHTML += `<br><label>Colar Audemars: </label> <input id="qtd7" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(300)
}

//  box 8
function add_box8() {
    document.querySelector('#qtd').innerHTML += `<br><label>Camisa xadrez: </label> <input id="qtd8" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(11)
}

//  box 9
function add_box9() {
    document.querySelector('#qtd').innerHTML += `<br><label>Poster rock: </label> <input id="qtd9" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(11)
}

//  box 10
function add_box10() {
    document.querySelector('#qtd').innerHTML += `<br><label>Jeans feminino: </label> <input id="qtd10" 
    value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(11)
}

//  box 11
function add_box11() {
    document.querySelector('#qtd').innerHTML += `<br><label>Fato de treino: </label> <input id="qtd11" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(11)
}

//  box 12
function add_box12() {
    document.querySelector('#qtd').innerHTML += `<br><label>Calças cargo: </label> <input id="qtd12" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(30)
}

//  box 13
function add_box13() {
    document.querySelector('#qtd').innerHTML += `<br><label>Par de camisetes fire: </label> <input id="qtd13" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(11)
}

//  box 14
function add_box14() {
    document.querySelector('#qtd').innerHTML += `<br><label>Cargo feminino: </label> <input id="qtd14" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(18)
}

//  box 15
function add_box15() {
    document.querySelector('#qtd').innerHTML += `<br><label>Sapatilha VVS: </label> <input id="qtd15" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(11)
}

//  box 16
function add_box16() {
    document.querySelector('#qtd').innerHTML += `<br><label>Poster carnaval Havai: </label> <input id="qtd16" value=1 type="number" name="quantidade" id="quantidade">x `
    lista_compra.push(11)
}

//  Limpar todo o carinho
function clear_all() {
    document.querySelector('#qtd').innerHTML = ''
    document.querySelector('#total').innerHTML = '0'
    lista_compra = []
}


//  Atualizar total
function update() {
    total = 0
    for (c in lista_compra) {
        total += Number(lista_compra[c]) 
    }
    document.querySelector('#total').innerHTML = `${total}`
}


function minimizar() {
    document.querySelector('#carinho').style.display = 'none'
   
}


//  Fazendo com que o carinho apareça
function aparecer() {
    document.querySelector('#carinho').style.display = 'block'
}


//  Efectuar pagamento
function pagar() {
    if (total > 0) {
        var numero = window.prompt('Insira o seu número de telefone:')
        window.alert('O seu pedido foi enviado, receberá uma ligação dentre de em breve') 
        } else {   
            window.alert('Selecione qualquer produto para poder comprar')
        }   
}
