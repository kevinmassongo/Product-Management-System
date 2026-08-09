import { Link } from "react-router-dom";

export default function ProductHeader() {
  return (
    <header className="product-page-header">

      <div>
        <h1>Gestion des produits</h1>

        <p>
          Gérez votre catalogue, vos stocks et les
          performances de votre boutique.
        </p>
      </div>

      <div className="product-header-actions">

        <button type="button" className="button-secondary">
          ↥ Importer
        </button>

        <Link
          to="/products/new"
          className="button-primary"
        >
          + Ajouter un produit
        </Link>

      </div>

    </header>
  );
}