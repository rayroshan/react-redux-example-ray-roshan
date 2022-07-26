import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PURCHASE } from "../../actions/actions";

const Purchase = (props) => {

  const products = useSelector(state => state.pr.products);
  const login = useSelector(state => state.lr.loginDetails);
  const dispatch = useDispatch();

  const renderOptions = () => {
    return products?.map(product => <option key={product._id} value={product.cost}>{product.name} - ${product.cost}</option>)
  }

  const purchaseHandler = (e) => {
    let name = e.target.options[e.target.selectedIndex].text
    let price = e.target.value;
    let obj = { name, price };
    dispatch({type: PURCHASE, payload: obj});
  }

  return (
    <div className="box">
      <h2 className="title">Products - {login}</h2>
      <select className="input" onChange={purchaseHandler}>
        {renderOptions()}
      </select>
    </div>
  );
};

export default Purchase;
