import React from "react";
import { useSelector } from "react-redux";

function Child2() {
  const message = useSelector((state) => state.messsageReducer.message);
  return <div>This data from child1 is:{message}</div>;
}

export default Child2;
