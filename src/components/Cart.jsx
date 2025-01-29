import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = ({ cart, setCart, setMoney }) => {
  const sellProduct = (product) => {
    setMoney((prevMoney) => prevMoney + product.price);
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go Shopping</Link></p>
      ) : (
        <div className="container d-flex flex-wrap">
          {cart.map((product) => (
            <div key={product.id}>
              <Card className="card">
                <Card.Img variant="top" src={product.img} className="card-img" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <h3>${product.price.toLocaleString()}</h3>
                  <Button
                    onClick={() => sellProduct(product)}
                    variant="danger"
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
      <Link to="/">Back to Shopping</Link>
    </div>
  );
};

export default Cart;
