import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";
const Slide = ({ data, slidesPerView, spaceBetween }) => {
  return (
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView}>
      {data?.map((item, index) => {
        return (
          <SwiperSlide className="d-flex justify-content-center" key={index}>
            <ProductCard item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slide;
