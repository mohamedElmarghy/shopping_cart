/* Count Added Items */
const dropdownContent = document.querySelector('.dropdown-content');
let addedItems = JSON.parse(localStorage.getItem('addedItems')) ? JSON.parse(localStorage.getItem('addedItems')): [];
let countItems;
(countItems =  function ()  {
    let products = JSON.parse(localStorage.getItem('addedItems'))? JSON.parse(localStorage.getItem('addedItems')) : [];
    const shoppingIcon = document.querySelector('#shoppingIcon span');
    if (products.length == 0) {
      shoppingIcon.style.display = 'none';
      // shoppingIcon.innerHTML = 0;
    }
    else {
    let itemsNum = 0;
    for (let i =0; i< products.length; i++) {
      itemsNum += products[i].qty
    }
    shoppingIcon.style.display = 'block';
    shoppingIcon.innerHTML = itemsNum;
    }
  })()
  /* render added items */
const cartIcon = document.querySelector('#shoppingIcon');
const renderAddedItems = () => {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
  dropdownContent.innerHTML = '';
  if (addedItems.length == 0) {
    return;
  } else {
    for (let i = 0; i < addedItems.length; i++) {
      dropdownContent.innerHTML += `
        <a href='productItem.html'>${addedItems[i].title}</a>
        <span>${addedItems[i].qty}</span>
      `
    }
    dropdownContent.innerHTML += '<a href="productsCart.html" id="allProducts">View All Products</a>'
  }
  dropdownContent.style.display = 'block';
}
}
cartIcon.addEventListener('click', renderAddedItems);
