import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import FormatPrice from '../helpers/Formatprice'
import "./ShoppingCard.scss"

function ShoppingCard({ product, fetchProduct }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct('https://fakestoreapi.com/products'))
    }, [])

    //FILTER THE CATEGORY//
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...new Set(product.map((item) => item.category))];
    const filteredItems = selectedCategory === "All" ? product
        : product.filter((item) => item.category === selectedCategory);

    return (
        <>
            <div className="select">
                {categories.map((category) => (
                    <button title={` Lists of ${category}`} className='cateItems' onClick={() => setSelectedCategory(category)} >
                        {category}
                    </button>
                ))}
            </div >
            <div className="maintitle">
                <span className='span'>CHECK NOW !</span>
                <h2 className='main'>OUR MOST PRODUCTS</h2>
            </div>
            <div className='products_Wrapper'>
                {filteredItems.map((curElem) => {
                    const { title, image, category, id, price } = curElem
                    const newtitle = title.substring(0, 30)
                    return (
                        <NavLink to={`/card/${id}`}
                            style={{
                                textDecoration: "none", margin: ".8rem .8rem", color: "black"
                            }} key={id}>
                            <div className="product">
                                <img src={image} alt={category} loading='lazy' />
                                <div className="Product_detail">
                                    <p>{category}</p>
                                    <p><FormatPrice price={price} /></p>
                                    <p>{newtitle.length > 29 ? `${newtitle}...` : newtitle}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                })
                }
            </div >
        </>
    )
}

export default ShoppingCard

