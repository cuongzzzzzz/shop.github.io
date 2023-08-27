import "./Section.scss";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
function Section({ data, slidesPerView, pageTitle, filter, filterProps }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const filterData = selectedCategory
    ? data.filter((item) => item.typeId === selectedCategory)
    : data;
  console.log(filterData);
  return (
    <div className="col-12">
      <div className="row mx-0 d-flex justify-content-center">
        <div className="col-10">
          <div className="row">
            {" "}
            <p className="my-section-title fs-3 col-4">{pageTitle}</p>
            <div className="col-5"></div>
            <div className="col-3 d-flex justify-content-end p-3">
              <button type="button" className="btn btn-dark">
                Xem them >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 d-flex justify-content-center ">
        {filter && (
          <div className="col-10">
            <div className="my-filter d-flex justify-content-start my-3 mx-0">
              {filter?.map((item, index) => {
                return (
                  <div key={index} className="my-filter-group">
                    <span
                      className={
                        selectedCategory === item.categoryId
                          ? "text text-dark fw-bold"
                          : "text text-dark"
                      }
                      role="button"
                      onClick={() => {
                        setSelectedCategory(item.categoryId);
                      }}
                    >
                      {item.categoryName}
                    </span>
                    <span className="mx-3 text-secondary my-splash">/</span>
                  </div>
                );
              })}
            </div>{" "}
          </div>
        )}
        <div className="col-6"></div>
      </div>
      <div className="row mx-0 d-flex justify-content-center ">
        <div className="col-10 ">
          {filterData.length > 0 ? (
            <div className="row d-flex row-cols-4">
              {filterData.map((item, index) => (
                <div className="col d-flex justify-content-center" key={index}>
                  {" "}
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text text-dark fs-4"> Không có sản phẩm phù hợp</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
