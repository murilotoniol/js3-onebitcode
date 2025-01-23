const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = input.value === "" ? "Olá Mundo!" : ""
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    //input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener
('click', function(){
    input.placeholder = "Digite algo..."
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse
    console.log(data)
    input.dataset.somethingElse = "carlos"
    console.log(input.dataset.somethingElse)
})