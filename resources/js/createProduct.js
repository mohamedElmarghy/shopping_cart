let productName;
let productDesc;
let productSize;
let productImage;
let allProducts = JSON.parse(localStorage.getItem('allProducts')) || productsDB;
const createForm = document.querySelector('.add-product-form form');
const productSizeSelector = document.querySelector('.add-product-form #size');
const productImg = document.querySelector('#product-img');
productSizeSelector.addEventListener('change', event => {
   productSize = event.target.value
});
createForm.addEventListener('submit', event => {
    event.preventDefault();
    productName = document.querySelector('#productName').value;
    productDesc = document.querySelector('#productDesc').value;
    if (productName == '' || productDesc == '') {
        alert('Please Fill The Data')
    } else {
       let newProduct = {
           id : allProducts.length + 1,
           title : productName,
           desc : productDesc,
           imageUrl : productImage,
           size : productSize,
           qty : 1,
           isMe : 'Y'
       };
       allProducts.push(newProduct);
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