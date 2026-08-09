import { Search } from "lucide-react";

function GlobalSearch() {
  return (
    <div className="global-search">
      <Search
        size={17}
        aria-hidden="true"
      />

      <input
        type="search"
        placeholder="Rechercher un produit, une commande, un client..."
        aria-label="Recherche globale"
      />

      <kbd>⌘ K</kbd>
    </div>
  );
}

export default GlobalSearch;