import useFetch from "../components/useFetch";
export const getbooklist=(url)=>dispatch=>{
    console.log(url)
    const { data, error } = useFetch(`https://api.itbook.store/1.0/search/${url}`);
    dispatch({type:"GET_BOOKS_SUCCESS",payload:data});
    dispatch({type:"GET_BOOKS_ERROR",payload:error})
}
export const add_to_cart=(book,id)=>{
    return{
        type:"ADD_TO_CART",
        payload:{
            book:{...book,qty:1},
            id:id
        }
    }
}

export const remove_from_cart=(id)=>{
    return{
        type:"REMOVE_FROM_CART",
        payload:id
    }
}

export const decrease_item=(id)=>{
    return{
        type:"DECREASE_ITEM",
        payload:id,
    }
}
export const increase_item=(id)=>{
    return{
        type:"INCREASE_ITEM",
        payload:id
    }
}