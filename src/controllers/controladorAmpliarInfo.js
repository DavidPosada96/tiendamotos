export function ampliarInfoProductos(evento){
 

    let producto = {
    imagen:evento.target.parentElement.querySelector("img").src,
    nombre:evento.target.parentElement.querySelector("h3").textContent,
    precio:evento.target.parentElement.querySelector("h4").textContent,
    descripcion:evento.target.parentElement.querySelector("p").textContent 
    
    }
    return(producto)

}