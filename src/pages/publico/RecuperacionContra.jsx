import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../api";

function RecuperacionContra() {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/usuarios/olvide-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correoElectronico }),
      });

      const data = await res.json();

      // El backend siempre responde "Si el correo existe..." aunque no exista
      if (!res.ok) {
        setError(data.error || "Error al solicitar código de recuperación");
      } else {
        setMensaje(
          "Si el correo existe, se ha enviado un código de recuperación."
        );
        // Navegar a ModificarContra pasando el correo
        setTimeout(() => {
          navigate(`/modificar-contra?email=${encodeURIComponent(correoElectronico)}`);
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const volverALogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-full flex">
        {/* Lado izquierdo */}
        <div className="w-1/2 flex items-center justify-center px-40">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Recuperación de contraseña
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Por favor, introduce el correo con el que te registraste.
            </p>

            {error && (
              <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded">
                {error}
              </div>
            )}

            {mensaje && (
              <div className="mb-4 text-sm text-green-700 bg-green-100 px-3 py-2 rounded">
                {mensaje}
              </div>
            )}

            <div className="space-y-6">
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

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full h-11 bg-green-600 text-white font-medium rounded-lg
                         hover:bg-green-700 active:bg-green-800
                         disabled:opacity-60 disabled:cursor-not-allowed
                         transition-colors duration-200"
              >
                {loading ? "Enviando..." : "Enviar código"}
              </button>

              <div className="text-center text-sm">
                <button
                  type="button"
                  onClick={volverALogin}
                  className="text-green-600 font-medium hover:text-green-700 
                           active:text-green-800 transition-colors duration-200"
                >
                  Volver a iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lado derecho - Imagen */}
        <div className="w-1/2 bg-gradient-to-br from-pink-50 to-pink-100 
                      flex items-center justify-center p-16">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-12 bg-pink-200"
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

export default RecuperacionContra;
