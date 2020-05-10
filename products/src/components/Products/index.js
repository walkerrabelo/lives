import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { getProducts } from '../../services/product.service'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts().subscribe(allProducts => setProducts(allProducts))
  }, [])

  const addProduct = (product) => setProducts([...products, product])

  return (
      <div className="product-container">
        <ProductList products={products}/>
        <ProductForm addProduct={addProduct}/>
      </div>
  );
}

export default Products;