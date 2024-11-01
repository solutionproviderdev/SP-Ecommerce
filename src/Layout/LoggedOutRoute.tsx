
import { Outlet, Navigate } from 'react-router-dom';

const LoggedOutRoute = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default LoggedOutRoute;
