var frutas =["Manxzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
// ---> "["Manxzana", "Platano", "Cereza", "Fresa"]"

console.log(frutas.length);
// ---> 4

console.log(frutas[1])
// ---> "Platano"

// Modificar un array

var masFrutas = frutas.push("uvas");
// ---> "["Manxzana", "Platano", "Cereza", "Fresa", "Uvas"]"

var ultimo = frutas.pop("Uvas");
// ---> "["Manxzana", "Platano", "Cereza", "Fresa"]"

var nuevaLogitud = frutas.unshift("Uvas");
// ---> "["Uvas", Manxzana", "Platano", "Cereza", "Fresa"]"

var borrarFruta = frutas.shift("Uvas");
// ---> "["Manxzana", "Platano", "Cereza", "Fresa"]"

var posicion = frutas.indexOf("Cereza");
// ---> 2
