import { useState } from "react";

function CrearCuenta() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica de registro
    console.log("Registrar usuario:", formData);
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
      {/* Contenedor principal */}
      <div className="w-full max-w-4xl px-40">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          ¡Cree su cuenta ahora!
        </h1>
        
        {/* Subtítulo */}
        <p className="text-sm text-gray-600 mb-8 text-center">
          Por favor, proporcione la siguiente información para crear su cuenta.
        </p>

        {/* Formulario */}
        <div className="space-y-6">
          
          {/* Fila 1: Nombres y Apellido Paterno */}
          <div className="grid grid-cols-2 gap-6">
            {/* Nombres */}
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

            {/* Apellido Paterno */}
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

          {/* Fila 2: Apellido Materno y Correo */}
          <div className="grid grid-cols-2 gap-6">
            {/* Apellido Materno */}
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

            {/* Correo Electrónico */}
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

          {/* Fila 3: Contraseña y Confirmar Contraseña */}
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
                           transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                           flex items-center justify-center text-gray-500 
                           hover:text-gray-700 transition-colors duration-200"
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Confirmar Contraseña */}
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
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                           flex items-center justify-center text-gray-500 
                           hover:text-gray-700 transition-colors duration-200"
                  aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
          </div>

          {/* Link ya tienes cuenta */}
          <div className="text-right text-sm">
            <span className="text-gray-600">¿Ya tienes una cuenta? </span>
            <button 
              type="button"
              className="text-green-600 font-medium hover:text-green-700 
                       active:text-green-800 transition-colors duration-200"
            >
              Inicia sesión
            </button>
          </div>

          {/* Botón Registrarse */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-32 h-11 bg-green-600 text-white font-medium rounded-lg
                       hover:bg-green-700 active:bg-green-800
                       transition-colors duration-200"
            >
              Registrarse
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CrearCuenta;
