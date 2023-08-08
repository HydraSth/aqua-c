window.onload = () => {
	document.getElementById("IconoCanva").src == "" ? document.getElementById("IconoCanva").style.display = "block" : document.getElementById("IconoCanva").style.display = "none" 
}


const Parrafo = document.getElementById('Descripcion');
const maxChars=250
Parrafo.addEventListener('keyup', function() {
	document.getElementById("caracteresActuales").innerHTML=`${maxChars-Parrafo.value.length}/250`
});

let btnCrear = document.getElementById("btn-nuevo")
let btnDescarga = document.getElementById("btn-descargar")

btnCrear.addEventListener("click", () => {
	let CampoTitulo = document.getElementById("Titulo")
	let Titulo = CampoTitulo.value
	let CampoSubtitulo = document.getElementById("Subtitulo")
	let Subtitulo = CampoSubtitulo.value
	let CampoDescripcion = document.getElementById("Descripcion")
	let Descripcion = CampoDescripcion.value	
	let CampoIcono = document.getElementById("Icono")
	let Icono = CampoIcono.files[0]
    if(Titulo == ""){
        alert("Título vacio");
        return;
    }else if(Subtitulo == "" ){
        alert("Subtitulo vacio");
        return;
	}else if(Descripcion == "" ){
        alert("Descripcion vacia");
        return;
	}
	let reader = new FileReader()
	reader.onload = function (event) {
		let urlImg = event.target.result // Obtener la URL base64 de la imagen cargada
		remplazarContenido(Titulo, Subtitulo,Descripcion,urlImg)
	}
	reader.readAsDataURL(Icono) // Leer el archivo como una URL base64

})

function remplazarContenido(Titulo, Subtitulo,Descripcion,Icono) {
	document.getElementById("TituloCanva").innerHTML = Titulo
	document.getElementById("SubtituloCanva").innerHTML = Subtitulo
	document.getElementById("DescripcionCanva").innerHTML = Descripcion
	if(Icono != null){
		document.getElementById("IconoCanva").style.display = "block"
		document.getElementById("IconoCanva").src = Icono
	}
}

btnDescarga.addEventListener("click", () => {
	let canva = document.getElementById("Publicacion")
	let options = {
		scale: window.devicePixelRatio * 2,
		quality: 1,
	}

	html2canvas(canva, options).then((canva) => {
		let link = document.createElement("a")
		link.download = "PostAqua.jpg"
		link.href = canva.toDataURL("image/jpg")
		link.click()
	})
})

let opciones = document.getElementById("opcionesPlantillas");
document.getElementById("plantillas").addEventListener("click", () => {
	opciones.style.display=="none" ? opciones.style.display = "inline-block" : opciones.style.display = "none";
})