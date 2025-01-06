const main = document.querySelector('main')
const root = document.querySelector('root')
const input = document.getElementById('input')
const inputResultado = document.getElementById('resultado')

const teclasPermitidas = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function (){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value=''
    input.focus
})

input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if (teclasPermitidas.includes(ev.key)){
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter'){
        calcular()
    }
})

document.getElementById('equal').addEventListener('click', calcular)

function calcular(){
    const resultado = eval(input.value)
    inputResultado.value = resultado
}