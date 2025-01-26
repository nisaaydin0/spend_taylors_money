import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from "../products.json";

function Product({ product }) {
  const [money, setMoney] = useState(1600000000);
  const [cart, setCart] = useState([]);

  const buyProduct = (product) => {
    if (money >= product.price) {
      setMoney((prevMoney) => prevMoney - product.price);
      setCart((prevCart) => [...prevCart, product]);
      console.log(`Bought: ${product.title}`);
    } else {
      alert("You don't have enough money to buy this item.");
    }
  };

  const sellProduct = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      setMoney((prevMoney) => prevMoney + product.price);
      setCart((prevCart) => prevCart.filter((item, index) => index !== productIndex));
      console.log(`Sold: ${product.title}`);
    } else {
      alert("You don't own this product to sell it.");
    }
  };

  return (
    <div>
      <h2>You have ${money.toLocaleString()} dollars to spend!</h2>
      <div className='container d-flex'>
        {products.map((product) => (
          <div className="" key={product.id}>
            <Card className='card '>
              <Card.Img variant="top" src={product.img} className="card-img" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <h3>${product.price.toLocaleString()}</h3>
                <div className="d-flex justify-content-between">
                  <Button
                    onClick={() => buyProduct(product)}
                    variant="primary"
                    disabled={money < product.price}
                  >
                    Buy
                  </Button>
                  <Button
                    onClick={() => sellProduct(product)}
                    variant="danger"
                    disabled={!cart.find((item) => item.id === product.id)}
                  >
                    Resell
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
