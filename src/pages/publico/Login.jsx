import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../api";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correoElectronico, contrasena }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al iniciar sesión");
        setLoading(false);
        return;
      }

      // Guardar token y usuario en localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      // Redirigir según Rol
      if (data.usuario.Rol === "admin") {
        navigate("/admin");
      } else if (data.usuario.Rol === "empleado") {
        navigate("/empleado");
      } else {
        navigate("/cliente/home");
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const irARecuperarContra = () => {
    navigate("/recuperar-contra");
  };

  const irACrearCuenta = () => {
    navigate("/crear-cuenta");
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-full flex">
        {/* Lado izquierdo - Formulario */}
        <div className="w-1/2 flex items-center justify-center px-40">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Bienvenido de vuelta!
            </h1>

            <p className="text-sm text-gray-600 mb-4">
              Por favor, ingrese sus credenciales para poder ingresar.
            </p>

            {error && (
              <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded">
                {error}
              </div>
            )}

            <div className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Correo electrónico*
                </label>
                <input
                  id="email"
                  type="email"
                  value={correoElectronico}
                  onChange={(e) => setCorreoElectronico(e.target.value)}
                  placeholder="Ingresá tu correo electrónico"
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-200"
                />
              </div>

              {/* Contraseña */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contraseña*
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    placeholder="Ingresá tu contraseña"
                    className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                             flex items-center justify-center text-gray-500 
                             hover:text-gray-700 transition-colors duration-200"
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-6 h-6" />
                    ) : (
                      <AiOutlineEye className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              {/* Olvidaste contraseña */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={irARecuperarContra}
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Botón login */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full h-11 bg-green-600 text-white font-medium rounded-lg
                         hover:bg-green-700 active:bg-green-800
                         disabled:opacity-60 disabled:cursor-not-allowed
                         transition-colors duration-200"
              >
                {loading ? "Iniciando..." : "Iniciar Sesión"}
              </button>

              {/* Crear cuenta */}
              <div className="text-center text-sm">
                <span className="text-gray-600">
                  ¿Aún no tienes una cuenta?{" "}
                </span>
                <button
                  type="button"
                  onClick={irACrearCuenta}
                  className="text-green-600 font-medium hover:text-green-700 
                           active:text-green-800 transition-colors duration-200"
                >
                  Crea una
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lado derecho - Imagen */}
        <div className="w-1/2 bg-gradient-to-br from-white to-white flex items-center justify-center p-16">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-12 bg-white"
                  style={{ left: `${i * 12.5}%` }}
                />
              ))}
            </div>
            <div className="relative z-10 flex items-center justify-center">
              <img
                src="/src/assets/image 36.svg"
                alt="Ilustración de lectura"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
