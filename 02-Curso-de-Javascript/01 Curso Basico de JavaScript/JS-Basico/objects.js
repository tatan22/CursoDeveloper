var miAuto = {
   marca: "Toyota",
   modelo: "Corolla",
   annio: 2020,
   detalleDelAuto: function(){
      console.log(`Auto ${this.modelo} ${this.annio}`)
   }
}

console.log(miAuto);

// Como acceder a los valores de un Object
miAuto.marca;
// ---> "Toyota"

miAuto.annio;
//---> 2020

miAuto.detalleDelAuto();
//---> Auto Corolla 2020