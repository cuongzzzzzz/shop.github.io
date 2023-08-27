import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders/Orders.js";
import Address from "./pages/Address/Address.js";
import ChangePassword from "./pages/ChangePassword/ChangePassword.js";
import Contact from "./pages/Contact/Contact.js";
import News from "./pages/News/News.js";
import Register from "./pages/Register/Register.js";
import Wish from "./pages/Orders/Orders.js";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Category from "./pages/Category/Category";
import CartPage from "./pages/cart/CartPage";
import Checkout from "./pages/checkout/Checkout";

const routers = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/product/:product",
    element: ProductDetail,
  },
  {
    path: "/account",
    element: Account,
  },
  {
    path: "account/address",
    element: Address,
  },
  {
    path: "/account/changepassword",
    element: ChangePassword,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/news",
    element: News,
  },
  {
    path: "/account/orders",
    element: Orders,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/account/wishlist",
    element: Wish,
  },
  {
    path: "/:category",
    element: Category,
  },
  {
    path: "/cart",
    element: CartPage,
  },
  {
    path: "/checkout",
    element: Checkout,
  },
];

export default routers;
