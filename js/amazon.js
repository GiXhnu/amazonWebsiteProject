let productHtml = '';
products.forEach( (product) => {
  productHtml += `<div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars*10}.png">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              $${(product.priceCents/100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
              <select class="jsQuantitySelect-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart jsAddedToCart-${product.id}" data-product-id="${product.id}>
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-addToCart" data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>
  `;
});

document.querySelector('.js-products').innerHTML = productHtml;

document.querySelectorAll('.js-addToCart').forEach((buttonElement) => {
  buttonElement.addEventListener('click',() => {
      const productId = buttonElement.dataset.productId;
      let matchingItem;
      cart.forEach((item) => {
          if(productId === item.productId){
            matchingItem = item;
          }
        });
          const quantity = document.querySelector(`.jsQuantitySelect-${productId}`);
          const quantityNum = Number(quantity.value);
          if(matchingItem){
            matchingItem.quantity += quantityNum;
          }else{
            cart.push({
              productId : productId,
              quantity : quantityNum
      
            });
          }
          let cartQuantity = 0;
          cart.forEach((item) => {
              cartQuantity += item.quantity;
          
          });
       document.querySelector('.jsCartQuantity').innerHTML = cartQuantity;    
      
      });
      });
      document.querySelectorAll('.js-addToCart').forEach((buttonElement) => {
          buttonElement.addEventListener('click',() => {
            const productId = buttonElement.dataset.productId;
            const message = document.querySelector(`.jsAddedToCart-${productId}`);
            message.classList.add('js-message');
            setTimeout(() => { 
              message.classList.remove('js-message')
            },2000);
            clearTimeout();
        });

      }); 