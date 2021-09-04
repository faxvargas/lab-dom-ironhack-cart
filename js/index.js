

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
  const total = document.querySelector('#total-value-span')
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
const unSoloProducto = document.querySelector('.product')
  updateSubtotal(unSoloProducto)
  //ITERATION 2
  const productos = document.getElementById('product')
  // ITERATION 3
  let totalt = updateSubtotal(productos)
  totalt.innerHTML = total
}

// ITERATION 4

function removeProduct(remove) {
  let retirar = remove.parentNode.parentNode;
  retirar.parentNode.removeChild(retirar);
}

// ITERATION 5

function createProduct() {
  const inputName = document.getElementById('newProductName');

  const inputPrice = document.getElementById('newProductPrice');

  const cartTableBodyElement = document.querySelector('#cart tbody');

  cartTableBodyElement.innerHTML += `
      <tr class="product">
        <td class="name">
          <span>${inputName.value}</span>
        </td>
        <td class="price">$<span>${inputPrice.value}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button onclick="removeProduct(this)" class="btn btn-remove">Remove</button>
        </td>
      </tr>
    `;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
})
