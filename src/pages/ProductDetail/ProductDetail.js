import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner/Banner";
import { Star } from "@mui/icons-material";

import "./ProductDetail.scss";
import { HeartBroken } from "@mui/icons-material";
import { useRef, useState } from "react";
import Section from "../../components/Section/Section.js";
import { useSelector } from "react-redux";
function ProductDetail() {
  const [showTab, setShowTab] = useState(true);
  const isFixed = false;
  const desRef = useRef();
  const data1 = useSelector((state) => state.products);
  const handleShow = () => {
    setShowTab(!showTab);
  };
  const star = [true, true, true, true, false];
  const data = [
    "/imgs/ProductDetail/dotmod-dotpod-s-black.webp",
    "/imgs/ProductDetail/dotmod-dotpod-s-black.webp",
    "/imgs/ProductDetail/dotmod-dotpod-s-black.webp",
    "/imgs/ProductDetail/dotmod-dotpod-s-black.webp",
    "/imgs/ProductDetail/dotmod-dotpod-s-black.webp",
  ];
  return (
    <div className="d-flex justify-content-center flex-column align-items-center w-100">
      <Banner pageTitle={"ASPIRE GOTEK X FROSTED"} />
      <div className="row mx-0 col-9 my-5">
        <div className="col-6">
          <div className="my-position">
            <Carousel>
              {data.map((item, index) => (
                <div key={index}>
                  <img src={item} alt={index} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="col-6 pl-5 overflow-hidden h-100" ref={desRef}>
          <div className="">
            <p className="my-category text fs-5 fw-bold">Category</p>
            <p className="my-category text-dark text fs-4 fw-bold">
              Aventador Stealth Box DNA60
            </p>
            <div className="price-group d-flex gap-5">
              <p className="current-price text fs-4 text-danger fw-bold">
                8.000.000đ{" "}
              </p>
              <p className="old-price text fs-4 text-secondary text-decoration-line-through">
                10.000.000đ
              </p>
            </div>
            <div className="my-3 row">
              <div className="col-3 d-flex align-items-center">
                <label className="form-label fs-6">Gotek pod</label>
              </div>
              <div className="col-9">
                <select className="form-select form-select-lg" name="pod" id="">
                  <option value="0">Select one</option>
                  <option value="30">30ml</option>
                  <option value="50">50ml</option>
                </select>
              </div>
            </div>
            <div className="my-3 row">
              <div
                className={
                  isFixed
                    ? "col-3 d-flex is-fix align-items-center"
                    : "col-3 d-flex align-items-center"
                }
              >
                <label className="form-label fs-6">Gotek pod</label>
              </div>
              <div className="col-9">
                <select
                  className="form-select form-select-lg"
                  name="type"
                  id="type"
                >
                  <option value="0">Select one</option>
                  <option value="">empty pod(1pc)</option>
                </select>
              </div>
            </div>
            <div className="my-3 row">
              <div className="col-3 d-flex align-items-center">
                <label className="form-label fs-6">Gotek pod</label>
              </div>
              <div className="col-9 pl-4">
                <div className="row">
                  <button type="button" name="" id="" className="my-btn">
                    -
                  </button>
                  <button
                    type="button"
                    name=""
                    id=""
                    className="quantity-btn"
                    disabled
                  >
                    5{" "}
                  </button>
                  <button type="button" name="" id="" className="my-btn">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="my-3 row d-flex justify-content-between mx-0">
              <button type="button" className="my-add-cart-btn">
                ADD TO CART
              </button>

              <button type="button" className="my-add-wish-btn">
                <HeartBroken />
              </button>

              <button type="button" className="my-buy-btn">
                BUY
              </button>
            </div>
            <div className="my-3 row mx-0">
              <div className="bg-light rounded-3 py-3">
                <p className="fs-6">Chính sách ship hàng The Vapist:</p>

                <ul className="pl-3">
                  <li>
                    FREESHIP nhanh ngoại thành HN & HCM qua CPN từ 350.000đ
                  </li>
                  <li>FREESHIP nhanh nội thành từ 2.000.000đ</li>
                  <li>Hỗ trợ 30k ship nhanh nội thành từ 100.000đ</li>
                  <li>Hỗ trợ 30k ship nhanh nội thành từ 100.000đ</li>
                  <li>Hỗ trợ 30k ship nhanh nội thành từ 100.000đ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 col-9 product-detail-group">
        <div className=" col-12">
          <div className="option-title row">
            <div className="col-12">
              <span
                className={
                  showTab
                    ? "text  fs-5 fw-bold mr-3 my-tab active"
                    : "text  fs-5 fw-bold mr-3 my-tab"
                }
                onClick={handleShow}
                role="button"
              >
                THÔNG TIN SẢN PHẨM
              </span>
              <span
                className={
                  !showTab
                    ? "text  fs-5 fw-bold my-tab active"
                    : "text  fs-5 fw-bold my-tab"
                }
                onClick={handleShow}
                role="button"
              >
                ĐÁNH GIÁ (1)
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {showTab ? (
                <>
                  <p className="product-detail-title text text-center fs-1 text-dark fw-bold my-3">
                    Arti Mod DNA60 by Articulate Mechanics
                  </p>
                  <div className="product-detail-title detail">
                    <p>
                      Năm 2016, Fluid mods cho ra mắt con mod DNA40 mà có thể
                      nói đến tận ngày hôm nay, rất nhiều người vẫn tìm kiếm
                      trong vô vọng. Những người chơi thích kiểu dáng này bắt
                      buộc phải chấp nhận chơi iStick Pico, là 1 bản nhái theo
                      của TQ nhưng nhái một cách khá thô thiển, và dĩ nhiên
                      không sử dụng chip DNA.
                    </p>
                    <p>
                      Mãi cho đến 2021, một người bạn của chủ hãng Fluid mods
                      quyết định tận dụng thiết kế nêu trên thay vì bỏ phí nó.
                      Arti mod ra đời dựa trên 90% của Fluid mods, đồng thời đã
                      có sự đột phá về hoàn thiện cũng như chất liệu. Đặc biệt,
                      Arti mod sử dụng chip set DNA60, một con chip có độ ổn
                      định gần như tốt nhất thời điểm hiện tại, giá thành của
                      con chip này cũng không hề rẻ.
                    </p>
                    <p>
                      Nhờ thiết kế tinh giản và kích thước nhỏ gọn, Arti mod nằm
                      gọn gàng và không chiếm quá nhiều diện tích trong lòng bàn
                      tay hay thậm chí là bỏ túi. Về khía cạnh này, các bạn có
                      thể xem ảnh bên trên hoặc trong bài viết chi tiết tại ĐÂY.
                    </p>
                    <p>
                      Arti có thể kết hợp với những dòng RTA/RDA nhỏ gọn để có
                      thể tối ưu hoá thiết kế của nó. Tôi có một vài cái tên cho
                      các bạn đây:
                    </p>
                    <p>
                      - Neeko RTA: Một chiếc RTA (Tank) cực rẻ so với hiệu năng
                      mà nó mang lại. Đồng thời thiết kế của Neeko không quá dài
                      và đường kính chỉ 22mm. Đây là chiếc RTA có tính tuỳ biến
                      cao thứ 2 chỉ sau EDGE RTA do Steam Tuners sản xuất.
                    </p>
                    <p>
                      - Bishop RTA: Dòng tank thuần tuý để sử dụng MTL. Thiết kế
                      gió bí phù hợp với những cá nhân ưu thích hương vị bánh
                      béo, cafe và đặc biệt là thuốc lá (blend). Dòng RTA này
                      đặc biệt được chúng tôi đưa về với dung tích 2ml thay vì
                      4ml để giảm độ cao xuống mức tối đa.
                    </p>
                    <p>
                      Các bạn có thể trực tiếp ấn thẳng vào tên để xem ảnh chi
                      tiết.
                    </p>
                    <p>Phần body (thân máy) của Arti có 3 màu:</p>{" "}
                    <p>
                      {" "}
                      - White: Đây là màu duy nhất sử dụng chất liệu nhựa chịu
                      nhiệt (White Delrin) và đồng thời cũng là phiên bản màu
                      nhẹ nhất trong cả 3 phiên bản.
                    </p>{" "}
                    <p>
                      - Black: Phần thân bằng nhôm, tuy có nặng hơn phiên bản
                      White một chút nhưng không quá nhiều. Cá nhân tôi đánh giá
                      cảm giác cầm trên tay đầm hơn. Tuy nhiên nó cũng phụ thuộc
                      vào sở thích riêng của các bạn.
                    </p>
                    <p>
                      - Stainless Steel: Đây là tên màu riêng do hãng đặt nhưng
                      cá nhân tôi hay gọi màu này là màu Silver vì thật sự đây
                      mới đúng chất màu của nó. Một thứ màu của kim loại nhưng
                      không trơn nhẵn như bề mặt của 2 miếng plate SS mà trái
                      lại, nó hơi sần khi sờ vào và lấp lánh sắc bạc.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="review-top d-flex justify-content-between align-items-center my-5 border-bottom border-1 pb-3">
                    <div className="rate d-flex align-items-center">
                      {star.map((item, index) => {
                        if (item) {
                          return <Star color="warning" key={index} />;
                        } else {
                          return <Star key={index} />;
                        }
                      })}
                      <span className="m-3">1 danh gia</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      Viết đánh giá
                    </button>
                  </div>
                  <div className="review-body mb-5">
                    <div class="card my-card">
                      <div className="card-header">
                        <p className="username text fw-bold">siu</p>
                        <p className="create-day text text-secondary fs-6">
                          19/7/2023
                        </p>
                        <div className="rate">
                          {" "}
                          {star.map((item, index) => {
                            if (item) {
                              return <Star color="warning" key={index} />;
                            } else {
                              return <Star key={index} />;
                            }
                          })}
                        </div>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">
                          link dẫn đến các loại RTA lỗi rồi
                        </h4>
                        <p class="card-text reply">
                          Đã trả lời: Em chào anh, sáng nay em có ghi nhận một
                          chút trục trặc về hiển thị tại website, hiện tại
                          website đã hiển thị lại bình thường rồi anh nhé. Cảm
                          ơn anh đã bỏ thời gian ra đánh giá và thông tin giúp
                          bên em ạ{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  z
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 col-10">
        <Section data={data1} filter={false} pageTitle={"RELATE PRODUCT"} />
      </div>
    </div>
  );
}

export default ProductDetail;
