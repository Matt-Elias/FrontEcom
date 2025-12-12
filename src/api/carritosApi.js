const API_URL = "http://localhost:4000/api/carritos";

/* =======================================================
   CREAR CARRITO
   req.body debe ser:
   { productos: [{ productoId: 1, cantidad: 2 }, ...] }
========================================================== */
export const crearCarrito = async (productos, token) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productos }),
    });

    if (!res.ok) throw new Error("Error al crear carrito");
    return await res.json();
};

/* =======================================================
   OBTENER TODOS LOS CARRITOS
   - Un admin obtiene todos
   - Un cliente solo los suyos
========================================================== */
export const obtenerCarritos = async (token) => {
    const res = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Error al obtener carritos");
    return await res.json();
};

/* =======================================================
   OBTENER UN CARRITO POR ID
========================================================== */
export const obtenerCarrito = async (id, token) => {
    const res = await fetch(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Error al obtener carrito");
    return await res.json();
};

/* =======================================================
   ACTUALIZAR CARRITO
   req.body debe ser:
   { productos: [{ productoId: 1, cantidad: 5 }, ...] }
========================================================== */
export const actualizarCarrito = async (id, productos, token) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productos }),
    });

    if (!res.ok) throw new Error("Error al actualizar carrito");
    return await res.json();
};
