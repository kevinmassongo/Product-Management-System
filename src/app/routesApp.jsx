import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../app/App";
import OrdersPage from "../pages/OrdersPage";
import ProductsPage from "../pages/ProductsPage";
import Categories from "../pages/CategoriesPage";
import Userspage from "../pages/CustomersPage";
import CategoriesPage from "../pages/CategoriesPage";
import CustomersPage from "../pages/CustomersPage";
import ReviewsPage from "../pages/ReviewsPage";
import ReportsPage from "../pages/ReportsPage";
import SupportPage from "../pages/SupportPage";
import Settingspage from "../pages/Settingspage";
import SuppliersPage from "../pages/SuppliersPage";
import DashboardPage from "../pages/DashboardPage";
import PromotionsPage from "../pages/PromotionsPage";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/users" element={<CustomersPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/settings" element={<Settingspage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
