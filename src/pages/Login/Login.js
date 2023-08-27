import { Fragment, useRef, useState } from "react";
import "./Login.scss";
import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
function Login() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const phoneRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [phoneErr, setPhoneErr] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [userInfo, setUserInfo] = useState({});

  let phoneNumberPattern =
    /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-9])[0-9]{7}$/;
  let regexPattern = /.*/;
  const checkErr = (inputRef, pattern, errMessage, setErr) => {
    if (inputRef.current.value == "") {
      setErr("Vui lòng nhập trường này");
    } else {
      if (pattern.test(inputRef.current.value)) {
        setErr("");
      } else {
        setErr(errMessage);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isShowLogin) {
      checkErr(
        phoneRef,
        phoneNumberPattern,
        "Số điện thoại không hỗ trợ",
        setPhoneErr
      );
    } else {
      checkErr(usernameRef, regexPattern, "", setUsernameErr);
      checkErr(passwordRef, regexPattern, "", setPasswordErr);
    }
  };
  return (
    <Fragment>
      <Banner pageTitle={"ĐĂNG NHẬP TÀI KHOẢN"} />
      {!isShowLogin && (
        <div className="row mx-0 my-login">
          <div className="col-4"></div>
          <div className="col-4 my-5">
            <p className="text text-center  h5 mb-3">NHẬP SỐ ĐIỆN THOẠI</p>
            <p className="text fs-6 text-left ">
              Số điện thoại/Email<span className="text text-danger">*</span>
            </p>
            <form method="post">
              <div className="mb-3">
                <input
                  type="text"
                  className="px-3 py-2 w-100"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  id=""
                  ref={phoneRef}
                />
                <p className="text text-danger error-message">{phoneErr}</p>
              </div>
              <Button
                css={"red-white my-3"}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Đăng nhập
              </Button>
            </form>
            <p
              className="text text-left my-switch"
              onClick={() => {
                setIsShowLogin(!isShowLogin);
              }}
            >
              Đăng nhập với mật khẩu?
            </p>
            <p className="text text-left ">
              Bạn chưa có tài khoản
              <Link to={"/register"}><span className="text my-switch mx-3">Đăng ký tại đây</span></Link>
            </p>
            <div className="my-action-group w-100 mt-5">
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
      {isShowLogin && (
        <div className="row mx-0 my-login">
          <div className="col-4"></div>
          <div className="col-4 my-5">
            <p className="text text-center  h5 mb-3">ĐĂNG NHẬP</p>

            <form method="post">
              <div className="mb-3">
                <div className="form-group">
                  <p className="text fs-6 text-left ">
                    Số điện thoại/Email
                    <span className="text text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    className="px-3 py-2 w-100"
                    name="username"
                    placeholder="Nhập số điện thoại"
                    id=""
                    ref={usernameRef}
                  />
                  <p className="text text-danger error-message">
                    {usernameErr}
                  </p>
                </div>
                <div className="form-group">
                  <p className="text fs-6 text-left ">
                    Mật khẩu<span className="text text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    className="px-3 py-2 w-100"
                    name="password"
                    placeholder="Nhập số điện thoại"
                    id=""
                    ref={passwordRef}
                  />
                  <p className="text text-danger error-message">
                    {passwordErr}
                  </p>
                </div>
                <p className="text text-left my-switch">Quên mật khẩu?</p>
              </div>
              <Button
                css={"red-white my-3"}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Đăng nhập
              </Button>
            </form>
            <p
              className="text text-left my-switch"
              onClick={() => {
                setIsShowLogin(!isShowLogin);
              }}
            >
              Đăng nhập với SMS
            </p>
            <p className="text text-left ">
              Bạn chưa có tài khoản
              <span className="text my-switch mx-3">Đăng ký tại đây</span>
            </p>
            <div className="my-action-group w-100 mt-5">
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
    </Fragment>
  );
}

export default Login;
