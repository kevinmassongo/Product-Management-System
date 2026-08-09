import { NavLink } from "react-router-dom";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  LayoutGrid,
  Tag,
  Boxes,
  Building2,
  Truck,
  Star,
  Settings,
  ChartNoAxesCombined,
  CircleHelp,
  ExternalLink,
  Store,
} from "lucide-react";

import "../../styles/App.css";

// --------------------------------------------------
// Navigation
// --------------------------------------------------

const navigation = [
  {
    title: "ACCUEIL",
    items: [
      {
        label: "Tableau de bord",
        path: "/",
        icon: Home,
      },
    ],
  },

  {
    title: "E-COMMERCE",
    items: [
      {
        label: "Produits",
        path: "/products",
        icon: Package,
      },
      {
        label: "Commandes",
        path: "/orders",
        icon: ShoppingCart,
      },
      {
        label: "Clients",
        path: "/customers",
        icon: Users,
      },
      {
        label: "Catégories",
        path: "/categories",
        icon: LayoutGrid,
      },
      {
        label: "Promotions",
        path: "/promotions",
        icon: Tag,
      },
    ],
  },

  {
    title: "GESTION",
    items: [
      {
        label: "Stocks",
        path: "/stocks",
        icon: Boxes,
      },
      {
        label: "Fournisseurs",
        path: "/suppliers",
        icon: Building2,
      },
      {
        label: "Livraisons",
        path: "/deliveries",
        icon: Truck,
      },
      {
        label: "Avis clients",
        path: "/reviews",
        icon: Star,
      },
    ],
  },

  {
    title: "AUTRES",
    items: [
      {
        label: "Paramètres",
        path: "/settings",
        icon: Settings,
      },
      {
        label: "Rapports & analyses",
        path: "/reports",
        icon: ChartNoAxesCombined,
      },
    ],
  },
];

// --------------------------------------------------
// Sidebar Link
// --------------------------------------------------

function SidebarLink({ item, external = false }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? "active" : ""}`
      }
    >
      <Icon
        className="sidebar-icon"
        size={20}
        strokeWidth={1.8}
      />

      <span>{item.label}</span>

      {external && (
        <ExternalLink
          className="external-icon"
          size={16}
          strokeWidth={1.8}
        />
      )}
    </NavLink>
  );
}

// --------------------------------------------------
// Sidebar
// --------------------------------------------------

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <NavLink to="/" aria-label="Accueil">
          <Store size={24} strokeWidth={1.8} />
        </NavLink>

        <span>Shop</span>
      </div>

      {/* Navigation */}
      <nav>
        {navigation.map((section) => (
          <div
            className="sidebar-section"
            key={section.title}
          >
            <p className="sidebar-title">
              {section.title}
            </p>

            {section.items.map((item) => (
              <SidebarLink
                key={item.path}
                item={item}
              />
            ))}
          </div>
        ))}
      </nav>

      {/* Support */}
      <div className="sidebar-support">
        <SidebarLink
          item={{
            label: "Aide & support",
            path: "/support",
            icon: CircleHelp,
          }}
          external
        />
      </div>
    </aside>
  );
}

export default Sidebar; 