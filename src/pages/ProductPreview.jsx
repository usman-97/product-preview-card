import React from "react";
import productImage from "../assets/images/image-product-mobile.jpg";
import desktopProductImage from "../assets/images/image-product-desktop.jpg";
import carIcon from "../assets/images/icon-cart.svg";
import Footer from "../components/Footer";

const ProductPreview = () => {
  return (
    <>
      <section className="grid place-content-center min-h-[100vh] bg-cream text-dark-grayish-blue font-primary text-[14px] font-medium">
        <div className="max-w-sm bg-white rounded-2xl md:grid md:grid-cols-2 md:max-w-2xl">
          <div className="md:h-full">
            <img
              src={productImage}
              alt="Image"
              className="rounded-t-2xl"
              id="mobile-img"
            />
            <img
              src={desktopProductImage}
              alt="Image"
              className="rounded-s-2xl"
              id="desktop-img"
            />
          </div>
          <div className="flex flex-col items-start p-5 space-y-4 md:px-10 md:py-6 md:justify-between">
            <div className="flex flex-col space-y-4">
              <span className="uppercase tracking-[5px]">Perfume</span>
              <h1 className="text-very-dark-blue font-bold text-4xl font-secondary">
                Gabrielle Essence Eau De Parfum
              </h1>
            </div>
            <p>
              A floral, solar and voluptuous interpretation composed by Oliver
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-dark-cyan font-secondary font-bold text-4xl">
                $149.99
              </p>
              <p className="line-through">$169.99</p>
            </div>
            <div className="flex justify-center w-full p-4 space-x-3 bg-dark-cyan text-white cursor-pointer rounded-lg hover:bg-very-dark-cyan">
              <img src={carIcon} alt="Cart Icon" />
              <span>Add to Cart</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPreview;
