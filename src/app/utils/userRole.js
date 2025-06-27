export default function getUserRole() {
  let userRole = localStorage.getItem("role") || sessionStorage.getItem("role");
  return userRole?.replaceAll('"', "") || "";
}
