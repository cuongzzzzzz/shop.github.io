import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Features from "../../components/Features/Features";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Section from "../../components/Section/Section";
import Shortcut from "../../components/Shortcut/Shortcut";

import NewsSection from "../../components/NewsSection/NewsSection";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/productSlice";
function Home() {
  // const [data, setData] = useState([]);
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
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
  // const getData = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8800/api/v2/product");
  //     const data = res.data;
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const getCategories = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8800/api/v2/category");
  //     const data = res.data;
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   const data = getData();
  //   data.then((res) => {
  //     setData(res);
  //     dispatch(add({ data: res }));
  //   });
  //   const categories = getCategories();
  //   categories.then((res) => {
  //     setCategories(res);
  //   });
  // }, []);
  const data1 = [
    {
      discount: 600000,
      img: "/imgs/Slide/slider_1.webp",
      type: "Aspire",
      title: "Cyber S",
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
      img: "/imgs/Slide/slider_2.jpg",
      type: "Aspire",
      title: "Cyber S",
      rate: 4,
      typeId: 1,
      rateCount: 5,
      price: 415000,
      oldPrice: 1015000,
      categoryId: 2,

      id: 2,
    },
    {
      discount: 600000,
      img: "/imgs/Slide/slider_3.jpg",
      type: "Aspire",
      title: "Cyber S",
      star: 4,
      rateCount: 5,
      categoryId: 3,

      price: 415000,
      oldPrice: 1015000,
      id: 3,
    },
  ];

  return (
    <div className="w-100">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        transitionTime={1000}
        interval={2000}
      >
        {data1.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img} alt="img" />
            </div>
          );
        })}
      </Carousel>
      <Features />
      <Section data={data} filter={false} pageTitle="Page Title" />
      <Section data={data} filter={categories} pageTitle="Page Title" />
      <Section data={data} filter={categories} pageTitle="Page Title" />
      <Shortcut />
      <NewsSection pageTitle={"New and Knowledge"} />
    </div>
  );
}

export default Home;
