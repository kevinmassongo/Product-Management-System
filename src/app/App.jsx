import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import "../styles/App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="layout-row">

        <Sidebar />

        <div className="layout-column">
          <div className="content">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}