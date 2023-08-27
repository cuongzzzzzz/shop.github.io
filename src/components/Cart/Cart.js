import style from "./Cart.module.scss";
import CloseIcon from "@mui/icons-material/Close";

function Cart({ item, handleRemove, handleAddOne, handleMinusOne }) {
  return (
    <div className={style.product}>
      <a className={style.img_product} href="#">
        <img src={item.img} alt="" />
      </a>
      <div className={style.detail}>
        <a className={style.product_name} href="#">
          {item.title}
        </a>
        <p className={style.des}>{item.des} (1 pcs)</p>
        <p className={style.singlePrice}>{item.price}đ</p>
        <div className={style.option}>
          <button
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
          <button>{item.quantity}</button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddOne(item.id);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div
        className={style.close}
        onClick={(e) => {
          e.stopPropagation();
          handleRemove(item.id);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
}

export default Cart;
