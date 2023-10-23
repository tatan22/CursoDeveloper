const btn = document.querySelector('#calcular')
const inputPrice = document.querySelector('#price')
const inputCupon = document.querySelector('#cupon')
const pResult = document.querySelector('.result')
const pCupon = document.querySelector('.resultCupon')
let discount;

const discountsObj = {
  platzivacation: 10,
  mothersday: 15,
  independenceday: 20,
  christmas: 50,
};
const discountsList = []
discountsList.push({
  name:'platzivacation',
  discount:30
})
discountsList.push({
  name:'mothersday',
  discount:15
})
discountsList.push({
  name:'independenceday',
  discount:10
})

// switch (coupon) {
//   case 'JuanDC_es_Batman':
//     discount = 30;
//     break;
//   case 'no_le_digas_a_nadie':
//     discount = 25;
//     break;
//   default:
//     pResult.innerText = 'El cupÃ³n no es vÃ¡lido';
//     return;
// }

// if (coupon == 'JuanDC_es_Batman') {
//   discount = 30;
// } else if (coupon == 'no_le_digas_a_nadie') {
//   discount = 25;
// } else {
// pResult.innerText = 'El cupÃ³n no es vÃ¡lido';
// return;
// }

btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento() {
  const precio = Number(inputPrice.value);
  const cupon = inputCupon.value;

  // if (!precio || !cupon){
  //   pResult.innerText = 'Chancla por favor llena el Formulario'
  //   return 
  // }
  // if( cupon in discountsObj){
  //   pCupon.innerText = 'Cupon Valido, tienes un descuneto del ' + discountsObj[cupon]
  //   discount = discountsObj[cupon]
  // }else {
  //   pCupon.innerText = 'Cupon No es Valido, descuento 0%'
  //   discount = 0;
  // }

function isCouponInArray(cuponElement){
  return cuponElement.name == cupon;
}

// utilizando filter
// const couponArray = discountsList.filter(isCouponInArray)

//   if( couponArray.length > 0 ){
//     pCupon.innerText = 'Cupon Valido, tienes un descuneto del ' + couponArray[0].discount
//     discount = couponArray[0].discount
//   }else {
//     pCupon.innerText = 'Cupon No es Valido, descuento 0%'
//     discount = 0;
//   }

  // Utilizando find
const couponArray = discountsList.find(isCouponInArray)

  if( couponArray){
    pCupon.innerText = 'Cupon Valido, tienes un descuneto del ' + couponArray.discount
    discount = couponArray.discount
  }else {
    pCupon.innerText = 'Cupon No es Valido, descuento 0%'
    discount = 0;
  }




  const newPrice = (precio * (100 - discount))/ 100 
  pResult.innerText = 'El Nuevo precio es: ' + newPrice
}