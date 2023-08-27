import "./Features.scss";
function Features({ pageTitle }) {
  return (
    <div className="w-100 d-flex justify-content-spacebetween gap-3 px-3 my-4">
      <div className="features-img-wrapper rounded-4 w-100">
        <img className="w-100 " src="/imgs/features/img_bn_1.webp" />
      </div>
      <div className="features-img-wrapper rounded-4 w-100">
        <img className="w-100 " src="/imgs/features/img_bn_2.webp" />
      </div>
      <div className="features-img-wrapper rounded-4 w-100">
        <img className="w-100 " src="/imgs/features/img_bn_3.webp" />
      </div>
    </div>
  );
}

export default Features;
