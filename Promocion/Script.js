let btnCrear = document.getElementById("btn-nuevo")
let btnDescarga = document.getElementById("btn-descargar")

btnCrear.addEventListener("click", () => {
	let fieldTitulo = document.getElementById("Titulo")
	let Nombre = fieldTitulo.value
	let fieldCategoria = document.getElementById("Categoria")
	let Categoria = fieldCategoria.value
	let fieldImg = document.getElementById("Foto")
	let imgFile = fieldImg.files[0] // Obtener el archivo seleccionado
	let fieldPrecio = document.getElementById("PrecioNumero")
	let precioVal = fieldPrecio.value; // Obtener el archivo seleccionado
    if(Nombre == ""){
        alert("Nombre vacio");
        return;
    }else if(Categoria == "" ){
        alert("Categoria vacia");
        return;
    }else if(imgFile == null){
        alert("Imagen invalida");
        return;
	}else if(precioVal == 0){
        alert("El precio no puede ser cero");
        return;
	}
	// Crear un objeto FileReader
	let reader = new FileReader()
	reader.onload = function (event) {
		let urlImg = event.target.result // Obtener la URL base64 de la imagen cargada
		remplazarContenido(Nombre, Categoria, urlImg, precioVal)
	}
	reader.readAsDataURL(imgFile) // Leer el archivo como una URL base64
})

function remplazarContenido(Nombre, Categoria, Img, precioVal) {
	document.getElementById("nombre").innerHTML = Nombre
	document.getElementById("subtitulo").innerHTML = Categoria
	document.getElementById("foto").src = Img
	document.getElementById("Precio").innerHTML = `$ ${precioVal}`
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

var slider = document.getElementById("slider")
var thumb = document.getElementById("foto")

slider.oninput = function () {
	let value = (slider.value - slider.min) / (slider.max - slider.min)
	let thumbPosition = value * (slider.offsetHeight - thumb.offsetHeight)
	let ajuste = (thumbPosition / 65) * 100
	thumbPosition = thumbPosition - ajuste
	thumb.style.transform = `translateY(${thumbPosition}px)`
}

let opciones = document.getElementById("opcionesPlantillas");
document.getElementById("plantillas").addEventListener("click", () => {
	opciones.style.display=="none" ? opciones.style.display = "inline-block" : opciones.style.display = "none";
})