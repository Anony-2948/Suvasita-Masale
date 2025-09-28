import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Heart } from "lucide-react";
import products from "../data/products.json";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="pt-32 text-center">Product not found</div>;
  }

  return (
    <main className="pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/products")}
          className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden bg-gray-100"
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>
                          </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Benefits */}
            {product.benefits && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800">Benefits</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-600"
                    >
                      <span className="min-w-3 h-3 bg-red-600 rounded-full mt-1.5 mr-3"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800">Ingredients</h2>
                <ul className="space-y-3">
                  {product.ingredients.map((ing, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-600"
                    >
                      <span className="min-w-3 h-3 bg-red-600 rounded-full mt-1.5 mr-3"></span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buttons */}
            <div className="pt-6">
              <div className="flex gap-4">
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="w-14 h-14 bg-white border-2 border-gray-800 hover:bg-gray-800 text-gray-800 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
