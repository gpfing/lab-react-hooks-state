import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, setCartItem }) => {
      const handleClick = () =>{
       setCartItem(prevArray => [...prevArray, product])
      }
      
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button onClick={handleClick} data-testid={'product-' + product.id}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
