import { useEffect, useMemo, useState } from "react";

import ProductHeader from "../features/products/components/ProductHeader";
import ProductStats from "../features/products/components/ProductStats";
import ProductToolbar from "../features/products/components/ProductToolbar";
import ProductTable from "../features/products/components/ProductTable";
import ProductPagination from "../features/products/components/ProductPagination";

import products from "../features/products/data/products";

import "../styles/Products.css";

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState("list");

  const [searchTerm, setSearchTerm] = useState("");

  const [activeFilter, setActiveFilter] = useState("all");

  const [sortOption, setSortOption] = useState("recent");

  // Nombre de produits par page
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Page actuelle
  const [currentPage, setCurrentPage] = useState(1);


  // =====================================================
  // FILTRAGE + RECHERCHE
  // =====================================================

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    let result = products.filter((product) => {

      const matchesStatus =
        activeFilter === "all" ||
        product.status === activeFilter;

      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.sku.toLowerCase().includes(search);

      return matchesStatus && matchesSearch;
    });


    // =====================================================
    // TRI
    // =====================================================

    result = [...result].sort((a, b) => {

      switch (sortOption) {

        case "recent":
          return b.id - a.id;

        case "price_asc":
          return a.price - b.price;

        case "price_desc":
          return b.price - a.price;

        case "stock_asc":
          return a.stock - b.stock;

        case "stock_desc":
          return b.stock - a.stock;

        default:
          return 0;
      }
    });


    return result;

  }, [
    searchTerm,
    activeFilter,
    sortOption,
  ]);


  // =====================================================
  // PAGINATION
  // =====================================================

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredProducts.length / itemsPerPage
    )
  );


  // Produits affichés sur la page actuelle
  const paginatedProducts = useMemo(() => {

    const startIndex =
      (currentPage - 1) * itemsPerPage;

    const endIndex =
      startIndex + itemsPerPage;

    return filteredProducts.slice(
      startIndex,
      endIndex
    );

  }, [
    filteredProducts,
    currentPage,
    itemsPerPage,
  ]);


  // =====================================================
  // REVENIR À LA PAGE 1
  // =====================================================

  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    activeFilter,
    sortOption,
    itemsPerPage,
  ]);


  // =====================================================
  // SÉCURITÉ SI UNE PAGE N'EXISTE PLUS
  // =====================================================

  useEffect(() => {

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }

  }, [
    currentPage,
    totalPages,
  ]);


  return (
    <main className="products-page">

      <ProductHeader />

      <ProductStats />


      <section
        className="products-catalog"
        aria-labelledby="products-title"
      >

        {/* HEADER */}

        <div className="products-catalog-header">

          <div>

            <h2 id="products-title">

              Tous les produits

              <span>
                {filteredProducts.length} produits
              </span>

            </h2>

          </div>

        </div>


        {/* TOOLBAR */}

        <ProductToolbar
          viewMode={viewMode}
          setViewMode={setViewMode}

          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}

          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}

          sortOption={sortOption}
          setSortOption={setSortOption}
        />


        {/* PRODUITS */}

        <ProductTable
          viewMode={viewMode}
          products={paginatedProducts}
        />


        {/* PAGINATION */}

        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}

          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}

          totalItems={filteredProducts.length}
        />

      </section>

    </main>
  );
}