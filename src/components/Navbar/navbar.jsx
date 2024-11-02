import React, { useContext, useState } from 'react';
import './navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

// Rename the component to start with an uppercase letter
const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setMenu("shop")}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:null}</li>
        <li onClick={()=>setMenu("mens")}><Link to='/mens'style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr/>:null}</li>
        <li onClick={()=>setMenu("womens")}><Link to='/womens'style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<hr/>:null}</li>
        <li onClick={()=>setMenu("kids")}><Link to='/kids'style={{textDecoration:'none'}}>Kid</Link>{menu==="kids"?<hr/>:null}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to='/login' style={{textDecoration:'none'}}>Login</Link></button>
        <Link to='/cart' style={{textDecoration:'none'}}><img src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  
  );
};

export default Navbar;
