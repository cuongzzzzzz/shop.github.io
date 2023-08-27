import { Fragment } from "react";
import "./Checkout.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
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

  return (
    <Fragment>
      <div className="row mx-0">
        <div className="col"></div>
        <form className="col-10">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col">
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
                </div>
                <div className="col">col2</div>
              </div>
            </div>
            <div className="col-4">col3</div>
          </div>
        </form>
        <div className="col"></div>
      </div>
    </Fragment>
  );
}

export default Checkout;
