import React, { memo } from "react";
import { FaStarHalfStroke, FaStar, FaRegStar } from "react-icons/fa6";
import "./Star.scss"
function Star({ rate, count }) {
    const rating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {rate >= index + 1 ? (
                    <FaStar />
                ) : rate >= number ? (
                    <FaStarHalfStroke />
                ) : (
                    <FaRegStar />
                )}
            </span>
        );
    });
    return (
        <div className="starRating">
            <span className='rate'>{rating}</span>
            <span className='count'>{count} Ratings</span>
        </div>
    )
}

export default memo(Star)