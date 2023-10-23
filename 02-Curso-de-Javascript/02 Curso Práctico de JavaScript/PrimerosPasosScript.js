const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);
console.log({
   h1,
   p,
   parrafito,
   pid,
   input
});
console.log(input.value)
h1.innerHTML = '<h1> hola carola </h1>';
h1.innerText = 'soy un texto normal <br><br/>';
alert(h1.getAttribute('pantalla'));
h1.setAttribute('class','rojo')
alert(h1.getAttribute('class'));

input.value = '457'

// omo creamos un Elemento desde Cero
const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);

pid.replaceWith(img);




