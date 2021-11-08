window.onLoad = () => {
    updateCartLabel();
}

// constructor for product
function roll(type, size, glaze, price, img) {
    this.type = type;
    this.size = size;
    this.glaze = glaze;
    this.price = price;
    this.img = img;
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
        console.log(cartArray.length);
        document.getElementById("cart-number").innerHTML = cartSize;
        document.getElementById("quantity-in-cart").innerHTML = cartSize + " of this item in your cart";
    } else {
        document.getElementById("cart-number").innerHTML = 0;
    }
    //document.getElementById("cart-number")[0].innerHTML = cartSize;
}
updateCartLabel();


// Update price when size selected
document.getElementById("size").addEventListener("change", function () {
    if (document.getElementById("1-roll").checked) {
        document.getElementsByClassName("price")[0].innerHTML = "$2.99";
    } else if (document.getElementById("3-rolls").checked) {
        document.getElementsByClassName("price")[0].innerHTML = "$8.99";
    } else if (document.getElementById("6-rolls").checked) {
        document.getElementsByClassName("price")[0].innerHTML = "$11.99";
    } else if (document.getElementById("12-rolls").checked) {
        document.getElementsByClassName("price")[0].innerHTML = "$23.99";
    }
});

// Update image when glazing selected

if (document.getElementsByClassName("item-header")[0].innerHTML == "Original") {
    document.getElementById("glazing").addEventListener("change", function () {
        if (document.getElementById("none").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/original.png";
        } else if (document.getElementById("double-chocolate").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/original-chocolate.png";
        } else if (document.getElementById("vanilla-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/original-vanilla.png";
        } else if (document.getElementById("sugar-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/original-sugar.png";
        }
        //console.log(document.getElementById("none").checked);
    });
} else if (document.getElementsByClassName("item-header")[0].innerHTML == "Pumpkin Spice") {
    document.getElementById("glazing").addEventListener("change", function () {
        if (document.getElementById("none").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/pumpkin-spice.png";
        } else if (document.getElementById("double-chocolate").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/pumpkin-chocolate.png";
        } else if (document.getElementById("vanilla-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/pumpkin-vanilla.png";
        } else if (document.getElementById("sugar-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/pumpkin-sugar.png";
        }
        //console.log(document.getElementById("none").checked);
    });
}



// Add item to cart
document.getElementById("cart-btn").addEventListener("click", function () {
    let size;
    let price;
    if (document.getElementById("1-roll").checked) {
        size = "1 roll";
        price = "$2.99";
    } else if (document.getElementById("3-rolls").checked) {
        size = "3 rolls";
        price = "$8.99";
    } else if (document.getElementById("6-rolls").checked) {
        size = "6 rolls";
        price = "$11.99";
    } else if (document.getElementById("12-rolls").checked) {
        size = "12 rolls";
        price = "$23.99";
    }

    let glaze;
    let img;
    if (document.getElementById("none").checked) {
        glaze = "None";
        img = "img/original.png";
    } else if (document.getElementById("double-chocolate").checked) {
        glaze = "Double Chocolate";
        img = "img/glaze/original-chocolate.png";
    } else if (document.getElementById("vanilla-milk").checked) {
        glaze = "Vanilla Milk";
        img = "img/glaze/original-vanilla.png";
    } else if (document.getElementById("sugar-milk").checked) {
        glaze = "Sugar Milk";
        img = "img/glaze/original-sugar.png";
    }

    let newRoll = new roll(
        document.getElementsByClassName("item-header")[0].innerHTML + " Cinnamon Roll",
        size,
        glaze,
        price,
        img
    );

    cartArray = JSON.parse(localStorage.getItem("cartArray"));

    if (cartArray == null) {
        console.log("thiscartArray == null");
        cartArray = [];
        localStorage.setItem("cartArray", JSON.stringify(cartArray))
    }
    cartArray.push(newRoll);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    console.log(cartArray);
    updateCartLabel();
    moveBanner(); 
});


// ADD TO CART ANIMATION
function generateBanner() {
    $('body').append(`
      <div id="confirmation">
        <div id="confirmationtext">
          Item has been added to cart!
        </div>
      </div>
      `);
}
generateBanner();

function moveBanner() {
    $('#confirmation').animate({
        right: "+=325px",
    }, 300);
    $('#confirmation').delay(1500).animate({
        right: "-=325px",
    }, 300);
}



