/* render my products */
let allProducts = JSON.parse(localStorage.getItem('allProducts')) || productsDB;
const mainSec = document.querySelector('.my-products');
const mainSecDiv = mainSec.querySelector('.container .myProducts-content');
let renderProducts;
(renderProducts = function() {
allProducts = JSON.parse(localStorage.getItem('allProducts')) || productsDB;
 let myProducts = allProducts.filter(elem => elem.isMe == 'Y');
// countItems();
 mainSecDiv.innerHTML = '';
 for (let i = 0 ; i < myProducts.length ; i++) {
    let item = myProducts[i];
    mainSecDiv.innerHTML += `
    <div class="product-item" >
        <img
          src="${item.imageUrl}"
          class="product-item-img"
          alt="image"
        />
        <div class="product-item-desc">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <span> Size: ${item.size} </span>
          <button class="edit-product" onclick="editProduct(${item.id})">Edit</button>
          <button class="delete-product" onclick="deleteProduct(${item.id})">Delete</button>
        </div>
      </div>
    `
}
})()
/*  edit product */
function editProduct(id) {
    localStorage.setItem('editedProduct',JSON.stringify(id));
    window.location = 'edit-product.html';
    
}
/* delete product */
function deleteProduct(id) {
    allProducts = allProducts.filter(elem => elem.id != id);
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    renderProducts();
}