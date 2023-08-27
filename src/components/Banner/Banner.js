import style from "./Banner.module.scss";
function Banner({ pageTitle }) {
  return (
    <div className={style.container}>
      <div className={style.background}>
        <img src="/imgs/banner/bresscum.webp" />
      </div>
      <div className={style.page_info}>
        <p className={style.title}>{pageTitle}</p>
        <p className={style.pageLink}>{pageTitle}</p>
      </div>
    </div>
  );
}

export default Banner;
