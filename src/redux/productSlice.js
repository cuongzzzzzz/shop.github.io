import { createSlice } from "@reduxjs/toolkit";

// const getData = async () => {
//   try {
//     const res = await axios.get("http://localhost:8800/api/v2/product");
//     const data = res.data;
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };
// const data1 = await getData();
const data = [
  {
    discount: 600000,
    img: "/imgs/product/1.webp",
    type: "Aspire",
    title: "Cyber S",
    star: 4,
    rateCount: 5,
    price: 415000,
    oldPrice: 1015000,
    id: 1,
  },
  {
    discount: 600000,
    img: "/imgs/product/2.webp",
    type: "Aspire",
    title: "Cyber S",
    star: 4,
    rateCount: 5,
    price: 415000,
    oldPrice: 1015000,
    id: 2,
  },
  {
    discount: 600000,
    img: "/imgs/product/3.webp",
    type: "Aspire",
    title: "Cyber S",
    star: 4,
    rateCount: 5,
    price: 415000,
    oldPrice: 1015000,
    id: 3,
  },
  {
    discount: 600000,
    img: "/imgs/product/4.webp",
    type: "Aspire",
    title: "Cyber S",
    star: 4,
    rateCount: 5,
    price: 415000,
    oldPrice: 1015000,
    id: 4,
  },
  {
    discount: 600000,
    img: "/imgs/product/4.webp",
    type: "Aspire",
    title: "Cyber S",
    star: 4,
    rateCount: 5,
    price: 415000,
    oldPrice: 1015000,
    id: 4,
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    add: (state, action) => {
      state = [...action.payload.data];
    },
  },
});

export const { add } = productSlice.actions;

export default productSlice.reducer;
