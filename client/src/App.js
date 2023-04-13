import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
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
import { getToken } from "./helpers";
import Profile from "./scenes/profile/Profile";
import Account from "./scenes/account/Account";

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
            <Route path="/catalog" element={<Catalog />} />
            <Route
              path="/profile"
              element={getToken() ? <Profile /> : <Navigate to="/signin" />}
            />
            <Route
              path="/account"
              element={getToken() ? <Account /> : <Navigate to="/signin" />}
            />
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
