import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../api";

function CrearCuenta() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1); // 1: datos, 2: código
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError("");
    setMensaje("");

    if (formData.contrasena !== formData.confirmarContrasena) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/usuarios/registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombres,
          apellidoPaterno: formData.apellidoPaterno,
          apellidoMaterno: formData.apellidoMaterno,
          correoElectronico: formData.correo,
          contrasena: formData.contrasena,
          estadoPais: null,
          ciudad: null,
          direccion: null,
          codigoPostal: null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al registrar usuario");
        setLoading(false);
        return;
      }

      setMensaje(
        "Registro exitoso. Hemos enviado un código a tu correo para verificar tu cuenta."
      );
      setStep(2); // pasar a pantalla de código
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const handleVerificarCuenta = async (e) => {
    e.preventDefault();
    setError("");
    setMensaje("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/usuarios/verificar-cuenta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correoElectronico: formData.correo,
          codigo,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al verificar cuenta");
        setLoading(false);
        return;
      }

      setMensaje("Cuenta verificada correctamente. Ya puedes iniciar sesión.");
      // Podrías guardar token aquí si quieres logear automáticamente.
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const irALogin = () => {
    navigate("/login");
  };

  // Iconos SVG
  const EyeIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12">
      <div className="w-full max-w-4xl px-40">
        {step === 1 && (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              ¡Cree su cuenta ahora!
            </h1>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Por favor, proporcione la siguiente información para crear su cuenta.
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
              {/* Fila 1 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="nombres"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombres (s)*
                  </label>
                  <input
                    id="nombres"
                    name="nombres"
                    type="text"
                    value={formData.nombres}
                    onChange={handleChange}
                    placeholder="Ingresá tu nombre(s)"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="apellidoPaterno"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Apellido paterno*
                  </label>
                  <input
                    id="apellidoPaterno"
                    name="apellidoPaterno"
                    type="text"
                    value={formData.apellidoPaterno}
                    onChange={handleChange}
                    placeholder="Ingresá tu apellido paterno"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>
              </div>

              {/* Fila 2 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="apellidoMaterno"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Apellido materno*
                  </label>
                  <input
                    id="apellidoMaterno"
                    name="apellidoMaterno"
                    type="text"
                    value={formData.apellidoMaterno}
                    onChange={handleChange}
                    placeholder="Ingresá tu apellido materno"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

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
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="Ingresá tu correo electrónico"
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>
              </div>

              {/* Fila 3 */}
              <div className="grid grid-cols-2 gap-6">
                {/* Contraseña */}
                <div>
                  <label
                    htmlFor="contrasena"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contraseña*
                  </label>
                  <div className="relative">
                    <input
                      id="contrasena"
                      name="contrasena"
                      type={showPassword ? "text" : "password"}
                      value={formData.contrasena}
                      onChange={handleChange}
                      placeholder="Ingresá tu contraseña"
                      className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg text-sm
                               focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                               transition-all duración-200"
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
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
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
                      value={formData.confirmarContrasena}
                      onChange={handleChange}
                      placeholder="Confirmá tu contraseña"
                      className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg text-sm
                               focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                               transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                               flex items-center justify-center text-gray-500 
                               hover:text-gray-700 transition-colors duration-200"
                      aria-label={
                        showConfirmPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Ya tienes cuenta */}
              <div className="text-right text-sm">
                <span className="text-gray-600">¿Ya tienes una cuenta? </span>
                <button
                  type="button"
                  onClick={irALogin}
                  className="text-green-600 font-medium hover:text-green-700 
                           active:text-green-800 transition-colors duration-200"
                >
                  Inicia sesión
                </button>
              </div>

              {/* Botón */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleRegistro}
                  disabled={loading}
                  className="w-32 h-11 bg-green-600 text-white font-medium rounded-lg
                           hover:bg-green-700 active:bg-green-800
                           disabled:opacity-60 disabled:cursor-not-allowed
                           transition-colors duración-200"
                >
                  {loading ? "Enviando..." : "Registrarse"}
                </button>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Verificar cuenta
            </h1>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Hemos enviado un código de verificación a:{" "}
              <span className="font-semibold">{formData.correo}</span>
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
                  htmlFor="codigo"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Código de verificación*
                </label>
                <input
                  id="codigo"
                  type="text"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  placeholder="Ingresa el código de 6 dígitos"
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-200"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="h-11 px-6 bg-gray-300 text-gray-800 font-medium rounded-lg
                           hover:bg-gray-400 active:bg-gray-500
                           transition-colors duration-200"
                >
                  Volver
                </button>

                <button
                  type="button"
                  onClick={handleVerificarCuenta}
                  disabled={loading}
                  className="h-11 px-6 bg-green-600 text-white font-medium rounded-lg
                           hover:bg-green-700 active:bg-green-800
                           disabled:opacity-60 disabled:cursor-not-allowed
                           transition-colors duration-200"
                >
                  {loading ? "Verificando..." : "Verificar cuenta"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CrearCuenta;
