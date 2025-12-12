import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "./utils/auth";

// Componentes
import Navbar from "./components/Navbar";

import Login from "./pages/publico/Login";
import CrearCuenta from "./pages/publico/CrearCuenta";
import RecuperacionContra from "./pages/publico/RecuperacionContra";
import ModificarContra from "./pages/publico/ModificarContra";

import PerfilUsuario from "./pages/todos/PerfilUsuario";

import HomeCliente from "./pages/cliente/HomeCliente";
import InfoProducto from "./pages/cliente/InfoProducto";
import CarritoCompras from "./pages/cliente/CarritoCompras";
import PrCompra1 from "./pages/cliente/ProcesoCompra/PrCompra1";
import PrCompra2 from "./pages/cliente/ProcesoCompra/PrCompra2";
import PrCompra3 from "./pages/cliente/ProcesoCompra/PrCompra3";
import PrCompra4 from "./pages/cliente/ProcesoCompra/PrCompra4";
import ProcesoEntrega from "./pages/cliente/ProcesoEntrega";

import HomeAdmin from "./pages/admin/HomeAdmin";
import CrudCategoria from "./pages/admin/categoria/CrudCategoria";
import AgregarCategoria from "./pages/admin/categoria/AgregarCategoria";
import CrudProducto from "./pages/admin/producto/CrudProducto";
import AgregarProducto from "./pages/admin/producto/AgregarProducto";
import CrudUsuario from "./pages/admin/usuario/CrudUsuario";
import AgregarUsuario from "./pages/admin/usuario/AgregarUsuario";

import HomeEmpleado from "./pages/empleado/HomeEmpleado";
import AprobarPedido from "./pages/empleado/AprobarPedido";
import ConfirmarEntrega from "./pages/empleado/ConfirmarEntrega";
import PedidoEnCamino from "./pages/empleado/PedidoEnCamino";

// Rutas que NO deben mostrar navbar
const noNavbarRoutes = [
  "/login",
  "/crear-cuenta",
  "/recuperar-contra",
  "/modificar-contra"
];

function App() {
  const location = useLocation();
  const showNavbar = isAuthenticated() && !noNavbarRoutes.includes(location.pathname);

  return (
    <>

      {showNavbar && <Navbar />}

      <div className={showNavbar ? "pt-4" : ""}>
        <Routes>

          {/* Rutas públicas */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route path="/recuperar-contra" element={<RecuperacionContra />} />
          <Route path="/modificar-contra" element={<ModificarContra />} />

          {/* Perfil */}
          <Route path="/perfil" element={<PerfilUsuario />} />

          {/* Cliente */}
          <Route path="/cliente/home" element={<HomeCliente />} />
          <Route path="/cliente/producto/:id" element={<InfoProducto />} />
          <Route path="/cliente/carrito" element={<CarritoCompras />} />
          <Route path="/cliente/compra/paso-1" element={<PrCompra1 />} />
          <Route path="/cliente/compra/paso-2" element={<PrCompra2 />} />
          <Route path="/cliente/compra/paso-3" element={<PrCompra3 />} />
          <Route path="/cliente/compra/paso-4" element={<PrCompra4 />} />
          <Route path="/cliente/entrega" element={<ProcesoEntrega />} />

          {/* Admin */}
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/categorias" element={<CrudCategoria />} />
          <Route path="/admin/categorias/agregar" element={<AgregarCategoria />} />
          <Route path="/admin/productos" element={<CrudProducto />} />
          <Route path="/admin/productos/agregar" element={<AgregarProducto />} />
          <Route path="/admin/usuarios" element={<CrudUsuario />} />
          <Route path="/admin/usuarios/agregar" element={<AgregarUsuario />} />

          {/* Empleado */}
          <Route path="/empleado" element={<HomeEmpleado />} />
          <Route path="/empleado/aprobar-pedido" element={<AprobarPedido />} />
          <Route path="/empleado/confirmar-entrega" element={<ConfirmarEntrega />} />
          <Route path="/empleado/pedido-en-camino" element={<PedidoEnCamino />} />

          {/* 404 */}
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </div>

    </>
  );
}

export default App;