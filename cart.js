// window.onLoad = () => {
//     displayWish();
// }

function displayItems() {
    cartArray = JSON.parse(localStorage.getItem("cartArray") || "[]");
    var cartSize = cartArray.length;

    $('.cart-items-list').text("");

    for (let i = 0; i < cartSize; i++) {
        console.log(cartArray[i]);

        $('.cart-items-list').append(`
      <div class="cart-item">
      <div class="cart-item-img-container">
          <img class="cart-item-img" src="`+ (cartArray[i].img) + `" alt="Original" height="130">
      </div>
      <div class="cart-item-info">
          <div class="cart-item-name">`+ (cartArray[i].type) + `</div>
          <div class="cart-item-edit">
              <div class=cart-item-size>Size</div>
              <div class=cart-item-size-value>`+ (cartArray[i].size) + `</div>

              <div class=cart-item-glazing>Glazing</div>
              <div class=cart-item-glazing-value>`+ (cartArray[i].glaze) + `</div>
          </div>
          <div class="cart-item-quantity">
              <div>
                  <button class="remove-btn" onClick=removeCart(`+ i + `)>Remove</button>
              </div>
              <div>
                  <button class="wishlist-btn" onClick="addWish(cartArray[`+ i + `]); removeCart(` + i + `);">Save to Wishlist</button>
              </div>
          </div>
      </div>
      <div class="cart-item-price">`+ (cartArray[i].price) + `</div>
  </div>
        `);
    }


    if (cartSize == 0) {
        console.log("No items");
        $('.cart-items-list').append(`
        <div class="cart-empty">
        Your cart is empty. Keep shopping!
        </div>
        `);
    }


}
displayItems();
displayWish();


function displayWish() {

    wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    var wishlistSize = wishlist.length;
    $('.wishlist-items-list').text("");

    for (let i = 0; i < wishlistSize; i++) {
        $('.wishlist-items-list').append(`
    <div class="cart-item">
    <div class="cart-item-img-container">
        <img class="cart-item-img" src="`+ (wishlist[i].img) + `" alt="Original" height="130">
    </div>
    <div class="cart-item-info">
        <div class="cart-item-name">`+ (wishlist[i].type) + `</div>
        <div class="cart-item-edit">
            <div class=cart-item-size>Size</div>
            <div class=cart-item-size-value>`+ (wishlist[i].size) + `</div>

            <div class=cart-item-glazing>Glazing</div>
            <div class=cart-item-glazing-value>`+ (wishlist[i].glaze) + `</div>
        </div>
        <div class="cart-item-quantity">
            <div>
                <button class="remove-btn" onClick=removeWish(`+ i + `)>Remove</button>
            </div>
        </div>
    </div>
    <div class="cart-item-price">`+ (wishlist[i].price) + `</div>
</div>
      `);
    }

    if (wishlistSize == 0) {
        console.log("wishlistSize IF block")
        $('.wishlist-items-list').append(`
    <div class="cart-empty">
    Your wishlist is empty. Keep shopping!
    </div>
      `);
    }
}


function addWish(item) {
    wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWish();
}



function removeCart(index) { //remove element from cart
    console.log("Removing cart " + index);
    cartArray = JSON.parse(localStorage.getItem("cartArray") || "[]");

    var cartSize = cartArray.length;
    var newArray = [];
    for (let i = 0; i < cartSize; ++i) {
        if (index != i) {
            newArray.push(cartArray[i])
        }
    }

    localStorage.setItem("cartArray", JSON.stringify(newArray));
    updateCartLabel();
    displayItems();
    // cartTotal();
}

function removeWish(index) { //remove element from wishlist
    wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    console.log("Removing wish " + index);
    var wishSize = wishlist.length;
    var newArray = [];
    for (let i = 0; i < wishSize; i++) {
        if (index != i) {
            newArray.push(wishlist[i])
        }
    }

    localStorage.setItem("wishlist", JSON.stringify(newArray));
    displayWish();
}













