import {
  Search,
  SlidersHorizontal,
  List,
  LayoutGrid,
  X,
} from "lucide-react";

export default function ProductToolbar({
  viewMode,
  setViewMode,

  searchTerm,
  setSearchTerm,

  activeFilter,
  setActiveFilter,

  sortOption,
  setSortOption,
}) {
  return (
    <div className="product-toolbar">

      {/* RECHERCHE */}

      <div className="product-search">

        <Search
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />

        <input
          type="search"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Rechercher un produit, une catégorie..."
          aria-label="Rechercher un produit ou une catégorie"
        />

        {searchTerm && (
          <button
            type="button"
            className="search-clear"
            onClick={() => setSearchTerm("")}
            aria-label="Effacer la recherche"
          >
            <X
              size={15}
              strokeWidth={2}
            />
          </button>
        )}

      </div>


      {/* FILTRES PAR STATUT */}

      <div className="product-tabs">

        <button
          type="button"
          className={
            activeFilter === "all"
              ? "active"
              : ""
          }
          onClick={() => setActiveFilter("all")}
        >
          Tous
        </button>

        <button
          type="button"
          className={
            activeFilter === "active"
              ? "active"
              : ""
          }
          onClick={() => setActiveFilter("active")}
        >
          Actifs
        </button>

        <button
          type="button"
          className={
            activeFilter === "draft"
              ? "active"
              : ""
          }
          onClick={() => setActiveFilter("draft")}
        >
          Brouillons
        </button>

        <button
          type="button"
          className={
            activeFilter === "out_of_stock"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveFilter("out_of_stock")
          }
        >
          Rupture
        </button>

      </div>


      {/* CONTROLES */}

      <div className="product-controls">

        <button className="filter-button">

          <SlidersHorizontal
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Filtres
          </span>

        </button>


        {/* TRI */}

        <select
          value={sortOption}
          onChange={(event) =>
            setSortOption(event.target.value)
          }
          aria-label="Trier les produits"
        >

          <option value="recent">
            Plus récents
          </option>

          <option value="price_asc">
            Prix croissants
          </option>

          <option value="price_desc">
            Prix décroissants
          </option>

          <option value="stock_asc">
            Stock croissant
          </option>

          <option value="stock_desc">
            Stock décroissant
          </option>

        </select>


        {/* VUE LISTE */}

        <button
          type="button"
          className={`view-button ${
            viewMode === "list"
              ? "active"
              : ""
          }`}
          aria-label="Vue liste"
          title="Vue liste"
          onClick={() => setViewMode("list")}
        >

          <List
            size={18}
            strokeWidth={1.8}
          />

        </button>


        {/* VUE GRILLE */}

        <button
          type="button"
          className={`view-button ${
            viewMode === "grid"
              ? "active"
              : ""
          }`}
          aria-label="Vue grille"
          title="Vue grille"
          onClick={() => setViewMode("grid")}
        >

          <LayoutGrid
            size={18}
            strokeWidth={1.8}
          />

        </button>

      </div>

    </div>
  );
}