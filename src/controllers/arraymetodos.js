let plato1={
    nombre:'hamburguesa corralita',
    Precio: 16000 ,
    descripcion: 'Jugosa carne 100% de res de 90 g, con verduras y salsas en pan ajonjolí',
    categoria: 1,
    foto: 'na'
}

let plato2={
    nombre:'hamburguesa Corral Pollo',
    Precio:18000 ,
    descripcion: 'Jugosa pechuga de pollo de 154 g, a la plancha con salsa BBQ, verduras y salsa blanca en pan ajonjolí.',
    categoria: 1,
    foto: 'na'
}

let plato3={
    nombre:'hamburguesa Corral Queso',
    Precio:19000 ,
    descripcion: 'Jugosa carne 100% de res de 125 g, con delicioso queso mozzarella, verduras y salsas en pan ajonjolí.',
    categoria: 1,
    foto: 'na'
}

let plato4={
    nombre:'hamburguesa Corral Tocineta',
    Precio:22000 ,
    descripcion: 'Jugosa carne 100% de res de 125 g, con queso mozzarella, tocineta, verduras y salsas en pan ajonjolí..',
    categoria: 2,
    foto: 'na'
}

let plato5={
    nombre:'hamburguesa Corral Doble',
    Precio:22000 ,
    descripcion: 'Dos jugosas carnes 100% de res de 90 g cada una, dos tajadas de queso mozzarella, cebolla caramelizada, lechuga fresca, tomate fresco y salsa blanca en pan ajonjolí.',
    categoria: 2,
    foto: 'na'
}


let platos=Array(plato1,plato2,plato3,plato4,plato5)


//1. forEach (recorrer el areglo)

platos.forEach(function(plato){
    console.log(plato.nombre)
})

//2. filter (filtro)

let resultado= platos.filter(function(plato){
    return(plato.categoria==2)
})
console.log(resultado)

resultado2=platos.filter(function(plato){
    return(plato.Precio>= 19000 && plato.Precio<22000)
})

console.log(resultado2)

//3. find

let busqueda=platos.find(function(plato){
    return(plato.Precio==16000)
})
console.log(busqueda)

//4. map

let mapa= platos.map(function(plato){
    return(plato.categoria=100)
})
console.log(mapa)

//5. push (elemento nuevo al arreglo)

let plato6={
    nombre:'hamburguesa Corral Super',
    Precio:55000 ,
    descripcion: '4 jugosas carnes 100% de res de 120 g cada una, cuatro tajadas de queso mozzarella, cebolla caramelizada, lechuga fresca, tomate fresco y salsa blanca en pan ajonjolí.',
    categoria: 3,
    foto: 'na'
}

platos.push(plato6)
console.log(platos)

