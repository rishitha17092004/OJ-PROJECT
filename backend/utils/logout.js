export const logoutUser = (navigate) => {
  localStorage.removeItem('token');
  localStorage.removeItem('tempToken');
  navigate('/');
};
