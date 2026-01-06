import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProducts, addProduct, updateProduct, deleteProduct, fetchCategories } from '../services/productService';
import type { ProductFormData } from '../services/productService';

// Query Keys
export const queryKeys = {
  products: ['products'],
  categories: ['categories'],
} as const;

// Products Hooks
export const useProducts = () => {
  return useQuery({
    queryKey: queryKeys.products,
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: queryKeys.categories,
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.products });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, product }: { id: number; product: ProductFormData }) => 
      updateProduct(id, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.products });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.products });
    },
  });
};