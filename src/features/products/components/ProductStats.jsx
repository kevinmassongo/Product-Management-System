import {
  CircleDollarSign,
  ShoppingCart,
  ShoppingBag,
  TriangleAlert,
} from "lucide-react";

const stats = [
  {
    title: "Chiffre d'affaires",
    value: "24 850 $",
    variation: "+18%",
    description: "vs mois précédent",
    type: "circle",
    icon: CircleDollarSign,
    iconType: "purple",
  },
  {
    title: "Commandes ce mois",
    value: "328",
    variation: "+12%",
    description: "vs mois précédent",
    type: "bars",
    icon: ShoppingCart,
    iconType: "purple",
  },
  {
    title: "Produits actifs",
    value: "1 240",
    variation: "+8%",
    description: "vs mois précédent",
    type: "bars-green",
    icon: ShoppingBag,
    iconType: "green",
  },
  {
    title: "Stock faible",
    value: "36",
    variation: "",
    description: "Produits à réapprovisionner",
    type: "orange",
    icon: TriangleAlert,
    iconType: "orange",
  },
];

function StaticChart({ type }) {
  if (type === "circle") {
    return (
      <div className="stat-circle">
        <div className="stat-circle-inner" />
      </div>
    );
  }

  const heights =
    type === "orange"
      ? [20, 32, 18, 42, 27, 48, 34]
      : type === "bars-green"
        ? [18, 29, 22, 39, 26, 45, 34]
        : [18, 30, 22, 42, 26, 48, 36];

  return (
    <div
      className={`stat-bars ${
        type === "orange"
          ? "stat-bars-orange"
          : type === "bars-green"
            ? "stat-bars-green"
            : "stat-bars-purple"
      }`}
    >
      {heights.map((height, index) => (
        <span
          key={index}
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
}

export default function ProductStats() {
  return (
    <section
      className="product-stats"
      aria-label="Statistiques des produits"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            className="stat-card"
            key={stat.title}
          >

            {/* ICÔNE */}
            <div className={`stat-icon stat-icon-${stat.iconType}`}>
              <Icon
                size={21}
                strokeWidth={1.8}
              />
            </div>


            {/* TITRE + VALEUR */}
            <div className="stat-main">

              <p className="stat-title">
                {stat.title}
              </p>

              <strong className="stat-value">
                {stat.value}
              </strong>

            </div>


            {/* DESCRIPTION */}
            <div className="stat-description">

              {stat.variation && (
                <span className="stat-variation">
                  {stat.variation}
                </span>
              )}

              <span className="stat-description-text">
                {stat.description}
              </span>

            </div>


            {/* GRAPHIQUE */}
            <div className="stat-chart">
              <StaticChart type={stat.type} />
            </div>

          </article>
        );
      })}
    </section>
  );
}