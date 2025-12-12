const API_URL = "http://localhost:4000/api/envios";

/* =======================================================
   CREAR ENVÍO
   body debe incluir:
   {
     id_pedido,
     id_usuario,
     direccion_entrega,
     zona_reparto,
     fecha_salida_estimada,
     fecha_entrega_estimada,
     codigo_seguimiento,
     estado_envio
   }
========================================================== */
export const crearEnvio = async (data, token) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al crear envío");
    return await res.json();
};

/* =======================================================
   OBTENER TODOS LOS ENVÍOS
   - Admin/Empleado ven todos
   - Cliente solo los suyos
========================================================== */
export const obtenerEnvios = async (token) => {
    const res = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Error al obtener envíos");
    return await res.json();
};

/* =======================================================
   OBTENER ENVÍOS DE UN USUARIO ESPECÍFICO
   Roles permitidos:
   - admin
   - empleado
   - o el mismo usuario dueño del envío
========================================================== */
export const obtenerEnviosPorUsuario = async (usuarioId, token) => {
    const res = await fetch(`${API_URL}/usuario/${usuarioId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Error al obtener envíos del usuario");
    return await res.json();
};
