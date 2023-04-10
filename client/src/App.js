import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import Subscribe from "./scenes/global/Subscribe";
import Catalog from "./scenes/productCatalog/Catalog";
import AuthProvider from "./components/AuthProvider";
import SignIn from "./scenes/SignIn";

// React Router can start from top of page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:itemId" element={<ItemDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<Confirmation />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Subscribe />
          <Footer />
          <CartMenu />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
