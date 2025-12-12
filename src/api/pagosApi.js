import { API_URL } from "./config";  

// Helper para configurar headers con token
function getHeaders(isJson = true) {
  const token = localStorage.getItem("token");

  return {
    ...(isJson && { "Content-Type": "application/json" }),
    Authorization: token ? `Bearer ${token}` : "",
  };
}

// -------------------------
// Crear un pago
// -------------------------
export async function crearPago(data) {
  try {
    const res = await fetch(`${API_URL}/pagos`, {
      method: "POST",
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Error al crear pago");
    return json;
  } catch (error) {
    console.error("Error crearPago:", error);
    throw error;
  }
}

// -------------------------
// Obtener lista de pagos
// -------------------------
export async function obtenerPagos() {
  try {
    const res = await fetch(`${API_URL}/pagos`, {
      method: "GET",
      headers: getHeaders(),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Error al obtener pagos");
    return json;
  } catch (error) {
    console.error("Error obtenerPagos:", error);
    throw error;
  }
}

// -------------------------
// Obtener pago por ID
// -------------------------
export async function obtenerPago(id) {
  try {
    const res = await fetch(`${API_URL}/pagos/${id}`, {
      method: "GET",
      headers: getHeaders(),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Error al obtener pago");
    return json;
  } catch (error) {
    console.error("Error obtenerPago:", error);
    throw error;
  }
}

// -------------------------
// Actualizar estado del pago
// -------------------------
export async function actualizarEstadoPago(id, estado_pago) {
  try {
    const res = await fetch(`${API_URL}/pagos/${id}`, {
      method: "PUT",
      headers: getHeaders(true),
      body: JSON.stringify({ estado_pago }),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Error al actualizar estado del pago");
    return json;
  } catch (error) {
    console.error("Error actualizarEstadoPago:", error);
    throw error;
  }
}
