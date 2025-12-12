import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../../api";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ModificarContra() {
  const query = useQuery();
  const navigate = useNavigate();

  // Si vienes desde /recuperar-contra, el correo llega por query param ?email=
  const emailFromQuery = query.get("email") || "";

  const [correoElectronico, setCorreoElectronico] = useState(emailFromQuery);
  const [codigo, setCodigo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleCambiar = async (e) => {
    e.preventDefault();
    setError("");
    setMensaje("");

    if (!correoElectronico || !codigo || !contrasena || !confirmarContrasena) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/usuarios/restablecer-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correoElectronico,
          codigo,
          nuevaContrasena: contrasena,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al restablecer contraseña");
      } else {
        setMensaje("Contraseña actualizada correctamente. Ahora puedes iniciar sesión.");
        // Después de unos segundos, regresar al login
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelar = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="w-full max-w-4xl px-40">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Restablecer contraseña
        </h1>

        <p className="text-sm text-gray-600 mb-8 text-center">
          Ingresa el código que enviamos a tu correo y tu nueva contraseña.
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded text-center">
            {error}
          </div>
        )}

        {mensaje && (
          <div className="mb-4 text-sm text-green-700 bg-green-100 px-3 py-2 rounded text-center">
            {mensaje}
          </div>
        )}

        <div className="space-y-6">
          {/* Correo (por si el usuario llega sin query param o quiere corregirlo) */}
          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Correo electrónico*
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
              placeholder="Ingresá tu correo electrónico"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                       transition-all duration-200"
            />
          </div>

          {/* Código de verificación */}
          <div>
            <label
              htmlFor="codigo"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Código de verificación*
            </label>
            <input
              id="codigo"
              name="codigo"
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Ingresa el código que llegó a tu correo"
              className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                       transition-all duration-200"
            />
          </div>

          {/* Fila con dos campos de contraseña */}
          <div className="grid grid-cols-2 gap-6">
            {/* Nueva contraseña */}
            <div>
              <label
                htmlFor="contrasena"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nueva contraseña*
              </label>
              <div className="relative">
                <input
                  id="contrasena"
                  name="contrasena"
                  type={showPassword ? "text" : "password"}
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  placeholder="Ingresá tu nueva contraseña"
                  className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                           flex items-center justify-center text-green-600 
                           hover:text-green-700 transition-colors duration-200"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={24} />
                  ) : (
                    <AiOutlineEye size={24} />
                  )}
                </button>
              </div>
            </div>

            {/* Confirmar contraseña */}
            <div>
              <label
                htmlFor="confirmarContrasena"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirmar contraseña*
              </label>
              <div className="relative">
                <input
                  id="confirmarContrasena"
                  name="confirmarContrasena"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmarContrasena}
                  onChange={(e) => setConfirmarContrasena(e.target.value)}
                  placeholder="Confirmá tu nueva contraseña"
                  className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                           flex items-center justify-center text-green-600 
                           hover:text-green-700 transition-colors duration-200"
                  aria-label={
                    showConfirmPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible size={24} />
                  ) : (
                    <AiOutlineEye size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={handleCancelar}
              className="h-11 px-8 bg-gray-400 text-white font-medium rounded-lg
                       hover:bg-gray-500 active:bg-gray-600
                       transition-colors duration-200"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={handleCambiar}
              disabled={loading}
              className="h-11 px-8 bg-orange-500 text-white font-medium rounded-lg
                       hover:bg-orange-600 active:bg-orange-700
                       disabled:opacity-60 disabled:cursor-not-allowed
                       transition-colors duration-200"
            >
              {loading ? "Guardando..." : "Cambiar contraseña"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModificarContra;
