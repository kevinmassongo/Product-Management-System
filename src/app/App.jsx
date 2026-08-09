import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import "../styles/App.css";

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="layout-column">
        <Header />

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}