import React, { useEffect, useState , useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {updateArticleQty} from "../../../features/articleSlice";
import { clearCart } from '../../../features/cartSlice';

const Success = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.storecart);
    const dataFetchedRef = useRef(false);
    

    useEffect(() => {  
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        updateQte();
       
      }, []);

      const updateQte = () => {
    
        const lineOrder= cart.cartItems.map((lc) => ({
          articleID: lc._id,
          quantity: lc.cartQuantity,
          totalPrice: lc.prix*lc.cartQuantity
        }));
            
       dispatch(updateArticleQty(lineOrder))
       dispatch(clearCart())
      }

  return (
    <div>

      <div>

        <h1>Thank You</h1>
        <p>Order Placed Successfully</p>

        <Link to="/">
                <span onClick={() =>dispatch(clearCart())}>Another Shopping</span>
        </Link>

      </div>

    </div>
  )
}

export default Success
