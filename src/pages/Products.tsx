import React, { useState, useEffect, useMemo } from 'react';
import { FiPackage, FiPlus } from 'react-icons/fi';
import { toast } from 'sonner';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { fetchProducts, fetchCategories, addProduct, updateProduct, deleteProduct } from '../services/productService';
import type { Product, ProductFormData } from '../services/productService';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories()
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError('Error loading data');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const handleAddProduct = async (productData: ProductFormData) => {
    try {
      const newProduct = await addProduct(productData);
      setProducts(prev => [newProduct, ...prev]);
      setShowForm(false);
      toast.success('Product added successfully!', {
        description: `${productData.title} has been added to your inventory.`
      });
    } catch (error) {
   
       toast.error('Failed to add product', {
        description: 'Please try again later.'
      });
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleUpdateProduct = async (productData: ProductFormData) => {
    if (editingProduct) {
      try {
        const updatedProduct = await updateProduct(editingProduct.id, productData);
        setProducts(prev => prev.map(p => p.id === editingProduct.id ? updatedProduct : p));
        setEditingProduct(null);
        setShowForm(false);
        toast.success('Product updated successfully!', {
          description: `${productData.title} has been updated.`
        });
      } catch (error) {
        console.error('Error updating product:', error);
        toast.error('Failed to update product', {
          description: 'Please try again later.'
        });
      }
    }
  };

  const handleDeleteProduct = async (id: number) => {
    const product = products.find(p => p.id === id);
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        setProducts(prev => prev.filter(p => p.id !== id));
        toast.success('Product deleted successfully!', {
          description: product ? `${product.title} has been removed.` : 'Product has been removed.'
        });
      } catch (error) {
        console.error('Error deleting product:', error);
        toast.error('Failed to delete product', {
          description: 'Please try again later.'
        });
      }
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error loading products: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Header with Search */}
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search products..."
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-24 mt-24 transition-all duration-300 ease-in-out">
        {/* Page Header */}
        <div className="px-4 md:px-6 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FiPackage className="text-xl md:text-2xl text-gray-900" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Product Management</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center justify-center gap-2 bg-purple-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold shadow-lg text-sm md:text-base"
              >
                <FiPlus className="text-base md:text-lg" />
                Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-6 bg-white">
          {/* Product Count */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Products Overview</h2>
            <p className="text-sm md:text-base text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-200">
              <FiPackage className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500 mb-2">No products found</p>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <ProductForm
          productToEdit={editingProduct}
          categories={categories}
          onSave={editingProduct ? handleUpdateProduct : handleAddProduct}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
};

export default Products;