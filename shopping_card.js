// Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price for the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Add item to the cart
    addItem(product, quantity) {
        let existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Remove item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Get total price of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Display cart items
    displayCart() {
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
            return;
        }
        console.log("Shopping Cart:");
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
        });
        console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
    }
}

// Testing the shopping cart
const apple = new Product(1, "Apple", 1.5);
const banana = new Product(2, "Banana", 1.2);

const cart = new ShoppingCart();
cart.addItem(apple, 3);
cart.addItem(banana, 2);
cart.displayCart();
cart.removeItem(1);
cart.displayCart(); 
