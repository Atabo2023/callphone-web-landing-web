import React from "react";

export const ProductsBtn = () => {
  const scrollToProductSection = () => {
    // Get a reference to the product section
    const productSectionRef = document.getElementById("productSection");

    // Scroll to the product section with a smooth effect
    productSectionRef.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {" "}
      <button
        className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white min-w-[200px] py-3 px-14 font-medium"
        onClick={scrollToProductSection}
      >
        View Products
      </button>
    </div>
  );
};
