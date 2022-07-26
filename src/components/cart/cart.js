import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE } from "../../actions/actions";

const Cart = (props) => {
    
    const cart = useSelector(state => state.pr.cart);
    const login = useSelector(state => state.lr.loginDetails);

    const dispatch = useDispatch();

    const handleDelete = (e, price) => {
        dispatch({type: DELETE, payload: {index: e, price: price}});
    }

    const renderCart = () => {
        return cart?.map((c, index) => {
            return <li key={index} onClick={() => handleDelete(index, c.price)}>{c.name}</li> 
        })
    }
    
    return (
        <div className="box">
            <h2 className="title">Cart - {login}</h2>
            <ul className="list">
                {renderCart()}
            </ul>
        </div>
    );
};

export default Cart;
