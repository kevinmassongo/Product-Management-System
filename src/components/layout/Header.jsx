import Breadcrumb from "./Breadcrumb";
import GlobalSearch from "./GlobalSearch";
import NotificationButton from "./NotificationButton";
import UserMenu from "./UserMenu";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Breadcrumb />
      </div>

      <div className="header-center">
        <GlobalSearch />
      </div>

      <div className="header-right">
        <NotificationButton />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;