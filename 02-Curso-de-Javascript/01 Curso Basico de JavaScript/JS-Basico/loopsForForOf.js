var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(Estudiantes) {
   console.log(`Hola, ${alumno}`);
}
for(var i = 0; i < estudiantes.length; i++) {
   saludarEstudiantes(estudiantes);
}
// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel

for(var estudiante of estudiantes){
   saludarEstudiantes(estudiante);
}