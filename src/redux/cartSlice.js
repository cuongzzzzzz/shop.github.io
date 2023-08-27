import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

const data1 = [
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
const data = data1.map((item) => ({ ...item, quantity: 1 }));
const initState = {
  products: [],
  total: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    add: (state, action) => {
      const addedId = action.payload.id;
      const addedProduct = data.find((item) => item.id === addedId);
      console.log(addedProduct);

      const existedItem = state.products.find((item) => item.id === addedId);
      if (!existedItem) {
        state.products.push(addedProduct);

        state.total += addedProduct.price;
        state.totalQuantity += 1;
      } else {
        existedItem.quantity += 1;
        state.total += existedItem.price;
        state.totalQuantity += 1;
      }
    },
    remove: (state, action) => {
      const deleteId = action.payload.id;
      let deleteProduct;
      state.products = state.products.filter((product) => {
        if (deleteId === product.id) {
          deleteProduct = product;
        }
        return product.id !== deleteId;
      });
      state.totalQuantity -= deleteProduct.quantity;
      state.total -= deleteProduct.quantity * deleteProduct.price;
    },
    addOne: (state, action) => {
      const chooseId = action.payload.id;

      const chooseProduct = state.products.find(
        (product) => product.id === chooseId
      );
      chooseProduct.quantity += 1;
      state.totalQuantity += 1;
      state.total += chooseProduct.price;
    },
    minusOne: (state, action) => {
      const chooseId = action.payload.id;

      const chooseProduct = state.products.find(
        (product) => product.id === chooseId
      );
      chooseProduct.quantity -= 1;
      state.totalQuantity -= 1;
      state.total -= chooseProduct.price;
    },
  },
});
export const { add, remove, addOne, minusOne } = cartSlice.actions;
export default cartSlice.reducer;
