import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { remove_from_cart } from '../actions';
import { decrease_item } from '../actions';
import { increase_item } from '../actions';
const Cart = (props) => {
    const total = props.cart.reduce((sum, value) => {
        // $17.53 split($)-->["$","17.53"] index 1 means 17.53 but it is in string format for it we should type Number() method
        // return sum += Number(value.price.split("$")[1])
        return sum+=Number(value.price.slice(1))*value.qty

    }, 0)
    return (
        <div className='container pt-5'>
            <h1>Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Subtitle</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>

                    {props.cart && props.cart.map((item) => {
                        return (
                            <tr key={item.isbn13}>
                                <td><img src={item.image} alt="bookimage" style={{ width: '60px', height: '60px' }} /></td>
                                <td>{item.title}</td>
                                <td>{item.subtitle}</td>
                                <td><button onClick={()=>{props.decrease_item(item.isbn13)}}>-</button>{item.qty}<button onClick={()=>props.increase_item(item.isbn13)}>+</button></td>
                                <td>{item.price}</td>
                                <td><FontAwesomeIcon icon={faTrash} style={{color:"red",cursor:"pointer",fontSize:"20px"}} onClick={()=>{props.remove_from_cart(item.isbn13);console.log(props.cart)}}/></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <h4>Total:{total.toFixed(2)}$</h4>
        </div >
    )
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStatetoProps,{remove_from_cart,decrease_item,increase_item})(Cart)