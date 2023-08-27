import { Star } from "@mui/icons-material";
import style from "./ProductCard.module.scss";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const star = [false, false, false, false, false];
  for (let i = 0; i < item.rate; i++) {
    star[i] = true;
  }

  return (
    <div className={style.container}>
      <div className={style.discount}>-{item.oldPrice - item.price}</div>
      <Link to="/product/:product">
        <div className={style.product_img}>
          <img src={item.img} alt="dasd " />
        </div>
      </Link>
      <div className={style.detail}>
        <div className={style.name_group}>
          <p className={style.type}>{item.title}</p>
          <Link to="/product/:product" className={style.my_link}>
            <p className={style.title}>{item.name}</p>
          </Link>
        </div>

        <div className={style.rate}>
          {star.map((item, index) => {
            if (item) {
              return <Star color="warning" key={index} />;
            } else {
              return <Star key={index} />;
            }
          })}
          <span className={style.rate_count}>({item.rateCount})</span>
        </div>
        <div className={style.price_group}>
          <p className={style.price}>{item.price}</p>
          <p className={style.old_price}>{item.oldPrice}</p>
        </div>
      </div>

      <Button
        variant="outlined"
        className={style.btn}
        onClick={(e) => {
          dispatch(add({ id: item.id }));
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
