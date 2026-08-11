import { useState } from "react";
import "./ShoppingCart.css"; 


function ProductItem({ product, onAdd }) {
  return (
    <div className="product-item">
      <span className="product-name">
        {product.name} — ₦{product.price}
      </span>
      <button onClick={() => onAdd(product)} className="btn-add">
        Add
      </button>
    </div>
  );
}

function ProductList({ products, onAdd }) {
  return (
    <div>
      <h2 className="section-heading">Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">
      <div>
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">
          ₦{item.price} x {item.quantity} = ₦{item.price * item.quantity}
        </p>
      </div>

      <div className="quantity-controls">
        <button onClick={() => onDecrease(item.id)} className="btn-decrease">
          -
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)} className="btn-increase">
          +
        </button>
      </div>
    </div>
  );
}

function CartList({ cartItems, onIncrease, onDecrease }) {
  if (cartItems.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }

  return (
    <div className="cart-list">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
}


function Shoppingcart() {
  const availableProducts = [
    { id: 1, name: "Notebook", price: 500 },
    { id: 2, name: "Pen", price: 150 },
    { id: 3, name: "Backpack", price: 4500 },
    { id: 4, name: "Water Bottle", price: 1200 },
  ];

 
  const [cartItems, setCartItems] = useState([]);

 
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      increaseQuantity(product.id);
    } else {
      const updatedCart = [...cartItems];
      updatedCart.push({ ...product, quantity: 1 });
      setCartItems(updatedCart);
    }
  }

  
  function increaseQuantity(id) {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = [];

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        if (newQuantity > 0) {
          updatedCart.push({ ...item, quantity: newQuantity });
        }
      } else {
        updatedCart.push(item);
      }
    }

    setCartItems(updatedCart);
  }

  
  function removeLastItem() {
    if (cartItems.length === 0) return;
    const updatedCart = [...cartItems];
    updatedCart.pop();
    setCartItems(updatedCart);
  }

  // Total price
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {/* Pass the product list + addToCart function down as props */}
      <ProductList products={availableProducts} onAdd={addToCart} />

      {/* Pass the cart items + increase/decrease functions down as props */}
      <div>
        <h2 className="section-heading">Your Cart</h2>
        <CartList
          cartItems={cartItems}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </div>

      {/* Remove last item button - acts like array.pop() */}
      <button
        onClick={removeLastItem}
        disabled={cartItems.length === 0}
        className="btn-remove"
      >
        Remove Last Item Added
      </button>

      {/* Total price */}
      <div className="cart-total">
        <span>Total</span>
        <span>₦{total}</span>
      </div>
    </div>
  );
}

export default Shoppingcart;