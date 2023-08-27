import { Fragment } from "react";
import Banner from "../../components/Banner/Banner";
import { useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";
import "./CartPage.scss";
import { useDispatch } from "react-redux";
import { remove, addOne, minusOne } from "../../redux/cartSlice.js";
import Button from "../../components/Button/Button.js";
import { Link } from "react-router-dom";

function CartPage() {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove({ id: id }));
  };
  const handleAddOne = (id) => {
    dispatch(addOne({ id: id }));
  };
  const handleMinusOne = (id) => {
    dispatch(minusOne({ id: id }));
  };
  return (
    <Fragment>
      <Banner pageTitle={"Cart"} />
      <div className="row   ">
        <div className="col"></div>
        <div className="col-10">
          <p className="text fs-5">Your cart</p>
          <div className="table-responsive">
            {cartData.products.length > 0 ? (
              <table className="table table-success">
                <thead className="">
                  <tr>
                    <th scope="col">Img</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.products.map((item, index) => (
                    <tr className="" key={index}>
                      <td className="col">
                        <img src={item.img} className="my-cart-product-img" />
                      </td>
                      <td className="col">{item.title}</td>
                      <td className="col">{item.price}</td>
                      <td className="col">
                        {" "}
                        <button
                          className="my-cart-btn"
                          onClick={(e) => {
                            if (item.quantity > 1) {
                              e.stopPropagation();
                              handleMinusOne(item.id);
                            } else {
                              e.stopPropagation();
                              handleRemove(item.id);
                            }
                          }}
                        >
                          -
                        </button>
                        <button className="my-cart-btn">{item.quantity}</button>
                        <button
                          className="my-cart-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddOne(item.id);
                          }}
                        >
                          +
                        </button>
                      </td>
                      <td className="col">{item.price * item.quantity}</td>
                      <td className="col">
                        <Delete
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemove(item.id);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text text-danger">No product in your cart</p>
            )}
          </div>

          <div className="row  ">
            {" "}
            <Link to={"/"}>
              <Button css="red-white-medium ">Tiep tuc mua hang</Button>
            </Link>
          </div>
          {cartData.products.length > 0 ? (
            <Fragment>
              <p className="my-3 text text-center">
                Subtotal:{" "}
                <span className="text text-danger fs-6 fw-bold">
                  {cartData.total}
                </span>
              </p>
              <div className="row mx-0">
                <Button css="white-red-medium ">Tiep tuc thanh toan</Button>
              </div>
            </Fragment>
          ) : (
            ""
          )}
        </div>
        <div className="col"></div>
      </div>
    </Fragment>
  );
}

export default CartPage;
