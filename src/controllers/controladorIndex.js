//entradas==variables
let nombre = 'juan'
let numero = 5
let numeros = [1,2,3,4]
let politico ={
    nombre: 'alvaro',
    poder: 'dinero',
    edad: 64
} 




//controlando etiquetas
//1. necesito almacenar una etiqueta en una variable
let titulo=document.getElementById("titulo")
let imagen=document.getElementById("foto")
let titulo2=document.getElementById("titulo2")
let boton=document.getElementById("boton")
console.log(boton)
//2. identifico que quiero controlar 
//2.1 cambiando el texto
titulo.textContent="Chao"
//2.2 cambiando la fuente  SRC
imagen.src="https://placeimg.com/640/480/any"
// Modificando Estilos
// 3.1 agregando una clase
// **titulo.classList.add('text-danger, titulo2')**
//3.2 Quitando una clase 
titulo2.classList.remove('tect-info')
titulo2.classList.add('text-danger')

//4 escuchando eventos 
boton.addEventListener("click", function(){
    titulo.textContect="chao"
    imagen.src="https://placeimg.com/640/480/any"
})
