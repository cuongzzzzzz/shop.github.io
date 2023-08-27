import style from "./Order.module.scss";
import { Fragment } from "react";

import Banner from "../../components/Banner/Banner";
import { Link, useLocation, useParams } from "react-router-dom";
function Order() {
  const linkData = [
    {
      text: "Thông tin tài khoản",
      link: "/account",
    },
    {
      text: "Lịch sử mua hàng",
      link: "/account/orders",
    },
    {
      text: "Đổi mật khẩu",
      link: "/account/changepassword",
    },
    {
      text: "Sổ địa chỉ",
      link: "/account/address",
    },
  ];
  const path = useLocation();
  console.log(path);
  return (
    <Fragment>
      <Banner pageTitle={"Account"} />
      <div className="row mx-0 d-flex justify-content-center">
        <div className="col-10">
          <div className="row mx-0">
            <div className="col-3">
              <p className="text fs-5 mt-5 mb-3">TRANG TÀI KHOẢN</p>
              <p className="text">
                Xin chào,{" "}
                <span className="text text-danger fw-bold">
                  Cường Đặng Quốc
                </span>
              </p>
              {linkData.map((item, index) => (
                <Link className="my-account-link" to={item.link} key={index}>
                  <p
                    className={
                      path.pathname == item.link ? "text text-danger" : "text"
                    }
                  >
                    {item.text}
                  </p>
                </Link>
              ))}

              <Link className="my-account-link" to={"#"}>
                {" "}
                <p className="text">Đăng xuất</p>
              </Link>
            </div>
            <div className="col-9">
              <p className="text fs-5 mt-5 mb-3">LỊCH SỬ MUA HÀNG</p>
              <div className="table-responsive">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th scope="col">Đơn hàng</th>
                      <th scope="col">Ngày</th>
                      <th scope="col">Đỉa chỉ</th>
                      <th scope="col">TT Thanh toán</th>
                      <th scope="col">TT Vận chuyển</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td scope="row">R1C1</td>
                      <td>R1C2</td>
                      <td>R1C3</td>
                      <td>R1C3</td>
                      <td>R1C3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Order;
