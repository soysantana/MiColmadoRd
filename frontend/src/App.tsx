import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/login/page";
import RegisterPage from "./pages/signup/page";
import VentaPage from "./pages/venta/page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route path="/sale" element={<VentaPage />} />
      
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}

export default App;