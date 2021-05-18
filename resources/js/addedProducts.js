let addedProducts = JSON.parse(localStorage.getItem('addedItems')) ? JSON.parse(localStorage.getItem('addedItems')) : [];
const mainSec = document.querySelector('.main');
const mainSecDiv = mainSec.querySelector('.container');
function renderProducts(products) {
  mainSecDiv.innerHTML = '';
for (let i = 0 ; i < products.length ; i++) {
    let item = products[i];
    mainSecDiv.innerHTML += `
    <div class="product-item" >
        <img
          src="${item.imageUrl}"
          class="product-item-img"
          alt="image"
        />
        <div class="product-item-desc">
          <a>${item.title}</a>
          <p>${item.desc}</p>
          <span> Size: ${item.size} </span><br/>
          <span> Qtn: ${item.qty}</span>
        </div>
        <div class="product-item-actions">
          <button class="add-to-cart" key=${item.id} 
          id="removeItem">Remove From Cart</button>
        </div>
      </div>
    `
}
};
renderProducts(addedProducts);
mainSec.addEventListener('click', (event) => {
    if (event.target.getAttribute('id') === 'removeItem') {
        const itemId = event.target.getAttribute('key');
        addedProducts = addedProducts.filter(elem => elem.id != itemId);
        localStorage.setItem('addedItems', JSON.stringify(addedProducts));
        renderProducts(addedProducts); 
    }
});
