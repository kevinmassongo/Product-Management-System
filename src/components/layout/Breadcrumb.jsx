import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const breadcrumbMap = {
  "/": "Tableau de bord",
  "/products": "Gestion des produits",
  "/categories": "Gestion des catégories",
  "/customers": "Gestion des clients",
  "/stocks": "Gestion des stocks",
  "/orders": "Gestion des commandes",
  "/suppliers": "Gestion des fournisseurs",
  "/promotions": "Gestion des promotions",
  "/reports": "Rapports",
  "/reviews": "Avis",
  "/support": "Support",
  "/settings": "Paramètres",
};

function Breadcrumb() {
  const location = useLocation();

  const currentPage =
    breadcrumbMap[location.pathname] || "Page";

  return (
    <nav
      className="breadcrumb"
      aria-label="Fil d’Ariane"
    >
      <Link to="/" className="breadcrumb-home">
        E-commerce
      </Link>

      {location.pathname !== "/" && (
        <>
          <ChevronRight
            size={14}
            aria-hidden="true"
          />

          <span
            className="breadcrumb-current"
            aria-current="page"
          >
            {currentPage}
          </span>
        </>
      )}
    </nav>
  );
}

export default Breadcrumb;