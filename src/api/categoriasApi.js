// src/api/categoriasApi.js
const API_URL = "http://localhost:4000/api/categorias";

// GET → Obtener todas
export const obtenerCategorias = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) {
        throw new Error("Error al obtener categorías");
    }
    return await res.json();
};

// GET → Obtener una por ID
export const obtenerCategoria = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Error al obtener categoría");
    }
    return await res.json();
};

// POST → Crear (con token)
export const crearCategoria = async (categoria, token) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(categoria),
    });

    if (!res.ok) {
        throw new Error("Error al crear categoría");
    }

    return await res.json();
};

// PUT → Actualizar
export const actualizarCategoria = async (id, data, token) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Error al actualizar categoría");
    }

    return await res.json();
};

