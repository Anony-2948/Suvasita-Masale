import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import products from "../data/products.json";

const ProductSlider = () => {
  const navigate = useNavigate();

  const scrollLeft = () => {
    const slider = document.getElementById("product-slider");
    if (slider) slider.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const slider = document.getElementById("product-slider");
    if (slider) slider.scrollLeft += 300;
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-primary-light dark:text-primary-dark font-medium mb-2 block">
              Our Collection
            </span>
            <h2 className="text-4xl font-bold text-text-light dark:text-text-dark">
              Featured Products
            </h2>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="group flex items-center text-primary-light dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
          >
            <span className="mr-2">View All Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left button */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-background-dark p-4 rounded-full shadow-soft hover:shadow-hover transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-text-light dark:text-text-dark" />
          </button>

          {/* Scrollable Products */}
          <div
            id="product-slider"
            className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-hide py-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-80 group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <div className="bg-white dark:bg-background-dark rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-secondary-light dark:bg-secondary-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-background-dark p-4 rounded-full shadow-soft hover:shadow-hover transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-text-light dark:text-text-dark" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
