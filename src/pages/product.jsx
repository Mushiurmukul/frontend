import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Breadcrum } from '../components/Breadcrum/Breadcrum';
import { useParams } from 'react-router-dom';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';

export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div className='product'>
      <Breadcrum product = {product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}
