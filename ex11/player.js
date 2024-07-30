function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number= document.getElementById('number').value

    const confirmation = confirm("Deseja escalar o jogador "+name+" na posição "+position+"?")
    if(confirmation){
        const teamList = document.getElementById('team-list')
        const playerLi = document.createElement('li')
        playerLi.id = "player-"+number
        playerLi.innerText = position+": "+name+" ("+number+")"
        teamList.appendChild(playerLi)

        document.getElementById('position').value=""
        document.getElementById('name').value=""
        document.getElementById('number').value=""
    }
}

function removePlayer(){

    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-'+number)
    const confirmation = confirm("Deseja remover o jogador "+playerToRemove.innerText+"?")

    if(confirmation){
        document.getElementById("team-list").removeChild(playerToRemove)
        document.getElementById("numberToRemove").value = ""
    }
}