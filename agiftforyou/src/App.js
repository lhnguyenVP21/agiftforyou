import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutHer from './pages/AboutHer';
import ContactUs from './pages/ContactUs';

import PurchaseFood from './pages/PurchaseFood';
import OurPlans from './pages/OurPlans';
import Proposal from './pages/Propose'
import Yes from './pages/YesPropose'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about-her" element={<AboutHer />}></Route>
      
      <Route path="/contact-us" element={<ContactUs />}></Route>

      <Route path="/purchase-food" element={<PurchaseFood />}></Route>
      <Route path="/our-plans" element={<OurPlans />}></Route>
      <Route path="/proposal" element={<Proposal />}></Route>
      <Route path="/yes" element={<Yes />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
