import React, { useState } from "react";
import './ShoppingList.css';

const ShoppingList = () => {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState({
    name: "",
    quantity: ""
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (item.name.trim() && item.quantity.trim()) {
      setProducts((prev) => [...prev, { ...item, id: Math.random() }]);
      setItem({ name: "", quantity: "" }); 
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name === "item-name" ? "name" : "quantity"]: value
    }));
  };

  return (
    <div className="shopping-container">
      <div className="shopping-header">
        <h2>Add Product</h2>
      </div>

      <form className="shopping-form" onSubmit={onSubmitHandler}>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter product name"
              name="item-name"
              value={item.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter quantity"
              name="item-quantity"
              value={item.quantity}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <button className="submit-button" type="submit">Add Product</button>
      </form>

      <div className="products-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <h3>Quantity: {product.quantity}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
