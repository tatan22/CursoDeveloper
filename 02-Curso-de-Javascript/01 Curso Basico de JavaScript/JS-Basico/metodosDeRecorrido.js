var articulos = [
   {nombre:"Bici", costo: 3000},
   {nombre:"Tv", costo: 2500},
   {nombre:"Libro", costo: 320},
   {nombre:"Celular", costo: 10000},
   {nombre:"Laptop", costo: 20000},
   {nombre:"Teclado", costo: 500},
   {nombre:"Audifonos", costo: 1700}
]

// Metodo Filter
var articulosFiltrados = articulos.filter(function(articulo){
   return articulo.costo <= 500;
});
console.log(articulosFiltrados)

// Mapear 
var nombreArticulos = articulos.map(function(articulos){
   return articulo.nombre
});

// Verdadero o Falso
var articulosBaratos = articulos.some(function (articulos){
   return articulos.costo <= 700;
})
//--->true

var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1); //el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
//['carro', 'celular', 'tv', 'libro']