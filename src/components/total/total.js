import React from "react";
import { useSelector } from "react-redux";

const Total = (props) => {

  const total = useSelector(state => state.pr.total);
  const login = useSelector(state => state.lr.loginDetails);

  return (
    <div className="box">
      <h2 className="title">Total - {login}</h2>
      <p>${total}</p>
    </div>
  );
};

export default Total;
 