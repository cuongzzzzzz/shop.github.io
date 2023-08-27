import { Fragment } from "react";

import Banner from "../../components/Banner/Banner";
import { Link, useLocation, useParams } from "react-router-dom";

import  "./Account.scss";
function Account() {
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
              <p className="text fs-5 mt-5 mb-3">THÔNG TIN TÀI KHOẢN</p>
              <p className="text">
                <span className="text fw-bold">Họ tên: </span> Đặng Quốc Cường
              </p>
              <p className="text">
                <span className="text fw-bold">Email: </span> Đặng Quốc Cường
              </p>
              <p className="text">
                <span className="text fw-bold">Công ty: </span> Đặng Quốc Cường
              </p>
              <p className="text">
                <span className="text fw-bold">Địa chỉ giao hàng: </span> Đặng
                Quốc Cường
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Account;
