import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
 
const LoggedInRoute: React.FC = () => {
	const auth = useAuth();
	return auth.isLoggedIn ? <Outlet /> : <Navigate to="/authentication/login" />;
};

export default LoggedInRoute;
