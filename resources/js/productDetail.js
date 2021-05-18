(function renderSelectedProduct() {
  let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
  const selectedProductSec = document.querySelector('#selected-product');
  selectedProductSec.innerHTML = `
  <div class="product-item" >
      <img
        src="${selectedProduct.imageUrl}"
        class="product-item-img"
        alt="image"
      />
      <div class="product-item-desc">
        <a>${selectedProduct.title}</a>
        <p>${selectedProduct.desc}</p>
        <span> Size: ${selectedProduct.size} </span>
      </div>
    
    </div>
  `
})()