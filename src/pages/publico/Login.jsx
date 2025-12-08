import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica de login
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Contenedor principal con sistema de 12 columnas */}
      <div className="w-full flex">
        
        {/* Lado izquierdo - Formulario */}
        <div className="w-1/2 flex items-center justify-center px-40">
          <div className="w-full max-w-md">
            
            {/* Título */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Bienvenido de vuelta!
            </h1>
            
            {/* Subtítulo */}
            <p className="text-sm text-gray-600 mb-8">
              Por favor, ingrese sus credenciales para poder ingresar.
            </p>

            {/* Contenedor del formulario */}
            <div className="space-y-6">
              
              {/* Campo Email */}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresá tu correo electrónico"
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-200"
                />
              </div>

              {/* Campo Contraseña */}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresá tu contraseña"
                    className="w-full h-11 px-4 pr-12 border border-gray-300 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                             transition-all duration-200"
                  />
                  {/* Botón toggle password con área de click de 44x44 */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 
                             flex items-center justify-center text-gray-500 
                             hover:text-gray-700 transition-colors duration-200"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-6 h-6" />
                    ) : (
                      <AiOutlineEye className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              {/* Link olvidaste contraseña */}
              <div className="text-right">
                <button 
                  type="button"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Botón Iniciar Sesión */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full h-11 bg-green-600 text-white font-medium rounded-lg
                         hover:bg-green-700 active:bg-green-800
                         transition-colors duration-200"
              >
                Iniciar Sesión
              </button>

              {/* Link crear cuenta */}
              <div className="text-center text-sm">
                <span className="text-gray-600">¿Aún no tienes una cuenta? </span>
                <button 
                  type="button"
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
        {/** <div className="w-1/2 bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-16"> */}
        <div className="w-1/2 bg-gradient-to-br from-white to-white flex items-center justify-center p-16">
          
          <div className="relative w-full max-w-xl">
            {/* Patrón de rayas verticales */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  //className="absolute top-0 bottom-0 w-12 bg-pink-200"
                  className="absolute top-0 bottom-0 w-12 bg-white"
                  style={{ left: `${i * 12.5}%` }}
                />
              ))}
            </div>
            
            {/* Imagen más grande */}
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

