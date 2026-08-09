import { Inbox } from "lucide-react";

function EmptyState({
  icon: Icon = Inbox,
  title = "Aucun élément trouvé",
  description = "Il n'y a aucune donnée à afficher pour le moment.",
  action = null,
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <Icon size={32} strokeWidth={1.7} />
      </div>

      <h3 className="empty-state-title">
        {title}
      </h3>

      <p className="empty-state-description">
        {description}
      </p>

      {action && (
        <div className="empty-state-action">
          {action}
        </div>
      )}
    </div>
  );
}

export default EmptyState;