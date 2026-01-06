import React from "react";
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
  return (
    <div className="relative w-full max-w-[340px] mx-auto">
      
      {/* Top Image / Gradient */}
      <div className="relative h-44 sm:h-52 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg overflow-visible">
        
        <img
          src={product.image}
          alt={product.title}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            -top-4 sm:-top-6
            max-h-36 sm:max-h-44
            object-contain
            drop-shadow-2xl
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Bottom Card */}
      <div className="-mt-10 bg-white rounded-3xl shadow-xl p-6">
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
          {product.title}
        </h2>

        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="px-3 py-1 text-xs border rounded-full text-gray-700">
            Category
          </span>
          <span className="px-3 py-1 text-xs border rounded-full text-gray-700">
            {product.category}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase text-gray-400">Price</p>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button
            onClick={() => onEdit?.(product)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Edit
          </button>
        </div>

        {onDelete && (
          <button
            onClick={() => onDelete(product.id)}
            className="mt-4 w-full text-sm text-red-500 hover:text-red-600 transition"
          >
            Delete Product
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
