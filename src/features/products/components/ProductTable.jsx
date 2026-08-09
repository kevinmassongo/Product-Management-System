import {
  PackageOpen,
  Eye,
  Pencil,
  Share2,
  MoreVertical,
} from "lucide-react";


function getStatusLabel(status) {
  const labels = {
    active: "Actif",
    low_stock: "Stock faible",
    out_of_stock: "Rupture",
    draft: "Brouillon",
  };

  return labels[status] || status;
}


/* =========================================================
   PRODUCT CARD — GRID
   ========================================================= */

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-card-image">

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className="product-card-image-empty">
            <PackageOpen
              size={28}
              strokeWidth={1.6}
            />
          </div>
        )}


        {/* STATUT */}

        <span
          className={`status-badge status-${product.status}`}
        >
          {getStatusLabel(product.status)}
        </span>


        {/* PLUS */}

        <button
          type="button"
          className="product-card-more"
          title="Plus"
          aria-label={`Plus d'options pour ${product.name}`}
        >
          <MoreVertical
            size={18}
            strokeWidth={1.8}
          />
        </button>

      </div>


      <div className="product-card-content">

        <div className="product-card-title">

          <div>

            <strong>
              {product.name}
            </strong>

            <small>
              {product.category}
            </small>

          </div>

        </div>


        {/* PRIX */}

        <div className="product-card-price">
          {product.price} $
        </div>


        {/* STOCK */}

        <div className="product-card-stock">

          <div className="stock-info">

            <span>
              Stock : {product.stock}
            </span>

            <span>
              {product.sales}%
            </span>

          </div>


          <div className="sales-progress">

            <span
              style={{
                width: `${product.sales}%`,
              }}
            />

          </div>

        </div>

      </div>


      {/* ACTIONS */}

      <div className="product-card-actions">

        <button
          type="button"
          title="Voir"
          aria-label={`Voir ${product.name}`}
        >
          <Eye
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Voir
          </span>

        </button>


        <button
          type="button"
          title="Modifier"
          aria-label={`Modifier ${product.name}`}
        >
          <Pencil
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Modifier
          </span>

        </button>


        <button
          type="button"
          title="Partager"
          aria-label={`Partager ${product.name}`}
        >
          <Share2
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Partager
          </span>

        </button>

      </div>

    </div>
  );
}


/* =========================================================
   PRODUCT LIST — TABLE
   ========================================================= */

function ProductList({ products }) {
  return (
    <div className="product-table-wrapper">

      <table className="product-table">

        <thead>

          <tr>

            <th>
              <input
                type="checkbox"
                aria-label="Sélectionner tous les produits"
              />
            </th>

            <th>
              Produit
            </th>

            <th>
              Catégorie
            </th>

            <th>
              Prix
            </th>

            <th>
              Stock
            </th>

            <th>
              Ventes ce mois
            </th>

            <th>
              Statut
            </th>

            <th>
              Actions
            </th>

          </tr>

        </thead>


        <tbody>

          {products.map((product) => (

            <tr key={product.id}>

              {/* CHECKBOX */}

              <td>

                <input
                  type="checkbox"
                  aria-label={`Sélectionner ${product.name}`}
                />

              </td>


              {/* PRODUIT */}

              <td>

                <div className="product-cell">

                  <div className="product-image">

                    {product.image ? (
                      <img
                        src={product.image}
                        alt=""
                      />
                    ) : (
                      <div className="product-image-empty">
                        <PackageOpen
                          size={20}
                          strokeWidth={1.6}
                        />
                      </div>
                    )}

                  </div>


                  <div>

                    <strong>
                      {product.name}
                    </strong>

                    <small>
                      {product.sku}
                    </small>

                  </div>

                </div>

              </td>


              {/* CATÉGORIE */}

              <td>
                {product.category}
              </td>


              {/* PRIX */}

              <td>
                {product.price} $
              </td>


              {/* STOCK */}

              <td>
                {product.stock}
              </td>


              {/* VENTES */}

              <td>

                <div className="sales-cell">

                  <div className="sales-progress">

                    <span
                      style={{
                        width: `${product.sales}%`,
                      }}
                    />

                  </div>

                  <small>
                    {product.sales}%
                  </small>

                </div>

              </td>


              {/* STATUT */}

              <td>

                <span
                  className={`status-badge status-${product.status}`}
                >
                  {getStatusLabel(product.status)}
                </span>

              </td>


              {/* ACTIONS */}

              <td>

                <div className="product-actions">

                  <button
                    type="button"
                    // title="Voir"
                    aria-label={`Voir ${product.name}`}
                  >
                    <Eye
                      size={16}
                      strokeWidth={1.8}
                    />
                    voir
                  </button>


                  <button
                    type="button"
                    title="Modifier"
                    aria-label={`Modifier ${product.name}`}
                  >
                    <Pencil
                      size={16}
                      strokeWidth={1.8}
                    />
                    modifier
                  </button>


                  <button
                    type="button"
                    title="Partager"
                    aria-label={`Partager ${product.name}`}
                  >
                    <Share2
                      size={16}
                      strokeWidth={1.8}
                    />
                    partager
                  </button>


                  <button
                    type="button"
                    title="Plus"
                    aria-label={`Plus d'options pour ${product.name}`}
                  >
                    <MoreVertical
                      size={16}
                      strokeWidth={1.8}
                    />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}


/* =========================================================
   EMPTY STATE
   ========================================================= */

function EmptyProducts() {
  return (
    <div className="products-empty">

      <div className="products-empty-icon">

        <PackageOpen
          size={24}
          strokeWidth={1.7}
        />

      </div>


      <div className="products-empty-content">

        <strong>
          Aucun produit trouvé
        </strong>

        <span>
          Aucun produit ne correspond à ce filtre.
        </span>

      </div>

    </div>
  );
}


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ProductTable({
  viewMode,
  products,
}) {

  /* ÉTAT VIDE */

  if (products.length === 0) {
    return <EmptyProducts />;
  }


  /* VUE GRID */

  if (viewMode === "grid") {

    return (
      <div className="products-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>
    );

  }


  /* VUE LIST */

  return (
    <ProductList
      products={products}
    />
  );
}