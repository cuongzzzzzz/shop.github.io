import "./Address.scss";
import { Fragment, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Banner from "../../components/Banner/Banner";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../../components/Button/Button.js";
import axios from "axios";
function Address() {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [cityCode, setCityCode] = useState(1);
  const [districtCode, setDistrictCode] = useState(1);

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  useEffect(() => {
    const data = getCities();
    data.then((data) => {
      setCities(data);
    });
  }, []);
  useEffect(() => {
    const data = getDistricts(cityCode);
    data.then((data) => {
      setDistricts(data);
    });
  }, [cityCode]);
  useEffect(() => {
    const data = getWards(districtCode);
    data.then((data) => {
      setWards(data);
    });
  }, [districtCode]);
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

  const getCities = async () => {
    try {
      const res = await axios.get("https://provinces.open-api.vn/api/");

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const getDistricts = async (cityCode) => {
    try {
      const res = await axios.get(
        `https://provinces.open-api.vn/api/p/${cityCode}/?depth=2`
      );

      return res.data.districts;
    } catch (err) {
      console.log(err);
    }
  };
  const getWards = async (wardCode) => {
    try {
      const res = await axios.get(
        `https://provinces.open-api.vn/api/d/${wardCode}/?depth=2`
      );

      return res.data.wards;
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      district: "",
      ward: "",
      zipcode: "",
      isDefault: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Không để trống trường này"),
      phone: Yup.string()
        .required("Không để trống trường này")
        .matches(
          /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-9])[0-9]{7}$/,
          "Số điện thoại không được hỗ trợ"
        ),
      company: Yup.string().required("Không để trống trường này"),
      address: Yup.string().required("Không để trống trường này"),
      city: Yup.string().required("Không để trống trường này"),
      district: Yup.string().required("Không để trống trường này"),
      ward: Yup.string().required("Không để trống trường này"),
      zipcode: Yup.string()
        .required("Không để trống trường này")
        .matches(/^\d{5}$/, "zipcode không chính xác"),
    }),
    onSubmit: () => {
      //call api
    },
  });

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
                      path.pathname === item.link ? "text text-danger" : "text"
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
              <p className="text fs-5 mt-5 mb-3">SỔ ĐỊA CHỈ</p>
              <Button
                type={"button"}
                css="white-red-small"
                children={"Thêm địa chỉ"}
                onClick={handleShowModal}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="my-modal">
          <div className="my-modal-layer">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <form
                className="my-address-form col-6"
                method="post"
                onSubmit={formik.handleSubmit}
              >
                <div className="card">
                  <div className="card-header">
                    <p className="text fs-6 fw-bolder">THÊM ĐỊA CHỈ MỚI</p>
                  </div>
                  <div className="card-body">
                    <div className="my-input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      <label
                        className="text text-secondary my-address-label"
                        htmlFor="name"
                      >
                        Họ và tên
                      </label>
                      <p className="text text-danger">{formik.errors.name}</p>
                    </div>
                    <div className="my-input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                      <label
                        className="text text-secondary my-address-label"
                        htmlFor="phone"
                      >
                        Số diện thoại
                      </label>
                      <p className="text text-danger">{formik.errors.phone}</p>
                    </div>
                    <div className="my-input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        id="name"
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.company}
                      />
                      <label
                        className="text text-secondary my-address-label"
                        htmlFor="company"
                      >
                        Công ty
                      </label>
                      <p className="text text-danger">
                        {formik.errors.company}
                      </p>
                    </div>
                    <div className="my-input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        id="name"
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.address}
                      />
                      <label
                        className="text text-secondary my-address-label"
                        htmlFor="name"
                      >
                        Địa chỉ
                      </label>
                      <p className="text text-danger">
                        {formik.errors.address}
                      </p>
                    </div>

                    <div className="row">
                      <div className="my-input-group col-4">
                        <select
                          className="form-select form-select-lg"
                          name="city"
                          id=""
                          onChange={(e) => {
                            setCity(e.target.value);
                            setDistricts([]);
                            setWards([]);

                            setCityCode(
                              e.target.options[
                                e.target.selectedIndex
                              ].getAttribute("data-set")
                            );
                            formik.values.city = e.target.value;
                          }}
                        >
                          <option value={""}>Select one</option>
                          {cities?.map((item, index) => (
                            <option
                              value={item.name}
                              data-set={item.code}
                              key={index}
                            >
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <label
                          className="text text-secondary my-address-label-select"
                          htmlFor="name"
                        >
                          Tỉnh/ Thành phố
                        </label>
                        <p className="text text-danger">{formik.errors.city}</p>
                      </div>
                      <div className="my-input-group col-4">
                        <select
                          className="form-select form-select-lg"
                          name="district"
                          id=""
                          onChange={(e) => {
                            setDistrict(e.target.value);
                            setDistrictCode(
                              e.target.options[
                                e.target.selectedIndex
                              ].getAttribute("data-set")
                            );
                            formik.values.district = e.target.value;
                          }}
                        >
                          <option value={""}>Select one</option>
                          {districts?.map((item, index) => (
                            <option
                              value={item.name}
                              key={index}
                              data-set={item.code}
                            >
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <label
                          className="text text-secondary my-address-label-select"
                          htmlFor="name"
                        >
                          Quận/ Huyện
                        </label>
                        <p className="text text-danger">
                          {formik.errors.district}
                        </p>
                      </div>
                      <div className="my-input-group col-4">
                        <select
                          className="form-select form-select-lg"
                          name=""
                          id=""
                          onChange={(e) => {
                            setWard(e.target.value);
                            formik.values.ward = e.target.value;
                          }}
                        >
                          <option value={""}>Select one</option>
                          {wards?.map((item, index) => (
                            <option
                              value={item.name}
                              key={index}
                              data-set={item.code}
                            >
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <label
                          className="text text-secondary my-address-label-select"
                          htmlFor="name"
                        >
                          Xã/Phường
                        </label>
                        <p className="text text-danger">{formik.errors.ward}</p>
                      </div>
                    </div>
                    <div className="my-input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="zipcode"
                        id="name"
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.zipcode}
                      />
                      <label
                        className="text text-secondary my-address-label"
                        htmlFor="name"
                      >
                        Mã zip
                      </label>
                      <p className="text text-danger">
                        {formik.errors.zipcode}
                      </p>
                    </div>
                    <div className="my-checkbox">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="true"
                          id=""
                          name="isDefault"
                          onChange={(e) => {
                            formik.values.isDefault = e.target.checked;
                          }}
                        />
                        <label className="form-check-label" htmlFor="">
                          Đặt làm đại chỉ mặc định
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-end">
                    <button
                      className="btn btn-secondary mr-3"
                      onClick={handleShowModal}
                    >
                      Hủy
                    </button>
                    <button className="btn btn-primary">Thêm địa chỉ</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Address;
