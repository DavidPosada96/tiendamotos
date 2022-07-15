//funcion para pintar productos en la tienda
function pintarProductos(productos){}

//1. crear una refenrecia en memoria(variable) que almacene la etiqueta sobre la cual voy a pintar (etiqueta padre o etiqueta raiz)

let fila=document.getElementById("fila")

//2. recorro el arreglo de datos y apico traversing

productos.forEach(function(producto){
    //2.1 creando una columna dese js
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.2 creando la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "h-100", "text-center")

    //2.3 creando la foto
    let fotoproducto=document.createElement("img")
    fotoproducto.classList.add("img-fluid", "w-100", "h-100")
    fotoproducto.src=producto.foto[0]

    //2.4 creando el nombre del producto
    let nombredelproducto=document.createElement("h3")
    nombredelproducto.textContent=producto.nombre
        //2.5 creando el nombre del producto
    let precioproducto=document.createElement("h4")
    precioproducto.textContent='$ '+producto.precio+' COP'

    //2.6 detectando evento
    columna.addEventListener("mouseover",function(){
        fotoproducto.src=producto.foto[1]
    })

     columna.addEventListener("mouseleave",function(){
        fotoproducto.src=producto.foto[0]
    })

        //defino padres e hijos
        tarjeta.appendChild(fotoproducto)
        tarjeta.appendChild(nombredelproducto)
        tarjeta.appendChild(precioproducto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    }
    )

    

    





























//datos de la base de datos

//console.log(productosBD)

// //recorriendo un arreglo(esculcar)

// productosBD.forEach(function(producto){
//     console.log(producto.nombre)
//     console.log(producto.foto[0])
// })

//pasos para pintar (Hacer render) de etiquetas html de js
// traversing




let buscador=document.getElementById("busqueda")

buscador.addEventListener("keypress",function(evento){
    console.log(evento.target.value)
})


