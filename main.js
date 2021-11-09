window.onLoad = () => {
    updateCartLabel();
}

// Update number of items in cart
function updateCartLabel() {
    cartArray = localStorage.getItem("cartArray");
    cartArray = JSON.parse(cartArray);
    if (cartArray == null) {
        cartArray = [];
        // localStorage.setItem("cartArray", JSON.stringify(cartArray));
    }
    let cartSize = cartArray.length;
    if (cartArray.length > 0) {
        // console.log(cartArray.length);
        document.getElementById("cart-number").innerHTML = cartSize;
    } else {
        document.getElementById("cart-number").innerHTML = 0;
    }
}
updateCartLabel();

