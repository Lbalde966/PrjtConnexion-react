import React from 'react';
import SignIn from './SignIn';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div>
      <SignIn />
      <ProtectedRoute path="/protected">
        <h1>Protected Route</h1>
        <p>You are authenticated!</p>
      </ProtectedRoute>
    </div>
  );
}

export default App;
//Vérifie si le user et bien connecté et s'il n'est pas il lui transfére dans la page d'accueil