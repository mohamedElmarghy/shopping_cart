let favoriteProducts = JSON.parse(localStorage.getItem('favoriteList')) || [];
(function renderFavoriteProducts() {
    const favoriteSec = document.querySelector('.main-favorite .container');
    if (favoriteProducts.length == 0) {
        favoriteSec.innerHTML = 'No Favorite Products';
    } else {
        favoriteSec.innerHTML = '';
        favoriteProducts.map(item => {
            favoriteSec.innerHTML += `
            <div class="product-item" >
            <img
              src="${item.imageUrl}"
              class="product-item-img"
              alt="image"
            />
            <div class="product-item-desc">
              <p>${item.title}</p>
              <p>${item.desc}</p>
              <span> Size: ${item.size} </span>
            </div>
            `
        })
    }
})()