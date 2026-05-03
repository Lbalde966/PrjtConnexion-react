import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ children, ...rest }) {
  const isAuthenticated = localStorage.getItem('authenticated');

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest}>{children}</Route>;
}

export default ProtectedRoute;
//vérifie si l'utilisateur est authentifié avant de l'autoriser à accéder à une certaine page