import React, { useState, useEffect } from "react";
import "./ManageProducts.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
import Papa from "papaparse";
import SkeletonLoader from "./SkeletonLoader"; // Import the SkeletonLoader component

const ManageProducts = () => {
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("products")) || []);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", stock: "", image: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStock, setFilterStock] = useState("");
  const [filterPrice, setFilterPrice] = useState(""); // NEW: Filter by Price
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]); // Multi-delete selection
  const [showEditModal, setShowEditModal] = useState(false); // Product edit modal
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const productsPerPage = 5;
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);
  

  useEffect(() => {
    // Simulated polling for stock updates every 10 seconds
    const interval = setInterval(() => {
      fetchStockUpdates();
    }, 10000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    setTimeout(() => {
      const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
      setProducts(storedProducts);
      setLoading(false); // Set loading to false after data fetch
    }, 2000); // Simulate API loading delay
  }, []);

  const fetchStockUpdates = () => {
    const updatedProducts = products.map(product => ({
      ...product,
      stock: Math.random() > 0.5 ? "In Stock" : "Out of Stock", // Simulating stock updates
    }));
    setProducts(updatedProducts);
  };


  const handleSort = (column) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);

    const sortedProducts = [...products].sort((a, b) => {
      if (column === "price") {
        return newDirection === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return newDirection === "asc" ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column]);
      }
    });

    setProducts(sortedProducts);
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock || !newProduct.image) {
      alert("Please fill all fields including image and stock level.");
      return;
    }
  
    let updatedProducts;
  
    if (editIndex !== null) {
      updatedProducts = products.map((product, index) =>
        index === editIndex ? { ...newProduct, id: product.id } : product
      );
      setEditIndex(null);
      setShowEditModal(false);
    } else {
      updatedProducts = [...products, { ...newProduct, id: Date.now() }];
    }
  
    // ✅ Directly update localStorage and state properly
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  
    // Reset input fields
    setNewProduct({ name: "", price: "", category: "", stock: "", image: "" });
  
    alert("Product added successfully!");
  };
    
  
  
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // ✅ Ensures persistence
  };
  

  const handleEditProduct = (index) => {
    setNewProduct(products[index]);
    setEditIndex(index);
    setShowEditModal(true);
  };

  const handleMultiSelect = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(pid => pid !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const handleMultiDelete = () => {
    setProducts(products.filter(product => !selectedProducts.includes(product.id)));
    setSelectedProducts([]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewProduct(prevProduct => ({
          ...prevProduct,
          image: reader.result, // Store base64 image URL immediately
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  

  const filteredProducts = products.filter((product) =>
    (searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterCategory === "" || product.category.toLowerCase() === filterCategory.toLowerCase()) &&
    (filterStock === "" || product.stock.toLowerCase() === filterStock.toLowerCase())&&
    (filterPrice === "" || product.price <= parseFloat(filterPrice)) // NEW: Filter by Price

  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
        
    <div className="manage-products">
       
      <h2>Manage Products</h2>
       
      <div className="add-product">
        <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        <input type="text" placeholder="Stock Level" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <button onClick={handleAddProduct}>{editIndex !== null ? "Update Product" : "Add Product"}</button>
      </div>
      <div className="filter-section">
        <input type="text" placeholder="Search by Name..." onChange={(e) => setSearchTerm(e.target.value)} />
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">Filter by Category</option>
          {[...new Set(products.map(product => product.category))].map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select onChange={(e) => setFilterStock(e.target.value)}>
          <option value="">Filter by Stock</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      {loading ? (
        <SkeletonLoader /> // Show Skeleton while loading
      ) : (
      <table className="product-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Image</th>
            <th onClick={() => handleSort("name")}>Title {sortColumn === "name" ? (sortDirection === "asc" ? "▲" : "▼") : ""}</th>
            <th onClick={() => handleSort("category")}>Category {sortColumn === "category" ? (sortDirection === "asc" ? "▲" : "▼") : ""}</th>
            <th onClick={() => handleSort("price")}>Price {sortColumn === "price" ? (sortDirection === "asc" ? "▲" : "▼") : ""}</th> {/* NEW: Sortable Price */}
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleMultiSelect(product.id)}
                />
              </td>
              <td><img src={product.image} alt={product.name} className="product-image" /></td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEditProduct(index)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      
      {selectedProducts.length > 0 && (
        <button className="multi-delete-btn" onClick={handleMultiDelete}>Delete Selected</button>
      )}

<div className="pagination">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="prev-next"
  >
    <FaArrowLeft /> 
  </button>

  {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map((number) => (
    <button
      key={number}
      onClick={() => setCurrentPage(number + 1)}
      className={currentPage === number + 1 ? "active" : ""}
    >
      {number + 1}
    </button>
  ))}

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
    className="prev-next"
  >
     <FaArrowRight />
  </button>
</div>


      {/* Product Edit Modal */}
      {showEditModal && (
        <div className="edit-modal">
          <div className="modal-content">
            <h3>Edit Product</h3>
            <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
            <input type="text" placeholder="Stock Level" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <button onClick={handleAddProduct}>Update</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
