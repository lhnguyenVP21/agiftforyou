import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from './pages/AboutMe';
import AboutHer from './pages/AboutHer';
import AboutUS from './pages/AboutUs';
import LuckySpin from './pages/LuckySpin';
import PurchaseFood from './pages/PurchaseFood';
import PurchaseItems from './pages/PurchaseItems';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about-me" element={<AboutMe />}></Route>
      <Route path="/about-her" element={<AboutHer />}></Route>
      <Route path="/about-us" element={<AboutUS />}></Route>
      <Route path="/lucky-spin" element={<LuckySpin />}></Route>
      <Route path="/purchase-food" element={<PurchaseFood />}></Route>
      <Route path="/purchase-items" element={<PurchaseItems />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
