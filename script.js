/////////////CORRECTION CHECK POINT OOP ////////////////////
////1.
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
///2:
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
///4:
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(product, quantity) {
        const existingItem = this.items.find((item) => item.product.id === product.id);
        if (existingItem) {
            // existingItem.quantity += 1;
            existingItem.quantity += quantity;

        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    removeItem(productId) {
        this.items = this.items.filter((item) => item.product.id !== productId);
    }




    displayItems() {
        this.items.map((item) => console.log(`Product: ${item.product.name},Quantity: ${item.quantity},TotalPrice: ${item.getTotalPrice()}`));
    }





}
let product1 = new Product(1, "apple", 5);
let product2 = new Product(2, "Banana", 6);
let product3 = new Product(3, "orange", 10);

const cart = new ShoppingCart();
cart.addItem(product1, 3);
cart.addItem(product2, 10);

cart.addItem(product1, 4);
cart.displayItems();
cart.removeItem(1);
cart.displayItems();