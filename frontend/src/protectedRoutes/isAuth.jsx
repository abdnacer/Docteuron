export const isAuth = () => {
  const role = JSON.parse(localStorage.getItem("user"));
  if (role) return role.role;
  else return false;
};
