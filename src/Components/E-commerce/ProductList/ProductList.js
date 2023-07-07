import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, loadProducts } from "../../../redux/Slices/ProductSlice";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./ProductList.css";
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.status);
  const error = useSelector((state) => state.productReducer.error);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === "loading") {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
      <Spin
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
        }}
        indicator={antIcon}
      />
    );
  }

  if (status === "rejected") {
    return (
      <>
        <h3>oh oh! Something went wrong </h3>
        <p>{error}</p>
      </>
    );
  }
  return (
    <div className="ProductList">
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  );
}
export default ProductList;
