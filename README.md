# Product Management Dashboard 🛍️

A modern, full-featured Product Management Dashboard built with React 19, TypeScript, Tailwind CSS, and React Router.

## ✨ Features

✅ **Display Products** - Fetches and displays products from Fake Store API in a responsive card grid  
✅ **Add Product** - Create new products with a validated form (POST request)  
✅ **Edit Product** - Update existing product details (PUT request)  
✅ **Delete Product** - Remove products with confirmation dialog (DELETE request)  
✅ **Search** - Real-time search by product title  
✅ **Filter** - Filter products by category  
✅ **Responsive Design** - Mobile-first design with Tailwind CSS  
✅ **Icons** - Beautiful icons using React Icons (Feather Icons)

## 🛠️ Tech Stack

- **React 19** - Functional components with Hooks
- **TypeScript** - Type-safe code
- **Tailwind CSS 4** - Modern utility-first styling
- **React Router DOM** - Client-side routing
- **React Icons** - Feather icon set (Fi prefix)
- **Native Fetch API** - For API calls
- **Vite** - Fast build tool and dev server
- **Fake Store API** - Mock backend for testing

## 🚀 Getting Started

The development server is already running at http://localhost:5173

### Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ProductCard.tsx       # Product card with edit/delete buttons
│   ├── ProductForm.tsx       # Add/Edit modal form with validation
│   └── SearchFilter.tsx      # Search and category filter
├── pages/
│   └── Products.tsx          # Main products page with state management
├── services/
│   └── productService.ts     # API service with TypeScript types
├── App.tsx                   # React Router setup
├── main.tsx                  # Entry point
└── index.css                 # Tailwind CSS imports
```

## 🎯 Core Features Implemented

### 1. Product Display
- Responsive grid (1-4 columns based on screen size)
- Product cards with image, title, price, category, description
- Star ratings with React Icons
- Loading spinner during initial fetch
- Hover effects and smooth transitions

### 2. Add/Edit Operations
- Modal form with validation
- Required fields: title, price, description, category
- Dynamic category dropdown from API
- Separate modes for add/edit
- Error handling and user feedback

### 3. Search & Filter
- Real-time search by product title (case-insensitive)
- Category filter dropdown
- Combined search + filter functionality
- Product count display
- Search icon from React Icons

### 4. Delete Operation
- Confirmation dialog before deletion
- Optimistic UI updates
- DELETE request to API
- Error handling

## 🔌 API Integration

Base URL: `https://fakestoreapi.com`

### Endpoints Used:
- `GET /products` - Fetch all products
- `GET /products/categories` - Fetch categories
- `POST /products` - Add new product (mock)
- `PUT /products/{id}` - Update product
- `DELETE /products/{id}` - Delete product

**Note:** The Fake Store API returns mock responses. Changes don't persist on the server but are reflected in the local UI.

## 🎨 Design Highlights

- **Purple-Indigo gradient header** with package icon
- **Card-based layout** with shadows and hover effects
- **Form validation** with inline error messages
- **Responsive design** - mobile, tablet, desktop
- **Tailwind utilities** for consistent spacing and colors
- **Feather Icons** for UI elements (FiPlus, FiEdit, FiTrash2, FiSearch, FiStar, FiX, FiPackage)

## 💡 Technical Implementation

### Type Safety
- TypeScript interfaces for Product and ProductFormData
- Type-only imports for proper module separation
- Strict type checking enabled

### State Management
- React hooks (useState, useEffect)
- Local state for products, filters, form
- Derived state for filtered products

### Performance
- Vite for fast HMR
- Optimized re-renders with proper dependencies
- Efficient filtering with useMemo patterns

## 📝 Usage

1. **View Products**: Browse all products on the main page
2. **Search**: Type in the search box to filter by title
3. **Filter**: Select a category from the dropdown
4. **Add Product**: Click "Add Product" button, fill form, submit
5. **Edit Product**: Click "Edit" on any card, modify fields, save
6. **Delete Product**: Click "Delete", confirm in dialog

## ⚠️ Important Notes

- Uses Fake Store API (mock responses)
- New products get temporary IDs
- Changes don't persist across page refresh
- Alert dialogs used for user feedback (can be replaced with toast notifications)

## 🚀 Future Enhancements

- [ ] Pagination/infinite scroll
- [ ] Sort by price, rating, name
- [ ] Image upload with preview
- [ ] Toast notifications (replace alerts)
- [ ] Dark mode toggle
- [ ] Product detail page
- [ ] Shopping cart
- [ ] Unit tests with Vitest
- [ ] Error boundaries
- [ ] Skeleton loaders

---

**Built with ❤️ for Intricare Technologies**  
React 19 + TypeScript + Tailwind CSS 4 + React Router + React Icons
