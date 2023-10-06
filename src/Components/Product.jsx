// Product.jsx
// IMPORTS

const Product = ({id, title, img, price }) => {
return (
    <div className="single-product">
        <img src={img} alt="product" />
        <h3>{title}</h3>
        <p>${price}</p> 
        <button>Add to Cart</button>
    </div>
);
}

export default Product;