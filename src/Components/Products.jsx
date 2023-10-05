// Products.jsx
// IMPORTS
import React from 'react';
import Product from './Product';
import AllProducts from './AllProducts';
import '../Styles/index.css';
import '../Styles/products.css';

const Products = () => {
  return (
    <div className="products-wrapper flex-row">
      <ul className="flex-row">
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
