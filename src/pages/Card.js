import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { fetchSingleProduct, addToCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import FormatPrice from '../helpers/Formatprice'
import './Card.scss'
import Star from './Star'
function Card() {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const { singleProduct } = useSelector(state => state.productReduce)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSingleProduct(`https://fakestoreapi.com/products/${id}`))
    }, [id])

    const {
        image,
        category,
        price,
        title,
        description,
        rating: { rate, count }
    } = singleProduct
    return (
        <div className='cart_Wrapper'>
            <img src={image} alt={category} />
            <div className="detail">
                <p className='cartTitle'>{title}</p>
                <p className='cartPrice'><span><FormatPrice price={price} /></span></p>
                <p className='description'>{description}</p>
                <Star rate={rate}
                    count={count}
                />
                <div className="cartdetails">
                    <NavLink to={`/additem`}>
                        <button className='cart_btn' onClick={() => dispatch(addToCart(id, image, category, price, title, quantity))}>ADD TO CART</button>
                    </NavLink>
                    <div className='cartQuantity'>
                        <button onClick={() => quantity >= 6 ? setQuantity(quantity = 1) : setQuantity(quantity
                            + 1)}><i className="fa-solid fa-plus" ></i>
                        </button>
                        <span className='qty'>{quantity}</span>
                        <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}><i className="fa-solid fa-minus" ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card