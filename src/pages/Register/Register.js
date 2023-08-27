import Button from "../../components/Button/Button";
import { Fragment, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import axios from "axios";

import Banner from "../../components/Banner/Banner";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Register() {
  const [register1, setRegister1] = useState(true);
  const [register2, setRegister2] = useState(false);
  const [register3, setRegister3] = useState(false);
  const [phoneErr, setPhoneErr] = useState(null);
  const [opt, setOtp] = useState(null);
  const [optErr, setOptErr] = useState(null);
  const opt1 = "123456";

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phonenumber: "",
    },
    onSubmit: async () => {
      if (!formik.errors.length > 0) {
        try {
          const res = await axios.post(
            "http://localhost:8800/api/v2/auth/register",
            formik.values
          );
          navigate("/");
        } catch (err) {
          console.log(err.response.data);
        }
      }
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Vui lòng nhập trường này"),
      lastname: Yup.string().required("Vui lòng nhập trường này"),
      email: Yup.string()
        .required("Vui lòng nhập trường này")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Trường này phải là email"
        ),
      phonenumber: Yup.string()
        .required("Vui lòng nhập trường này")
        .matches(
          /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-9])[0-9]{7}$/,
          "Số điện thoại không được hỗ trợ"
        ),
      password: Yup.string()
        .required("Vui lòng nhập trường này")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Vui lòng nhập mật khẩu có ít nhất 8 kí tự, gồm kí tự đặc biệt, số, và chữ hoa"
        ),
      confirmPassword: Yup.string()
        .required("Vui lòng nhập trường này")
        .oneOf([Yup.ref("password"), null], "Mật khẩu chưa khớp"),
    }),
  });

  let phoneNumberPattern =
    /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-9])[0-9]{7}$/;
  const checkErr = (value, pattern, errMessage, setErr) => {
    if (value === "") {
      setErr("Vui lòng nhập trường này");
    } else {
      if (pattern.test(value)) {
        setErr("");
      } else {
        setErr(errMessage);
      }
    }
  };
  useEffect(() => {
    checkErr(
      formik.values.phonenumber,
      phoneNumberPattern,
      "truong nay phai la so dien thoai",
      setPhoneErr
    );
  }, [formik.values.phonenumber]);
  const handleSubmit1 = (e) => {
    e.preventDefault();

    if (phoneErr === "") {
      setRegister1(false);
      setRegister2(true);
    }
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (opt === opt1) {
      setRegister1(false);
      setRegister2(false);
      setRegister3(true);
    } else {
      setOptErr("Mã OPT không chính xác");
    }
  };
  return (
    <Fragment>
      <Banner pageTitle={"REGISTER"} />
      {register1 && (
        <div className="row mx-0 my-register">
          <div className="col-4"></div>
          <div className="col-4 my-5">
            <p className="text text-center  h5 mb-3">ĐĂNG KÝ TÀI KHOẢN</p>
            <p className="text">Nhập số điện thoại của bạn để đăng ký:</p>
            <p className="text fs-6 text-left fw-bolder ">
              Số điện thoại/Email<span className="text text-danger">*</span>
            </p>
            <form method="post">
              <div className="mb-3">
                <input
                  type="text"
                  className="px-3 py-2 w-100"
                  name="phonenumber"
                  placeholder="Nhập số điện thoại"
                  id=""
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}
                />
                {formik.errors.phonenumber && (
                  <p className="text text-danger error-message">
                    {formik.errors.phonenumber}
                  </p>
                )}
              </div>
              <Button
                css={"red-white my-3"}
                onClick={(e) => {
                  handleSubmit1(e);
                }}
              >
                TIẾP TỤC
              </Button>
            </form>

            <p className="text text-left mt-5 ">
              Bạn đã có tài khoản
              <span className="text my-switch mx-3">Đăng nhập tại đây</span>
            </p>
            <div className="my-action-group w-100 mt-3">
              <p className="text text-center my-3">Hoặc đăng nhập bằng</p>
              <div className="method-login px-5 d-flex gap-1 ">
                <img
                  src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                  alt="fb"
                  className="w-50 "
                />
                <img
                  src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                  alt="gg"
                  className="w-50 "
                />
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      )}
      {register2 && (
        <div className="row mx-0 my-register">
          <div className="col-4"></div>
          <div className="col-4 my-5">
            <p className="text text-center  h5 mb-3">XÁC MINH SỐ ĐIỆN THOẠI</p>
            <p className="text">
              Vui lòng nhập mã OTP đã được gửi đến số điện thoại của bạn:
            </p>
            <p className="text fs-6 text-left fw-bolder ">
              Số điện thoại<span className="text text-danger">*</span>
            </p>
            <form method="post">
              <div className="mb-3">
                <input
                  type="text"
                  className="px-3 py-2 w-100"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  id=""
                  value={formik.values.phonenumber}
                  disabled
                />
              </div>
              <p className="text fs-6 text-left fw-bolder ">
                Mã OTP<span className="text text-danger">*</span>
              </p>
              <div className="mb-3">
                <input
                  type="text"
                  className="px-3 py-2 w-100"
                  name="phone"
                  placeholder="Nhập mã OTP"
                  id=""
                  value={opt}
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                />
                <p className="text text-danger error-message">{optErr}</p>
              </div>
              <Button css={"red-white my-3"} onClick={handleSubmit2}>
                TIẾP TỤC
              </Button>
            </form>

            <p className="text text-left mt-5 ">Quay lại</p>
            <div className="my-action-group w-100 mt-3">
              <p className="text my-3">
                Bạn không nhập được mã ?{" "}
                <span className="text my-switch mx-3">Gửi lại</span>
              </p>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      )}
      {register3 && (
        <div className="row mx-0 my-register">
          <div className="col-4"></div>
          <div className="col-4 my-5">
            <p className="text text-center  h5 mb-3">Thông tin cá nhân</p>
            <p className="text">Bổ sung thông tin cá nhân cho tài khoản:</p>

            <form method="post" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <p className="text fs-6 text-left fw-bolder ">
                  Họ<span className="text text-danger">*</span>
                </p>
                <input
                  type="text"
                  className="px-3 py-2 w-100"
                  name="firstname"
                  placeholder="Nhập họ"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  id=""
                />
                {formik.errors.firstname && (
                  <p className="text text-danger error-message">
                    {formik.errors.firstname}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <p className="text fs-6 text-left fw-bolder ">
                  Tên<span className="text text-danger">*</span>
                </p>
                <input
                  type="text"
                  className="px-3 py-2 w-100"
                  name="lastname"
                  placeholder="Nhập tên"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  id=""
                />
                {formik.errors.lastname && (
                  <p className="text text-danger error-message">
                    {formik.errors.lastname}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <p className="text fs-6 text-left fw-bolder ">
                  Email<span className="text text-danger">*</span>
                </p>
                <input
                  type="text"
                  className="px-3 py-2 w-100"
                  name="email"
                  placeholder="Nhập email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id=""
                />
                {formik.errors.email && (
                  <p className="text text-danger error-message">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <p className="text fs-6 text-left fw-bolder ">
                  Mật khẩu<span className="text text-danger">*</span>
                </p>
                <input
                  type="password"
                  className="px-3 py-2 w-100"
                  name="password"
                  placeholder="Nhập mật khẩu"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  id=""
                />
                {formik.errors.password && (
                  <p className="text text-danger error-message">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <p className="text fs-6 text-left fw-bolder ">
                  Nhập lại mật khẩu<span className="text text-danger">*</span>
                </p>
                <input
                  type="password"
                  className="px-3 py-2 w-100"
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  id=""
                />
                {formik.errors.confirmPassword && (
                  <p className="text text-danger error-message">
                    {formik.errors.confirmPassword}
                  </p>
                )}
              </div>
              <Button css={"red-white my-3"} type={"submit"}>
                Lưu
              </Button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      )}
    </Fragment>
  );
}

export default Register;
