/**
 * Authorization Roles
 */
const authRoles = {
  super: ["super"],
  admin: ["super", "admin"],
  staff: ["super", "admin", "staff"],
  user: ["super", "admin", "staff", "user"],
  onlyGuest: [],
};

export default authRoles;
