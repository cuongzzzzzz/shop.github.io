import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./DefaultLayout.module.scss";
import Banner from "../../components/Banner/Banner";
function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className={style.my_margin}></div>
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
