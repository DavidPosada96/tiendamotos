import {productosBD} from "../helpers/baseDatos.js"
import { pintarProductos } from "./controladorPintar.js"
export function buscarProductos(productosABuscar){

    //controlador del input donde escribe el user
    let buscador=document.getElementById("busqueda")

    //detectamos que el user escribe y caputaramos lo que esta escribiendo

    buscador.addEventListener("keyup", function(evento){
        let productoBuscado=evento.target.value
        
        //aplicar filtro 

        let filtro=productosBD.filter(function(producto){
            return (producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()))
        })
        console.log(filtro)
        pintarProductos(filtro)
    })
}