import { Bell } from "lucide-react";

function NotificationButton() {
  return (
    <button className="notification-button">
      <Bell size={20} />

      <span className="notification-badge">5</span>
    </button>
  );
}

export default NotificationButton;
