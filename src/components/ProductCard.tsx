import React, { useState } from "react";
import { FiMoreVertical, FiEdit2, FiTrash2, FiStar  } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";
import type { Product } from "../services/productService";

interface ProductCardProps {
  product: Product;
  onEdit?: (product: Product) => void;
  onDelete?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative  mx-auto">
      
      {/* Top Image Section */}
      <div className="relative h-52 rounded-3xl bg-gray-100 shadow-lg overflow-visible">
        <img
          src={product.image}
          alt={product.title}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            -top-3
            max-h-44
            object-contain
            drop-shadow-2xl
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Bottom Card */}
      <div className="-mt-10 bg-white rounded-3xl shadow-xl p-6 relative">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h2>

        {/* Tags */}
        <div className="flex gap-2 mt-3 mb-4 flex-wrap">
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-700">
            {product.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase text-gray-400">Price</p>
            <p className="text-2xl font-bold text-gray-900 flex items-center gap-1">
              <LuIndianRupee className="w-5 h-5" />
              {product.price}
            </p>
          </div>
          
          {/* Three Dots */}
          <div className="relative shrink-0">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            >
              <FiMoreVertical className="w-5 h-5 text-gray-600" />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white/95 backdrop-blur rounded-xl shadow-2xl border border-gray-100 py-1 z-20">
                <button
                  onClick={() => {
                    onEdit?.(product);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                >
                  <FiEdit2 className="w-4 h-4" />
                  Edit
                </button>

                {onDelete && (
                  <button
                    onClick={() => {
                      onDelete(product.id);
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                  >
                    <FiTrash2 className="w-4 h-4" />
                    Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating.rate)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
        )}
      </div>

      {/* Click outside */}
      {showMenu && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
