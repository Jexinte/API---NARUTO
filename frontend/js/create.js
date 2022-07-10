const imageCardOutput = document.getElementById('output')
const imageCardPreview = document.getElementById('preview')
const imageHistoryOutput2 = document.getElementById('output2')
const imageHistoryPreview2 = document.getElementById('preview2')
const submitButton = document.getElementById('submit')

const previewImg = (event) => {
	imageCardPreview.src = event.target.files[0].name // Permet de crée une url afin de récupérer le contenu de l'image insérer via l'input de type file 
	imageCardOutput.src = URL.createObjectURL(event.target.files[0])
}



const previewImg2 = (event) => {

	imageHistoryPreview2.src = event.target.files[0].name
	imageHistoryOutput2.src = URL.createObjectURL(event.target.files[0]) // Permet de crée une url afin de récupérer le contenu de l'image insérer via l'input de type file 
}


const form = document.querySelector('form')

form.addEventListener('submit',(e) =>
{
		e.preventDefault()

	fetch(`http://localhost:3000/api/personnages`,
	{
		method : 'post',
		body: new FormData(form),

	})
	.then((res) => {
		if(res.status === 201)
			window.location.href ="index.html"
	})

})


