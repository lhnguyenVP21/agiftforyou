import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutHer from './pages/AboutHer';
import AboutUS from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LuckySpin from './pages/LuckySpin';
import PurchaseFood from './pages/PurchaseFood';
import OurPlans from './pages/OurPlans';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about-her" element={<AboutHer />}></Route>
      <Route path="/about-us" element={<AboutUS />}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>
      <Route path="/lucky-spin" element={<LuckySpin />}></Route>
      <Route path="/purchase-food" element={<PurchaseFood />}></Route>
      <Route path="/our-plans" element={<OurPlans />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
