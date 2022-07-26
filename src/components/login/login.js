import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateUser } from "../../actions/actions";

const Login = (props) => {
    
    const users = useSelector(state => state.lr.users);
    const dispatch = useDispatch();

    const loginHandler = (e) => {
        dispatch(validateUser(e.target.value));
    }

    const renderOptions = () => {
        return users?.map(user => {
            return <option key={user} value={user}>{user}</option>
        })
    }
    
    return (
        <div className="box">
            <h2 className="title">Login</h2>
            <select className="input" onChange={loginHandler}>
                {renderOptions()}
            </select>
        </div>
    );
};

export default Login;
