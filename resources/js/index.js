
let allProducts = JSON.parse(localStorage.getItem('allProducts')) || productsDB;
/* it's so important to pay attention on data from db,, get it from db or start with initial values */
// countItems()
/*
render products 
*/
const mainSec = document.querySelector('.main');
const mainSecDiv = mainSec.querySelector('.container .main-content');
let renderProducts;
(renderProducts = function(allProducts = []) {
// countItems();
mainSecDiv.innerHTML = '';
for (let i = 0 ; i < allProducts.length ; i++) {
    let item = allProducts[i];
    mainSecDiv.innerHTML += `
    <div class="product-item" >
        <img
          src="${item.imageUrl}"
          class="product-item-img"
          alt="image"
        />
        <div class="product-item-desc">
          <a onclick="selectProduct(${item.id})">${item.title}</a>
          <p>${item.desc}</p>
          <span> Size: ${item.size} </span>
        </div>
        <div class="product-item-actions">
          <button class="add-to-cart" key=${item.id}>Add To Cart</button>
          <i class="fa fa-heart" aria-hidden="true" favorite="favorite" key=${item.id}
          style="color:${item.favorite == true? "red" : ""}"></i>
        </div>
      </div>
    `
}
})(JSON.parse(localStorage.getItem('allProducts')) || allProducts)

/* IS UNIQUE ELEMENT */
const addNewElement = (elem, myArr) => {
  let flag = true;  
  for (let i = 0; i < myArr.length ; i++) {
      if (myArr[i].id === elem.id) {
        myArr[i].qty += 1;
        flag = false
      }
    }
    if (flag) {
      elem.qty = 1;
      myArr.push(elem);
    }
}
/* ADD TO CART */
const productItem = document.querySelector('.main');
// always get the data from db and then work on it and send it back to avoid loosing data when refresh the page
// const dropdownContent = document.querySelector('.dropdown-content');
productItem.addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart')) {
    if (JSON.parse(localStorage.getItem('user'))) {
      console.log(event.target.getAttribute('key'));
    const itemId = event.target.getAttribute('key');
    let product = allProducts.find(elem => elem.id == itemId);
    addNewElement(product, addedItems);
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    }
    localStorage.setItem('addedItems', JSON.stringify(addedItems));
    countItems();
  } else {
     window.location = 'signIn.html'
  }}
})


/* select product */
const selectProduct = (id) => {
  let selectedProduct = allProducts.find(item => item.id === id);
  localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
  window.location = 'cardDetails.html';

}
/* search Product */
const searchProduct = document.querySelector('.search-form input');
searchProduct.addEventListener('keyup', event => {
  let searchedProducts = productsDB.filter(elem => elem.title.indexOf(event.target.value) != -1);
  renderProducts(searchedProducts);
})
/* Handle Favorites */
mainSecDiv.addEventListener('click', event => {
  if (event.target.hasAttribute('favorite')) {
    if (JSON.parse(localStorage.getItem('user'))) {
      let item = allProducts.find(elem => elem.id == event.target.getAttribute('key'));
      let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) ? JSON.parse(localStorage.getItem('favoriteList')) : [];
      if (item.favorite == true) {
        item.favorite = false;
        allProducts = allProducts.map(elem => elem.id != event.target.getAttribute('key') ? elem : item);
        localStorage.setItem('allProducts', JSON.stringify(allProducts));
        favoriteList = favoriteList.filter(item => item.id != event.target.getAttribute('key'));
        localStorage.setItem('favoriteList',JSON.stringify(favoriteList));
        renderProducts(allProducts)
    } else {
      item.favorite = true;
      allProducts = allProducts.map(elem => elem.id != event.target.getAttribute('key') ? elem : item);
      
      localStorage.setItem('allProducts', JSON.stringify(allProducts))
      favoriteList.push(item)
      localStorage.setItem('favoriteList',JSON.stringify(favoriteList)); 
      renderProducts(allProducts)

    }} else {
      window.location = 'signIn.html'
    }
   
  }
})
/* Filter Products */
const sizeFilter = document.querySelector('#size-filter');
sizeFilter.addEventListener('change', event => {
  let productSize =  event.target.value;
  console.log(allProducts);
  let selectedProducts = allProducts.filter(elem => elem.size === productSize);
  productSize == 'all' ? renderProducts(allProducts) : renderProducts(selectedProducts);
})
/* Edit Product */
function editProduct(id) {
  localStorage.setItem('editedProduct',JSON.stringify(id));
  window.location = 'edit-product.html';
  
}