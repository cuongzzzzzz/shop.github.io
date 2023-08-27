import { Link } from "react-router-dom";
import style from "./Menu.module.scss";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { remove, addOne, minusOne } from "../../redux/cartSlice.js";

function Menu({
  showMenu,
  showCart,
  showPersonal,
  setShowCart,
  setShowMenu,
  setShowPersonal,
}) {
  const data = useSelector((state) => state.cart);
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
    <div
      className={style.container}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {
        <div className={style.modalLayer}>
          {showMenu && (
            <div
              className={style.menu}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className={style.category}>
                <Link className={style.link} to="/special-sale">
                  SPECIAL SALE
                </Link>
                <div className={style.link}>
                  VAPE DEVICE
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Link className={style.subLink} to="/boxd-evice">
                      BOX DEVICE
                    </Link>
                    <Link className={style.subLink} to="/boro-device">
                      BORO DEVICE
                    </Link>
                  </div>
                </div>
                <div className={style.link}>
                  VAPE ATTIES
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Link className={style.subLink} to="/rba">
                      RBA
                    </Link>
                    <Link className={style.subLink} to="/rta">
                      RTA
                    </Link>
                    <Link className={style.subLink} to="/rda">
                      RDA
                    </Link>
                  </div>
                </div>
                <div className={style.link}>
                  E LIQUID
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Link className={style.subLink} to="/freebase">
                      FREEBASE
                    </Link>
                    <Link className={style.subLink} to="/salt-inc">
                      SALT NIC
                    </Link>
                  </div>
                </div>
                <div className={style.link}>
                  POD SYSTEM
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Link className={style.subLink} to="/pod-system">
                      POD SYSTEM
                    </Link>
                    <Link className={style.subLink} to="/dispossable-pod">
                      DISPOSSABLE POD
                    </Link>
                  </div>
                </div>
                <div className={style.link}>
                  ACCESSORIES
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Link className={style.subLink} to="/phu-kien-pod-system">
                      PHỤ KIỆN POD SYSTEM
                    </Link>
                    <Link className={style.subLink} to="/phu-kien-vape">
                      PHỤ KIỆN VAPE
                    </Link>
                    <Link className={style.subLink} to="/driptip">
                      DRIPTIP
                    </Link>
                    <Link className={style.subLink} to="/pin">
                      PIN
                    </Link>
                    <Link className={style.subLink} to="/orthers">
                      ORTHERS
                    </Link>
                  </div>
                </div>
              </div>
              <div className={style.contact_group}>
                <Link className={style.link} to="/news">
                  NEWS
                </Link>
                <Link className={style.link} to="/contact">
                  CONTACT
                </Link>
                <Link className={style.link} to="/jobs">
                  JOBS
                </Link>
              </div>
            </div>
          )}
          {showCart && (
            <div
              className={style.cart_wrapper}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className={style.product_wrapper}>
                {data.products &&
                  data.products.map((item) => (
                    <Cart
                      item={item}
                      handleRemove={handleRemove}
                      handleMinusOne={handleMinusOne}
                      handleAddOne={handleAddOne}
                    />
                  ))}
                {data.products.length == 0 && (
                  <p className="mx-3">no product</p>
                )}
              </div>
              <div className={style.action_group}>
                <div className={style.total_group}>
                  <p>Total</p>
                  <p>{data.total}</p>
                </div>
                <Link
                  to="/cart"
                  onClick={() => {
                    setShowCart(false);
                    setShowMenu(false);
                    setShowPersonal(false);
                  }}
                >
                  <button type="button" className="btn btn-outline-primary">
                    Purchase
                  </button>
                </Link>
              </div>
            </div>
          )}

          {showPersonal && (
            <div
              className={style.personal}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className={style.category}>
                <Link className={style.link} to="/special-sale">
                  Thông tin tài khoản
                </Link>
                <Link className={style.link} to="/vape-device">
                  Sản phẩm yêu thích
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></div>
                </Link>
                <Link className={style.link} to="/vape-atties">
                  Lịch sử mua hàng
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></div>
                </Link>
                <Link className={style.link} to="/e-liquid">
                  Đổi mật khẩu
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></div>
                </Link>
                <Link className={style.link} to="/pod-system">
                  Sổ địa chỉ
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></div>
                </Link>
                <Link className={style.link} to="/login">
                  Đăng nhập
                  <div
                    className={style.subMenu}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></div>
                </Link>
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default Menu;
