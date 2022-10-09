import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getbooklist,add_to_cart } from "../actions";
import { useState } from 'react';

const Main = (props) => {
const [url,setUrl]=useState("");
props.getbooklist(url);
    return (
        <div className="container main">
            <input type="text" name="search" id="search" placeholder='Search here...' onKeyDown={(e)=>{if(e.keyCode===13){alert("helo")}}} onChange={(e)=>{setUrl(e.target.value);console.log(url)}}/>
            <div className="row d-flex">
                {props.booklist&&props.booklist.books?.map((item) => {
                    return (
                        <div className="col-sm-3" key={item.isbn13}>
                            <div class="card me-2 mb-3 position-relative">
                                <img src={item.image} class="card-img-top" alt="book_img" />
                                <div class="card-body">
                                    <p className="card-text">{item.price}</p>
                                    <button className="btn btn-success w-100" onClick={()=>{props.add_to_cart(item,item.isbn13)}}>Add to cart</button>
                                </div>
                                <div className="position-absolute card-icons">
                                    <div className="product-icon mb-2">
                                        <Link to={`/product/${item.isbn13}`}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Link>
                                    </div>
                                    <div className="product-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

const mapStatetoProps = (state) => {
    return {
        booklist: state.booklist,
        cart:state.cart,
    }
}

export default connect(mapStatetoProps,{getbooklist,add_to_cart})(Main);