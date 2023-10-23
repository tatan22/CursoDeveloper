console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') 

// Triangulo
console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd('Triangulo') 

// Circle
console.group('Circle');
const circleRadio = 5;
const circleDiameter = circleRadio * 2;

const circlePerimeter = circleDiameter * Math.PI;
const circleArea = (circleRadio * circleRadio) * Math.PI;
// const circleArea2 = (circleRadio ** 2) * Math.PI;
// const circleArea3 = Math.pow(radio,2) * Math.PI;

console.log({circleRadio, circleDiameter, circlePerimeter, circleArea});

function circleCalcs(radio){
    return{
        diameter: radio * 2,
        perimeter: ((radio * 2) * Math.PI).toFixed(3),
        area: (Math.pow(radio,2) * Math.PI).toFixed(3)
    }
}
console.groupEnd('Circle');

/*Calcular Altura triangulo */
console.group();

const calcularAlturaTrianguloEscaleno = (lado2, ladoBase ) => {
  if(lado2 === ladoBase){
    console.warn('Esto no es un triangulo isoseles')
  }else {
    return Math.sqrt( (lado2 ** 2) -((ladoBase ** 2) / 4)  )
    
  }
 
};
