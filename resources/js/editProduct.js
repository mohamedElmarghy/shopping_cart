let productId = JSON.parse(localStorage.getItem('editedProduct'));
let allProducts = JSON.parse(localStorage.getItem('allProducts')) || productsDB;
let product = allProducts.find(item => item.id == productId);
const productName = document.querySelector('#productName');
const productDesc = document.querySelector('#productDesc');
const productImg = document.querySelector('#product-img');
let productSize = document.querySelector('#size');
let productImage = product.imageUrl;
const createForm = document.querySelector('.add-product-form form');
productName.value = product.title;
productDesc.value = product.desc;
productSize.value = product.size;
createForm.addEventListener('submit', event => {
    event.preventDefault();
    // productName = document.querySelector('#productName').value;
    // productDesc = document.querySelector('#productDesc').value;
    if (productName.value == '' || productDesc.value == '') {
        alert('Please Fill The Data')
    } else {
       let newProduct = {
           id : productId,
           title : productName.value,
           desc : productDesc.value,
           imageUrl : productImage,
           size : productSize.value,
           qty : product.qty,
           isMe : 'Y'
       };
       allProducts = allProducts.map(elem => elem.id != productId? elem:newProduct);
       localStorage.setItem('allProducts', JSON.stringify(allProducts));
       window.location = 'index.html'
    }
    
});
function getImageBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        productImage = reader.result;
    };
    reader.onerror = function() {
        console.log('erroe');
    }
}
productImg.addEventListener('change', event => {
    let file = event.target.files[0];
    getImageBase64(file);
    if ((file.type == 'image/jpeg' || file.type == 'image/png') && (file.size < 2*1024)) {
          getImageBase64(file)  
    } else {
        console.log('not supported');
        return;
    }
})