import { Fragment, useState } from "react";
import "./Category.scss";
import Banner from "../../components/Banner/Banner";
import { Circle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

function Category() {
  const [category, setCategory] = useState(1);
  const path = useParams();
  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState("asc");

  // const data = [
  //   {
  //     quantity: 5,
  //     id: 1,
  //     catagoryName: "Vape attie",

  //     navbar: [
  //       {
  //         quantity: 2,
  //         name: "RTA",
  //       },
  //       {
  //         quantity: 3,
  //         name: "RTB",
  //       },
  //     ],
  //   },
  //   {
  //     quantity: 15,
  //     id: 2,
  //     catagoryName: "Vape pod",
  //   },
  //   {
  //     quantity: 5,
  //     id: 3,
  //     catagoryName: "Vape hihi",
  //   },
  //   {
  //     quantity: 5,
  //     id: 4,
  //     catagoryName: "Vape haha",
  //   },
  // ];
  const data = [
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/1.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 1,
    },
    {
      discount: 600000,
      img: "/imgs/product/2.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 2,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,
      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/product/3.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 3,
      id: 3,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 4,
      typeId: 3,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 4,
      id: 4,
    },
    {
      discount: 600000,
      img: "/imgs/product/4.webp",
      title: "Aspire",
      name: "Cyber S",
      rate: 5,
      typeId: 4,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 1,
      id: 4,
    },
  ];
  const categories = [
    {
      categoryId: 1,
      categoryName: "Category 1",
    },
    {
      categoryId: 2,
      categoryName: "Category 2",
    },
    {
      categoryId: 3,
      categoryName: "Category 3",
    },
    {
      categoryId: 4,
      categoryName: "Category 4",
    },
    {
      categoryId: 5,
      categoryName: "Category 5",
    },
    {
      categoryId: 6,
      categoryName: "Category 6",
    },
  ];
  const filterData = data.filter((item) => item.categoryId === category);
  return (
    <Fragment>
      <Banner pageTitle={"category"}></Banner>
      <div className="row mx-0 d-flex justify-content-center my-3">
        <div className="col-10">
          <div className="row mx-0">
            <div className="col-3">
              <p className="text fs-4 fw-bold">Categoryname</p>
              <div className="my-category-filter px-3 py-2 bg-dark rounded-3">
                <p className="text fs-5 fw-bold text-light my-filter-title mx-0">
                  Danh mục sản phẩm
                </p>
                <ul className="my-nav px-0 d-flex flex-column">
                  {categories.map((item, index) => {
                    const url = item.categoryName.split(" ").join("");

                    return (
                      <li
                        className="nav-item text-light text d-flex  flex-column gap-2 my-2"
                        key={index}
                        onClick={() => {
                          setCategory(item.categoryId);
                        }}
                      >
                        <div className="link-group">
                          <Circle className="dot" />{" "}
                          {path.category === url ? (
                            <Link
                              to={`/${url}`}
                              className="active-category-link"
                            >
                              {item.categoryName}
                            </Link>
                          ) : (
                            <Link to={`/${url}`} className="my-category-link">
                              {item.categoryName}
                            </Link>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-9">
              {" "}
              <div className="filter-bar d-flex justify-content-between">
                <p className="text text-secondary d-flex align-items-center">
                  Hiển thị tất cả có {filterData.length} kết quả
                </p>
                <div className="filter-group d-flex align-items-center">
                  <p className="text text-secondary mr-1">Sắp xếp:</p>
                  <div className="d-flex align-items-center justify-content-center">
                    {
                      <p
                        className="text text-secondary filter-box text-center "
                        onClick={() => {
                          setShowFilter(true);
                        }}
                      >
                        {sort === "asc"
                          ? "Price (asc)"
                          : sort === "desc"
                          ? "Price (desc)"
                          : sort === "oldest"
                          ? "Oldest"
                          : "Newest"}
                      </p>
                    }
                    {showFilter && (
                      <div className=" shadow p-2 mb-5 bg-body flex-column d-flex my-filter-box">
                        <p
                          className="text text-secondary my-filter"
                          onClick={() => {
                            setShowFilter(false);
                            setSort("asc");
                          }}
                        >
                          Price(asc)
                        </p>
                        <p
                          className="text text-secondary my-filter"
                          onClick={() => {
                            setShowFilter(false);
                            setSort("desc");
                          }}
                        >
                          Price(desc)
                        </p>
                        <p
                          className="text text-secondary my-filter"
                          onClick={() => {
                            setShowFilter(false);
                            setSort("oldest");
                          }}
                        >
                          Oldest
                        </p>
                        <p
                          className="text text-secondary my-filter"
                          onClick={() => {
                            setShowFilter(false);
                            setSort("newest");
                          }}
                        >
                          Newest
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-category-product row row-cols-3">
                {filterData.map((item, index) => (
                  <ProductCard item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Category;
