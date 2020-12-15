import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>CRUD APPLICATION</h1>
       <input type="id" name="productID"></input>
       <input type="name" name="name"></input>
       <input type="imageUrl" name="imageUrl"></input>
       <input type="quantity" name="quantity"></input>
       <input type="wholesaleCost" name="wholesaleCost"></input>
       <input type="salePrice" name="salePrice"></input>
       <input type="supplierId" name="supplierId"></input>
    </div>
  );
}

export default App;
