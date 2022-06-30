
const body = document.querySelector('body')
const container = document.querySelector('.container')

// const message = () => {
//     alert('WELCOME ON MY API BASED ON NARUTO , I URGE YOU TO TAKE NOTE OF "README" IF YOU WANT MORE DETAILS OR JUST TRY IT BY YOURSELF !')
// }


/* CONNEXION API */

const connexionApiNaruto = fetch(`http://localhost:3000/api/personnages`)

connexionApiNaruto.then(response => {
    if(response.ok)
        return response.json()
    else
        console.log(`Connexion failed`)
})

.then( response => {
    response.forEach(element => {
       
        const box = document.createElement('a')
              box.className = "box"
              container.appendChild(box)
              box.style.backgroundImage= `url(${element.imageCard})`
               box.href = `./personnage.html?id=${element.id}`
        const nameCharacter = document.createElement('h1')
              nameCharacter.setAttribute('id','nameCharacter')
              box.appendChild(nameCharacter)
              nameCharacter.textContent = element.nom
    });
}
)