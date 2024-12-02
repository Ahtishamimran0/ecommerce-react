import React, { useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    setDecrement,
    setIncrement,
    setRemove,
    clearCart
} from '../redux/action'
import FormatPrice from '../helpers/Formatprice';
import './Additem.scss'
function Additem() {
    const dispatch = useDispatch()
    const { cart, total_price, shipping_fee } = useSelector(state => state.productReduce)

    useEffect(() => {
        dispatch({ type: 'CART_TOTLE_PRICE' })
    }, [cart])

    return (
        <div className="cart_Item_Container">
            <div className="cartTitle">
                <h1>Shopping Cart </h1>
            </div>
            <div className="cartNaming">
                <p>ITEMS({cart.length})</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
                <p>REMOVE</p>
            </div>
            {cart.map((curElem) => {
                const { id, image, price, quantity } = curElem
                return (
                    <div className="cartItemslist" key={id}>
                        <img src={image} alt='image' />
                        <div className="cartDetail">
                            <p><FormatPrice price={price} /></p>
                            <div style={{ display: 'Flex' }}>
                                <button className='addBtn'  ><i className="fa-solid fa-plus" onClick={() => dispatch(setIncrement(id))}></i></button>
                                <p className='qty'>{quantity}</p>
                                <button className='addBtn'><i className="fa-solid fa-minus" onClick={() => dispatch(setDecrement(id))} ></i></button>
                            </div>
                            <p><FormatPrice price={price * quantity} /></p>
                            <button className='addRemove' onClick={() => dispatch(setRemove(id))}><MdDelete />
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className="cartFlex" style={{ display: "Flex", margin: "1.7rem 0 0 0", justifyContent: "space-between" }}>
                <NavLink to={'/'} style={{ textDecoration: "none" }}>
                    <div className="addBack">
                        <button className='continueBtn'>Continue Shopping</button>
                    </div>
                </NavLink>
                {cart.length >= 1 ? <div className="cartTotal">
                    <span>Subtotal:</span>
                    <p><FormatPrice price={total_price} /></p>
                    <span className='p'>Shipping Fee:</span>
                    <hr />
                    <p><FormatPrice price={shipping_fee} /></p>
                    <span>Total Order:</span>
                    <p><FormatPrice price={total_price + shipping_fee} /></p>
                    <button className='clearBtn' onClick={() => dispatch(clearCart())}>CLEAR CART <span> <RiDeleteBin6Line /></span>
                    </button>
                </div> : null}
            </div>
        </div >
    )
}

export default Additem
