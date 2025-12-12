// src/api/pedidosApi.js
import { API_URL } from "./config";

// Helper para header con token
function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Crear pedido (desde un carrito)
export async function crearPedido(carritoId) {
  const res = await fetch(`${API_URL}/pedidos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify({ carritoId }),
  });

  if (!res.ok) throw new Error("Error al crear el pedido");

  return await res.json();
}

// Obtener todos los pedidos (admin/empleado) o los del usuario
export async function obtenerPedidos() {
  const res = await fetch(`${API_URL}/pedidos`, {
    method: "GET",
    headers: {
      ...getAuthHeader(),
    },
  });

  if (!res.ok) throw new Error("Error al obtener pedidos");

  return await res.json();
}

// Obtener un pedido específico
export async function obtenerPedido(id) {
  const res = await fetch(`${API_URL}/pedidos/${id}`, {
    method: "GET",
    headers: {
      ...getAuthHeader(),
    },
  });

  if (!res.ok) throw new Error("Error al obtener el pedido");

  return await res.json();
}

// Actualizar estado del pedido (solo admin/empleado)
export async function actualizarPedido(id, estadoPedido) {
  const res = await fetch(`${API_URL}/pedidos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify({ estadoPedido }),
  });

  if (!res.ok) throw new Error("Error al actualizar el pedido");

  return await res.json();
}
