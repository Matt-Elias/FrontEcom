export function isAuthenticated() {
  return !!localStorage.getItem("token"); // true si existe token
}
