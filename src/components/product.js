import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (product) {
    return (
      <div className="product-detail">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
      </div>
    );
  } else {
    return <p>Product not found</p>;
  }
}

export default Product;