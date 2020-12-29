/**  Buscando dados */

let nome = document.querySelector('#nameForm')
let mensalidade = document.querySelector('#mensalidade')
let select = document.querySelector('#selctInput')


const button = document.querySelector('.btn')

let linha = ''
button.addEventListener('click', event => {
    event.preventDefault();
    
    const nameConteudo = nome.value;
    const mensalidadeConteudo = mensalidade.value;
    const selectConteudo = select.value;
    const total = mensalidadeConteudo * (((1 + 0.00517) ^ (selectConteudo*12)) / 0.00517)


    let resultado = document.querySelector('#resultados')
    const paragrafo = document.createElement('p')

    linha = `<div>Olá ${nameConteudo}, 
            <p> Juntando R$${mensalidadeConteudo} todo mês, você terá R$ ${total.toFixed(2)} em ${selectConteudo} anos</p>
    </div>`

    resultado.appendChild(paragrafo)
    paragrafo.innerHTML = linha;

})


const again = document.querySelector('.again');

again.addEventListener('click', (event) => {
    event.preventDefault();


    let resultado = document.querySelector('#resultados')
    resultado.innerHTML = "";

    let nome = document.querySelector('#nameForm')
    let mensalidade = document.querySelector('#mensalidade')
    let select = document.querySelector('#selctInput')
    nome.value = ''
    mensalidade.value = ''
    select.value = ''
    
})
