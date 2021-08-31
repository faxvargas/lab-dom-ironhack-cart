

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //declaramos price que es igual a product con qeryselector para seleccionar la etiqueta price y el span para obtener lo que hay dentro de ella
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const subtotal = product.querySelector(".subtotal span")
  console.log(subtotal)
  //declaré realPrice con parseInt para poder volverlo un numero y adentro de el puste price con texcontent para obtener el texto que viene dentro de la etiqueta  
  const realPrice = parseInt(price.textContent)
  const realQuantity = parseInt(quantity.value)
  const multiplicador = realPrice * realQuantity
  subtotal.innerHTML = multiplicador

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
