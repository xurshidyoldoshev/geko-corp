import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layouts";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PriceList from "./pages/PriceList/PriceList";
import Reviews from "./pages/Reviews/Reviews";
import Blog from "./pages/Blog/Blog";
import SinglePage from "./pages/SinglePage/SinglePage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="price-list" element={<PriceList/>} />
          <Route path="reviews" element={<Reviews/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="single-page:id" element={<SinglePage />} />
      </Route>
    </Routes>
  );
};

export default App;
