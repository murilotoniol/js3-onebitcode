function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const contactInput = document.getElementsByClassName('contact-input')
    console.log(contactInput)

    const contact = document.querySelectorAll('#contact-list > li > label')
    console.log(contact)

    const contact1 = document.getElementsByName('contact1')
    console.log

    const firstContact = document.querySelector('#contact-list')
    console.log(firstContact)
}