import { ChevronDown } from "lucide-react";

function UserMenu() {
  return (
    <button
      type="button"
      className="user-menu"
      aria-label="Ouvrir le menu utilisateur"
    >
      <span className="user-avatar">
        GS
      </span>

      <span className="user-name">
        Gelain Sulu
      </span>

      <ChevronDown size={16} />
    </button>
  );
}

export default UserMenu;