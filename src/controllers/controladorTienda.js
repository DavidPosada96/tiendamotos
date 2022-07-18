// se traen los datos de los productos (consultar la bd)

import { productosBD } from "../helpers/baseDatos.js";
console.log(productosBD)

//llamamos al metodo encargado de aplicar traversing y pintar la tienda

import { pintarProductos } from "./controladorPintar.js";
pintarProductos(productosBD)

//llamaos al metodo encargado de buscar productos por texto coincidente

import {buscarProductos} from "./controladorBuscar.js"
buscarProductos()

//escuchamos click en el contenedor padre de la tienda

let contenedor=document.getElementById("fila")


import {ampliarInfoProductos} from "./controladorAmpliarInfo.js";

contenedor-addEventListener("click", function(evento){
    let producto = ampliarInfoProductos(evento)
    console.log(producto)
    
    window.location.href="./src/views/ampliarInfo.html"
   
    //almacenar en el localstorage la informacion del producto seleccionado

    this.localStorage.setItem('infoProducto',5)

    console.log(localStorage.getItem('infoProducto'))

 
})