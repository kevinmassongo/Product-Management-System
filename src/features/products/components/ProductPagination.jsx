import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProductPagination({
  currentPage,
  totalPages,
  setCurrentPage,

  itemsPerPage,
  setItemsPerPage,

  totalItems,
}) {

  const startItem =
    totalItems === 0
      ? 0
      : (currentPage - 1) * itemsPerPage + 1;

  const endItem =
    Math.min(
      currentPage * itemsPerPage,
      totalItems
    );


  // =====================================================
  // GÉNÉRER LES NUMÉROS
  // =====================================================

  const getPageNumbers = () => {

    const pages = [];

    if (totalPages <= 5) {

      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }


    pages.push(1);


    if (currentPage > 3) {
      pages.push("...");
    }


    const start = Math.max(
      2,
      currentPage - 1
    );

    const end = Math.min(
      totalPages - 1,
      currentPage + 1
    );


    for (let i = start; i <= end; i++) {
      pages.push(i);
    }


    if (currentPage < totalPages - 2) {
      pages.push("...");
    }


    pages.push(totalPages);


    return pages;
  };


  return (
    <div className="product-pagination">

      {/* INFORMATIONS */}

      <div className="pagination-info">

        Affichage de{" "}

        <strong>
          {startItem}
        </strong>

        {" "}à{" "}

        <strong>
          {endItem}
        </strong>

        {" "}sur{" "}

        <strong>
          {totalItems}
        </strong>

        {" "}produits

      </div>


      {/* NAVIGATION */}

      <div className="pagination-controls">

        {/* PRÉCÉDENT */}

        <button
          type="button"
          className="pagination-arrow"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(
              currentPage - 1
            )
          }
          aria-label="Page précédente"
        >

          <ChevronLeft
            size={17}
            strokeWidth={1.8}
          />

        </button>


        {/* NUMÉROS */}

        {getPageNumbers().map(
          (page, index) => {

            if (page === "...") {

              return (
                <span
                  key={`ellipsis-${index}`}
                  className="pagination-ellipsis"
                >
                  …
                </span>
              );
            }


            return (
              <button
                key={page}
                type="button"
                className={`pagination-number ${
                  currentPage === page
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setCurrentPage(page)
                }
              >
                {page}
              </button>
            );

          }
        )}


        {/* SUIVANT */}

        <button
          type="button"
          className="pagination-arrow"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(
              currentPage + 1
            )
          }
          aria-label="Page suivante"
        >

          <ChevronRight
            size={17}
            strokeWidth={1.8}
          />

        </button>

      </div>


      {/* PRODUITS PAR PAGE */}

      <div className="pagination-limit">

        <span>
          Afficher
        </span>

        <select
          value={itemsPerPage}
          onChange={(event) =>
            setItemsPerPage(
              Number(event.target.value)
            )
          }
        >

          <option value={6}>
            6
          </option>

          <option value={12}>
            12
          </option>

          <option value={24}>
            24
          </option>

          <option value={48}>
            48
          </option>

        </select>

      </div>

    </div>
  );
}