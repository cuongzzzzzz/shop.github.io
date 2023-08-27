import "./NewsSection.scss";
import NewsCard from "../NewsCard/NewsCard";
function NewsSection({ data, slidesPerView, pageTitle, filter, filterProps }) {
  return (
    <div className="col-12">
      <div className="row mx-0 my-3">
        <p className="section-title h1 col-4 ">{pageTitle}</p>
        <div className="col-4"></div>
        <div className="col-4 d-flex justify-content-end p-3">
          <button type="button" className="btn btn-dark">
            Xem them >
          </button>
        </div>
      </div>
      <div className="row">
        {filter && (
          <div className="my-filter col-6 my-3">
            <span className="text-dark text-large">category</span>{" "}
            <span className="mx-1 text-dark">/</span>
            <span className="text-dark text-large">category</span>{" "}
            <span className="mx-1 text-dark">/</span>
            <span className="text-dark text-large">category</span>{" "}
            <span className="mx-1 text-dark">/</span>
            <span className="text-dark text-large">category</span>{" "}
            <span className="mx-1 text-dark">/</span>
            <span className="text-dark text-large">category</span>{" "}
            <span className="mx-1 text-dark">/</span>
            <span className="text-dark text-large">category</span>{" "}
          </div>
        )}
        <div className="col-6"></div>
      </div>
      <div className="row ">
        <div className="w-100 d-flex justify-content-center">
          <div className="col-11 ">
            <div className="row">
              <div className="col-4">
                <NewsCard />
              </div>
              <div className="col-4">
                <NewsCard />
              </div>
              <div className="col-4">
                <NewsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
