
import { NavLink } from "react-router-dom";
import "../../styles/App.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <NavLink to="/">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5 8h14l-1 13H6L5 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
        </NavLink>

        <span>Shop</span>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">ACCUEIL</p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
            <path d="M9 21v-6h6v6" />
          </svg>

          <span>Tableau de bord</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">E-COMMERCE</p>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 13l-7 7-9-9V4h7l9 9Z" />
            <circle cx="7.5" cy="7.5" r="1" />
          </svg>

          <span>Produits</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 4h2l2.2 11h10.5L20 7H6" />
            <circle cx="9" cy="19" r="1.5" />
            <circle cx="17" cy="19" r="1.5" />
          </svg>

          <span>Commandes</span>
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="9" cy="7" r="3" />
            <path d="M3 20a6 6 0 0 1 12 0" />
            <path d="M16 4.5a3 3 0 0 1 0 5.8" />
            <path d="M18 14a5 5 0 0 1 3 4.5" />
          </svg>

          <span>Clients</span>
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>

          <span>Catégories</span>
        </NavLink>

        <NavLink
          to="/promotions"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 13l-7 7-9-9V4h7l9 9Z" />
            <circle cx="7.5" cy="7.5" r="1" />
            <path d="M10 14l4-4" />
            <path d="M10 10h.01M14 14h.01" />
          </svg>

          <span>Promotions</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">GESTION</p>

        <NavLink
          to="/stocks"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m4 7 8-4 8 4-8 4-8-4Z" />
            <path d="M4 7v10l8 4 8-4V7" />
            <path d="M12 11v10" />
          </svg>

          <span>Stocks</span>
        </NavLink>

        <NavLink
          to="/suppliers"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 21V5h11v16" />
            <path d="M15 9h4l2 3v9h-6" />
            <path d="M7 8h2M7 12h2M7 16h2" />
            <path d="M18 16h.01" />
          </svg>

          <span>Fournisseurs</span>
        </NavLink>

        <NavLink
          to="/deliveries"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h11v11H3z" />
            <path d="M14 10h4l3 3v4h-7z" />
            <circle cx="7" cy="19" r="2" />
            <circle cx="18" cy="19" r="2" />
          </svg>

          <span>Livraisons</span>
        </NavLink>

        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
          </svg>

          <span>Avis clients</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">AUTRES</p>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.8 1.8 0 0 0 .3 2l.1.1-2.2 2.2-.1-.1a1.8 1.8 0 0 0-2-.3 1.8 1.8 0 0 0-1.1 1.7v.1h-3v-.1a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .3l-.1.1-2.2-2.2.1-.1a1.8 1.8 0 0 0 .3-2 1.8 1.8 0 0 0-1.7-1.1h-.1v-3h.1a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.3-2l-.1-.1 2.2-2.2.1.1a1.8 1.8 0 0 0 2 .3 1.8 1.8 0 0 0 1.1-1.7V4h3v.1a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.3l.1-.1 2.2 2.2-.1.1a1.8 1.8 0 0 0-.3 2 1.8 1.8 0 0 0 1.7 1.1h.1v3h-.1a1.8 1.8 0 0 0-1.7 1.2Z" />
          </svg>

          <span>Paramètres</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 19V5" />
            <path d="M4 19h17" />
            <path d="m7 15 4-4 3 2 5-6" />
            <path d="M16 7h3v3" />
          </svg>

          <span>Rapports & analyses</span>
        </NavLink>
      </div>

      {/* SUPPORT */}
      <div className="sidebar-support">
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.8c-1 .8-1.8 1.3-1.8 2.7" />
            <circle cx="12" cy="17" r=".8" fill="currentColor" />
          </svg>

          <span>Aide & support</span>

          <svg
            className="external-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M14 5h5v5" />
            <path d="M19 5l-8 8" />
            <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
          </svg>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
