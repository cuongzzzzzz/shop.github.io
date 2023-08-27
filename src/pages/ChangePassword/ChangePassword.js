import style from "./ChangePassword.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Fragment } from "react";
import Button from "../../components/Button/Button.js";

import Banner from "../../components/Banner/Banner";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
function ChangePassword() {
  const form = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    onSubmit: () => {
      try {
        if (!form.errors) {
          //call api
        }
      } catch (err) {
        console.log(err.response.data);
      }
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Vui lòng nhập trường này"),
      newPassword: Yup.string()
        .required("Vui lòng nhập trường này")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Vui lòng nhập mật khẩu có ít nhất 8 kí tự, gồm kí tự đặc biệt, số, và chữ hoa"
        ),
      confirmNewPassword: Yup.string()
        .required("Vui lòng nhập trường này")
        .oneOf([Yup.ref("newPassword"), null], "Mật khẩu chưa khớp"),
    }),
  });
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
              <div className="row mx-0">
                <div className="col-7">
                  <p className="text fs-5 mt-5 mb-3">THAY ĐỔI MẬT KHẨU</p>
                  <p className="text">
                    Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít
                    nhất 8 kí tự
                  </p>
                  <form method="post" action="">
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Mật khẩu cũ *
                      </label>
                      <input
                        required
                        onChange={form.handleChange}
                        value={form.values.oldPassword}
                        type="text"
                        className="form-control"
                        name="oldPassword"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                      />
                      <p className="text text-danger">
                        {form.errors.oldPassword}
                      </p>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Mật khẩu mới *
                      </label>
                      <input
                        required
                        onChange={form.handleChange}
                        value={form.values.newPassword}
                        type="text"
                        className="form-control"
                        name="newPassword"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                      />
                      <p className="text text-danger">
                        {form.errors.newPassword}
                      </p>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Xác nhận mật khẩu mới *
                      </label>
                      <input
                        required
                        onChange={form.handleChange}
                        value={form.values.confirmNewPassword}
                        type="text"
                        className="form-control"
                        name="confirmNewPassword"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                      />
                      <p className="text text-danger">
                        {form.errors.confirmNewPassword}
                      </p>
                    </div>
                    <Button
                      type={"submit"}
                      css={"red-white"}
                      onClick={form.handleSubmit}
                    >
                      Đặt lại mật khẩu
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ChangePassword;
