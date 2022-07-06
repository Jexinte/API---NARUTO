
const body = document.querySelector('body')
const container = document.querySelector('.container')



/* CONNEXION API */

const connexionApiNaruto = fetch(`http://localhost:3000/api/personnages`)

connexionApiNaruto.then(response => {
    if(response.ok)
        return response.json()
    else
        console.log(`Connexion failed`)
})

.then( response => {


    response.map(personnage => {
       
        const box = document.createElement('a')
              box.className = "box"
              container.appendChild(box)
              box.style.backgroundImage= `url(${personnage.imageCard})`
               box.href = `./personnage.html?id=${personnage.id}`
        const nameCharacter = document.createElement('h1')
              nameCharacter.setAttribute('id','nameCharacter')
              box.appendChild(nameCharacter)
              nameCharacter.textContent = personnage.nom
    });
 
}
)