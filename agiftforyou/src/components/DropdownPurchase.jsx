import React from "react";
import { Link } from "react-router-dom";

const DropdownPurchase = ({ onClose }) => {
  const handleItemClick = (item) => {
    console.log(`Clicked on: ${item}`);
  };
  return (
    <div className="absolute top-[55px] w-48 bg-white border border-gray-300 py-2 px-1 rounded-2xl h-30">
      <ul className="flex flex-col gap-4">
        <li
          className="hover:bg-gray-300 rounded-xl h-10  flex flex-col justify-center text-center"
          onClick={() => handleItemClick("Purchase food")}
        >
          <Link to="/purchase-food">Purchase food</Link>
        </li>
        <li
          className="hover:bg-gray-300 rounded-xl h-10  flex flex-col justify-center text-center"
          onClick={() => handleItemClick("Purchase items")}
        >
          <Link to="/purchase-items">Purchase items</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownPurchase;
