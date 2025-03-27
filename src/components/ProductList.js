import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (products.length > 0) {
    return (
      <div>
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>No products found</p>;
  }
}

export default ProductList;