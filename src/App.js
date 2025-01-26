import React from 'react';
import Header from './components/Header';
import { useState , useEffect} from 'react';
import products from "./products.json";
import Product from "./components/Product";




export default function App() {
    const [money ,setMoney] = useState(1_600_000_000);
  return (

    <div>
      <Header money={money}/>
      {products.map(product =>(<Product product={product}/>))}
    </div>
  )
}
