function addInput(){
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li') // criação do elemento
    newLi.classname = 'list-item'
    newLi.innerText = 'Novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    newLi.appendChild(newInput) // adicionando filho para newLi
    ul.appendChild(newLi) // adicionando newLi como filho da ul
}