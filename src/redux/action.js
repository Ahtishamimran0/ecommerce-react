import axios from "axios"

//ALL PRODUCT//
export const fetchProduct = (API) => {
    return async (dispatch) => {
        const res = await axios.get(API)
        const product = await res.data
        dispatch({ type: "MY_API_PRODUCT", payload: product })
    }
}

// SINGLE PRODUCT//
export const fetchSingleProduct = (url) => {
    return async (dispatch) => {
        const res = await axios.get(url)
        const singleProduct = await res.data
        dispatch({ type: "MY_SINGLE_PRODUCT", payload: singleProduct })
    }
}

// INC / DEC / ADD TO CART
export const setIncrement = (id) => {
    return {
        type: "INCREMENT", payload: id
    }
}
export const setDecrement = (id) => {
    return {
        type: "DECREMENT", payload: id
    }
}

export const addToCart = (id, image, category, price, title, quantity) => {
    return {
        type: "ADD_TO_CART",
        payload: { id, image, category, price, title, quantity }
    }
}

//REMOVE ITEMS
export const setRemove = (id) => {
    return {
        type: 'REMOVE_ITEM', payload: id
    }
}

//REMOVE ALL ITEM
export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}