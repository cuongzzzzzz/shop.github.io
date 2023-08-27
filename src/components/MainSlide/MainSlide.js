import style from "./MainSlide.module.scss";
function MainSlide({ item }) {
  return (
    <div className="contaienr-fluid myClass">
      <img src={item.img} className="w-100" />
    </div>
  );
}

export default MainSlide;
