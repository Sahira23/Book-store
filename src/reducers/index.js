const INITIAL_STATE = {
    isLoading: false,
    booklist: [],
    message: '',
    cart: [],
}
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_BOOKS_SUCCESS":
            return { ...state, booklist: action.payload }
        case "GET_BOOKS_ERROR":
            return { ...state, message: action.payload }
        case "ADD_TO_CART":
            const firstiteminarray=state.cart.findIndex((item)=>{
                return item.isbn13===action.payload.id
            })
            if(firstiteminarray===-1){
                return{...state,cart:[...state.cart,action.payload.book]}
            }
            else state.cart[firstiteminarray].qty++;
        case "REMOVE_FROM_CART":
            return {
                ...state, cart: state.cart.filter((item) => {
                    return item.isbn13 !== action.payload
                })
            }
        case "INCREASE_ITEM":
            return {
                ...state, cart: state.cart.map(obj => {
                    if (obj.isbn13 === action.payload) {
                        return { ...obj, qty: obj.qty + 1 };
                    }

                    return obj;
                })
            }
        case "DECREASE_ITEM":
            return {
                ...state, cart: state.cart.map((item,index) => {
                    if (item.isbn13 === action.payload && item.qty > 1) {
                        return { ...item, qty: item.qty-1 }
                    }
                    if (item.isbn13 === action.payload && item.qty === 1) {
                           return {...item,qty:1}
                    }
                    return item
                })
            }
        default:
            return state

    }
}