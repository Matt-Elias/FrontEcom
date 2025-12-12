const API_URL = "http://localhost:4000/api"; // Ajusta tu URL base

// ----------------------------------------
// Crear producto
// ----------------------------------------
export const crearProducto = async (productoData) => {
  try {
    const res = await fetch(`${API_URL}/productos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoData),
    });

    if (!res.ok) throw new Error("Error al crear producto");
    return await res.json();
  } catch (error) {
    console.error("crearProducto:", error);
    throw error;
  }
};

// ----------------------------------------
// Obtener todos los productos
// ----------------------------------------
export const obtenerProductos = async () => {
  try {
    const res = await fetch(`${API_URL}/productos`);
    if (!res.ok) throw new Error("Error al obtener productos");
    return await res.json();
  } catch (error) {
    console.error("obtenerProductos:", error);
    throw error;
  }
};

// ----------------------------------------
// Obtener producto por ID
// ----------------------------------------
export const obtenerProducto = async (id) => {
  try {
    const res = await fetch(`${API_URL}/productos/${id}`);
    if (!res.ok) throw new Error("Error al obtener producto");
    return await res.json();
  } catch (error) {
    console.error("obtenerProducto:", error);
    throw error;
  }
};

// ----------------------------------------
// Actualizar producto parcialmente (PATCH)
// ----------------------------------------
export const actualizarProducto = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/productos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al actualizar producto");
    return await res.json();
  } catch (error) {
    console.error("actualizarProducto:", error);
    throw error;
  }
};

// ----------------------------------------
// Actualizar producto completo (PUT)
// ----------------------------------------
export const actualizarProductoCompleto = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/productos/completo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al actualizar producto completo");
    return await res.json();
  } catch (error) {
    console.error("actualizarProductoCompleto:", error);
    throw error;
  }
};
