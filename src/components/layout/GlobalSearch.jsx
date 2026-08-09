import { Search } from "lucide-react";
import Input from "../../components/ui/Input";

function GlobalSearch() {
  return (
    <div className="global-search">
      <Input
        type="search"
        placeholder="Rechercher un produit, une commande, un client..."
        aria-label="Recherche globale"
        startIcon={
          <Search
            size={17}
            aria-hidden="true"
          />
        }
        endContent={
          <kbd>⌘ K</kbd>
        }
      />
    </div>
  );
}

export default GlobalSearch;