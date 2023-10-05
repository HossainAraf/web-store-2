// Products.jsx
// IMPORTS
import React from 'react';
import Product from './Product';
import AllProducts from './AllProducts';

const Products = () => {
  return (
    <div>
      <ul>
        {AllProducts.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
