const API_URL = "http://localhost:4000/api/inventarios";

/* =======================================================
   CREAR INVENTARIO
   body:
   {
     productoId,
     cantidad,
     ubicacion
   }
========================================================== */
export const crearInventario = async (data, token) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al crear inventario");
    return await res.json();
};

/* =======================================================
   OBTENER TODOS LOS INVENTARIOS
========================================================== */
export const obtenerInventarios = async (token) => {
    const res = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Error al obtener inventarios");
    return await res.json();
};

/* =======================================================
   OBTENER INVENTARIO POR ID
========================================================== */
export const obtenerInventario = async (id, token) => {
    const res = await fetch(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Error al obtener inventario");
    return await res.json();
};

/* =======================================================
   ACTUALIZAR INVENTARIO COMPLETO
   body:
   {
     cantidad,
     ubicacion
   }
========================================================== */
export const actualizarInventario = async (id, data, token) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al actualizar inventario");
    return await res.json();
};

/* =======================================================
   ACTUALIZAR SOLO CANTIDAD (VENTA/COMPRA)
   body:
   {
     cantidadVendida
   }
========================================================== */
export const actualizarCantidad = async (id, data, token) => {
    const res = await fetch(`${API_URL}/${id}/cantidad`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al actualizar cantidad");
    return await res.json();
};

