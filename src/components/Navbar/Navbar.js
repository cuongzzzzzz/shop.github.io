import style from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";
function Navbar() {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleMouseEnter = (e) => {
    setShow(true);
  };
  const handleMouseLeave = (e) => {
    setShow(false);
  };
  const handleShowMenu = (e) => {
    setShowMenu(!showMenu);
    setShowCart(false);
    setShowPersonal(false);
  };
  const handleShowCart = (e) => {
    setShowCart(!showCart);
    setShowMenu(false);

    setShowPersonal(false);
  };
  const handleShowPersonal = (e) => {
    setShowPersonal(!showPersonal);
    setShowCart(false);
    setShowMenu(false);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo_group}>
          <div className={style.menu_icon}>
            {!showMenu && (
              <MenuIcon className={style.icon} onClick={handleShowMenu} />
            )}
            {showMenu && (
              <CloseIcon className={style.icon} onClick={handleShowMenu} />
            )}
          </div>
          <div className={style.logo}>
            <img src="/imgs/header/logo.webp" />
          </div>
        </div>
        <div className={style.actions}>
          <div className={style.search_group}>
            <SearchIcon
              className={style.icon}
              onMouseEnter={(e) => handleMouseEnter(e)}
            />
            <input placeholder="Tìm kiếm sản phẩm..." type="text" required />
          </div>
          <div className={style.bag}>
            <ShoppingBagIcon className={style.icon} onClick={handleShowCart} />
            <div className={style.noti}>{totalQuantity}</div>
          </div>
          <PortraitIcon className={style.icon} onClick={handleShowPersonal} />
        </div>
      </div>
      {(showMenu || showCart || showPersonal) && (
        <Menu
          showMenu={showMenu}
          showCart={showCart}
          showPersonal={showPersonal}
          setShowCart={setShowCart}
          setShowMenu={setShowMenu}
          setShowPersonal={setShowPersonal}
        />
      )}
    </div>
  );
}

export default Navbar;
