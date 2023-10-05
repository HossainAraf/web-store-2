// Product.jsx
// IMPORTS

const Product = ({id, title, img, price }) => {
return (
    <div>
        <img src={img} alt="product" />
        <h3>{title}</h3>
        <p>${price}</p> 
        <p>Good Day!</p>
    </div>
);
}

export default Product;