
import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Redirect to login only if not authenticated and not already on login or signup pages
    if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/signup') {
      navigate('/login');
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
