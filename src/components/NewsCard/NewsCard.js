import "./NewsCard.scss";
function NewsCard({ item }) {
  return (
    <div className="card ">
      <img className="card-img-top w-100" src="/imgs/product/1.webp" alt="Title" />
      <div className="card-body">
        <p className="text text-dark ">19 - 06 - 2023</p>
        <h4 className="card-title">So sánh Gotek và Dot Switch</h4>
        <div className="row mt-3">
          <p className="card-text my-author col-6">Admin the-vapist</p>
          <p className="card-text my-view col-6">Lượt xem: 267</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
