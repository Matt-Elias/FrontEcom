import { useState } from "react";
import Login from "./pages/publico/Login";
import RecuperacionContra from "./pages/publico/RecuperacionContra";
import CrearCuenta from "./pages/publico/CrearCuenta";
import Navbar from "./components/Navbar";
import PerfilUsuario from "./pages/todos/PerfilUsuario";
import ModificarContra from "./pages/publico/ModificarContra";
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
import CrudProducto from "./pages/admin/producto/CrudProducto";
import CrudUsuario from "./pages/admin/usuario/CrudUsuario";
import AgregarUsuario from "./pages/admin/usuario/AgregarUsuario";
import AgregarCategoria from "./pages/admin/categoria/AgregarCategoria"
import AgregarProducto from "./pages/admin/producto/AgregarProducto";
import HomeEmpleado from "./pages/empleado/HomeEmpleado";
import AprobarPedido from "./pages/empleado/AprobarPedido";
import ConfirmarEntrega from "./pages/empleado/ConfirmarEntrega";
import PedidoEnCamino from "./pages/empleado/PedidoEnCamino";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar /> 
      <ConfirmarEntrega/> 
    </>
  );
}

export default App;

