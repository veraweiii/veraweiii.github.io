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
        // console.log(cartArray.length);
        document.getElementById("cart-number").innerHTML = cartSize;
        let itemCount = 0;
        for (let i = 0; i < cartSize; i++) {
            let itemName = document.getElementsByClassName("item-header")[0].innerHTML + " Cinnamon Roll";
            if (cartArray[i].type == itemName) {
                itemCount++;
                document.getElementById("quantity-in-cart").innerHTML = itemCount + " of this item in your cart!";

            }
        }
    } else {
        document.getElementById("cart-number").innerHTML = 0;
    }
}
updateCartLabel();


// Update price when size selected
if (document.getElementsByClassName("item-header")[0].innerHTML == "Original" ||
    document.getElementsByClassName("item-header")[0].innerHTML == "Walnut" ||
    document.getElementsByClassName("item-header")[0].innerHTML == "Original Gluten-Free") {
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
} else if (document.getElementsByClassName("item-header")[0].innerHTML == "Blackberry" ||
    document.getElementsByClassName("item-header")[0].innerHTML == "Pumpkin Spice" ||
    document.getElementsByClassName("item-header")[0].innerHTML == "Caramel Pecan") {
    document.getElementById("size").addEventListener("change", function () {
        if (document.getElementById("1-roll").checked) {
            document.getElementsByClassName("price")[0].innerHTML = "$4.99";
        } else if (document.getElementById("3-rolls").checked) {
            document.getElementsByClassName("price")[0].innerHTML = "$14.99";
        } else if (document.getElementById("6-rolls").checked) {
            document.getElementsByClassName("price")[0].innerHTML = "$29.99";
        } else if (document.getElementById("12-rolls").checked) {
            document.getElementsByClassName("price")[0].innerHTML = "$59.99";
        }
    });
}

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
    });
} else if (document.getElementsByClassName("item-header")[0].innerHTML == "Blackberry") {
    document.getElementById("glazing").addEventListener("change", function () {
        if (document.getElementById("none").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/blackberry.png";
        } else if (document.getElementById("double-chocolate").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/blackberry-chocolate.png";
        } else if (document.getElementById("vanilla-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/blackberry-vanilla.png";
        } else if (document.getElementById("sugar-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/blackberry-sugar.png";
        }
    });
} else if (document.getElementsByClassName("item-header")[0].innerHTML == "Original Gluten-Free") {
    document.getElementById("glazing").addEventListener("change", function () {
        if (document.getElementById("none").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/gluten-free.png";
        } else if (document.getElementById("double-chocolate").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/glutenfree-chocolate.png";
        } else if (document.getElementById("vanilla-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/glutenfree-vanilla.png";
        } else if (document.getElementById("sugar-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/glutenfree-sugar.png";
        }
    });
} else if (document.getElementsByClassName("item-header")[0].innerHTML == "Walnut") {
    document.getElementById("glazing").addEventListener("change", function () {
        if (document.getElementById("none").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/walnut.png";
        } else if (document.getElementById("double-chocolate").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/walnut-chocolate.png";
        } else if (document.getElementById("vanilla-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/walnut-vanilla.png";
        } else if (document.getElementById("sugar-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/walnut-sugar.png";
        }
    });
} else if (document.getElementsByClassName("item-header")[0].innerHTML == "Caramel Pecan") {
    document.getElementById("glazing").addEventListener("change", function () {
        if (document.getElementById("none").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/caramel-pecan.png";
        } else if (document.getElementById("double-chocolate").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/caramel-chocolate.png";
        } else if (document.getElementById("vanilla-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/caramel-vanilla.png";
        } else if (document.getElementById("sugar-milk").checked) {
            document.getElementsByClassName("item-image")[0].src = "img/glaze/caramel-sugar.png";
        }
    });
}



// Add item to cart
document.getElementById("cart-btn").addEventListener("click", function () {
    let size;
    let price = document.getElementsByClassName("price")[0].innerHTML;;
    if (document.getElementById("1-roll").checked) {
        size = "1 roll";
    } else if (document.getElementById("3-rolls").checked) {
        size = "3 rolls";
    } else if (document.getElementById("6-rolls").checked) {
        size = "6 rolls";
    } else if (document.getElementById("12-rolls").checked) {
        size = "12 rolls";
    }

    let glaze;
    let img;
    if (document.getElementById("none").checked) {
        glaze = "None";
        if (document.getElementsByClassName("item-header")[0].innerHTML == "Original") {
            img = "img/original.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Pumpkin Spice") {
            img = "img/pumpkin-spice.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Blackberry") {
            img = "img/blackberry.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Original Gluten-Free") {
            img = "img/gluten-free.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Walnut") {
            img = "img/walnut.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Caramel Pecan") {
            img = "img/caramel-pecan.png";
        } 
    } else if (document.getElementById("double-chocolate").checked) {
        glaze = "Double Chocolate";
        if (document.getElementsByClassName("item-header")[0].innerHTML == "Original") {
            img = "img/glaze/original-chocolate.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Pumpkin Spice") {
            img = "img/glaze/pumpkin-chocolate.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Blackberry") {
            img = "img/glaze/blackberry-chocolate.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Original Gluten-Free") {
            img = "img/glaze/glutenfree-chocolate.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Walnut") {
            img = "img/glaze/walnut-chocolate.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Caramel Pecan") {
            img = "img/glaze/caramel-chocolate.png";
        } 
    } else if (document.getElementById("vanilla-milk").checked) {
        glaze = "Vanilla Milk";
        if (document.getElementsByClassName("item-header")[0].innerHTML == "Original") {
            img = "img/glaze/original-vanilla.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Pumpkin Spice") {
            img = "img/glaze/pumpkin-vanilla.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Blackberry") {
            img = "img/glaze/blackberry-vanilla.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Original Gluten-Free") {
            img = "img/glaze/glutenfree-vanilla.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Walnut") {
            img = "img/glaze/walnut-vanilla.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Caramel Pecan") {
            img = "img/glaze/caramel-vanilla.png";
        } 
    } else if (document.getElementById("sugar-milk").checked) {
        glaze = "Sugar Milk";
        if (document.getElementsByClassName("item-header")[0].innerHTML == "Original") {
            img = "img/glaze/original-sugar.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Pumpkin Spice") {
            img = "img/glaze/pumpkin-sugar.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Blackberry") {
            img = "img/glaze/blackberry-sugar.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Original Gluten-Free") {
            img = "img/glaze/glutenfree-sugar.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Walnut") {
            img = "img/glaze/walnut-sugar.png";
        } else if (document.getElementsByClassName("item-header")[0].innerHTML == "Caramel Pecan") {
            img = "img/glaze/caramel-sugar.png";
        } 

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
    updateCartLabel();
    showConfirmation();
});


// Show notification when users add item to cart
function confirmation() {
    $('body').append(`
      <div id="confirmation">
        <div id="confirmationtext">
          Your selection was added to cart!
        </div>
      </div>
      `);
}
confirmation();

function showConfirmation() {
    $('#confirmation').animate({
        right: "+=325px",
    }, 300);
    $('#confirmation').delay(1500).animate({
        right: "-=325px",
    }, 300);
}
