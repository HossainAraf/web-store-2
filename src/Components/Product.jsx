// Product.jsx
// IMPORTS

const Product = ({id, name, imgUrl, price }) => {
return (
    <div>
        <img src="{imgUrl}" alt="product" />
        <h3>{name}</h3>
        <p>${price}</p> 
        <p>Hello</p>
    </div>
);
}

export default Product;