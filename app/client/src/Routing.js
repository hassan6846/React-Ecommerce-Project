
//Imports 
import { React } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { CookieConsent } from "react-cookie-consent"
//components
import Home from "./pages/user/Home/Home";

//auth
import LoginPage from "./pages/user/Login/Login";
import SignupPage from "./pages/user/Register/Signup";
import ForgotPassword from "./pages/user/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/user/ResetPassword/ResetPassword";
//404
import ErrorPage from "./pages/user/404/ErrorPage";
//Shopping
import Products from "./pages/user/Shop/Products";
import Singleproduct from "./pages/user/ProductDetails/Singleproduct";
import Cart from "./pages/user/Cart/Cart";
//profile 
import ProfileOverView from "./pages/user/UserProfile/ProfileOverView";
import UserProfile from "./pages/user/UserProfile/UserProfile";
import UserAdressBook from "./pages/user/UserProfile/UserAdressBook";
import FaqPage from "./pages/user/Faqs/Faq";
import Contact from "./pages/user/UserProfile/Contact";
import Wishlists from "./pages/user/UserProfile/Wishlists";
import Order from "./pages/user/UserProfile/Order";
import EditUserProfile from "./pages/user/UserProfile/EditUserProfile";
import AddNewAdress from "./pages/user/UserProfile/AddNewAdress";
import Checkout from "./pages/user/Checkout/Checkout";
import AdminOutlet from "./pages/admin/Sidebar/AdminOutlet";
import AddProduct from "./pages/admin/Components/AddProduct";
import AllProducts from "./pages/admin/Components/AllProducts";
import Orders from "./pages/admin/Components/Orders";
import AllUsers from "./pages/admin/Components/AllUsers";
import Messages from "./pages/admin/Components/Messages";
import Logout from "./pages/admin/Components/logout"
import Trending from "./pages/user/Trending/Trending";
import Tags from "./pages/user/Tags/Tags";
//layout components 
import ResponsiveNav from './Layouts/NavbarMain/ResponsiveNav'
import Footer from "./Layouts/footer/Footer";

//utils
import ProtectedRoute from "./components/Protected/ProductRoute";
import Search from "./pages/user/SearchPage/Search";
import Stats from "./pages/admin/Components/Stats";


const Routing = () => {

  return (

    <><Router>
      <ResponsiveNav />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:title" element={<Singleproduct />} />
         <Route path="/shop/search/:query" element={<Search />} />
          
        <Route path="/shop/tags/:tag" element={<Tags />} />
        <Route path="/shop/promotions/trendings" element={<Trending />} />

        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:id" element={<ResetPassword />} />
        <Route path="/password/reset/*" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/404" element={<ErrorPage />} />


        <Route path="/user" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}>
          <Route path="/user" element={<ProfileOverView />} />
          <Route path="order" element={<Order />} />
          <Route path="edit" element={<EditUserProfile />} />
          <Route path="address" element={<UserAdressBook />} />
          <Route path="address/new" element={<AddNewAdress />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlists" element={<Wishlists />} />

        </Route>

        <Route path="/admin"   element={<ProtectedRoute requiredRole="admin"> <AdminOutlet /></ProtectedRoute>}>
        <Route path="/admin"   element={<Stats />} />
          <Route path="logout" element={<Logout />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products"   element={<AllProducts />} />
          <Route path="new"  element={<AddProduct />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="messages" element={<Messages />} />

        </Route>
      </Routes>
      <Toaster />
      <Footer />
    </Router>
      <CookieConsent
        style={{ right: "5px" }}
      >
        This website uses cookies to ensure you get best experience at out webiste{" "}
        <span style={{ fontSize: "10px", textDecoration: "underline", marginLeft: "0.3rem", color: "#4BB497", fontWeight: "bold", cursor: "pointer" }}>learn more about privacy policiy.</span>
      </CookieConsent></>


  );
};

export default Routing;
