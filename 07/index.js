function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Contato"

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText="Telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'telefone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerText = "Endereço: "
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)
}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const title = document.getElementsByTagName('h3')
    const contact = document.getElementsByTagName('ul')

    contactSection.removeChild(title[title.length - 1])
    contactSection.removeChild(contact[contact.length - 1])
}