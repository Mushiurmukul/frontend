import React, { useContext } from 'react'
import './Cartitem.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../context/ShopContext'



export const Cartitem = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitem'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                    <div className="cartitems-format">
                        <img className='carticon-product-icon3' src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <img className='carticon-product-icon2' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}alt=""/>
                    </div>
                    <hr/>
                </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div className="cartitems-total-item">
                    <h3>Subtotal</h3>
                    <h3>${getTotalCartAmount(cartItems)}</h3>
                </div>
                <div className="cartitems-total-item">
                    <p>Shipping fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount(cartItems)}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code'/>
                    <button>Submit</button>

                </div>
            </div>
        </div>
    </div>
  )
}
