create - React - app
import React, { useState } from 'react';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    // 3 variables: username/password/useState et error pour les messages de erreur

    function handleSubmit(event) {
        event.preventDefault();
        if (username === '' || password === '') {
            //si les cases "username" et "password"sont vides
            setError('veulliez remplir le username et password');
            //il affiche un message d'erreur disant "veuillez saisir le nom d'utilisateur et le mot de passe"
        } else {
            fetch('/api/authenticate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                //Si non envoie une requête au serveur pour vérifier si le nom d'utilisateur et le mot de passe sont corrects
            })

            .then((response) => response.json())
                .then((data) => {
                    if (data.authenticated) {
                        window.location.href = '/ProtectedRoute';
                    } else {
                        setError('username ou password invalide');
                    }
                })
                .catch((error) => {
                    setError('Erreur authentification du user');
                });
            //Traite la réponse du serveur : en cas d'authentification, rediriger vers la route protégée, sinon afficher un message d'erreur
        }
    }

    return ( <
        div >
        <
        h1 > Sign In < /h1> <
        form onSubmit = { handleSubmit } >
        <
        label >

        Username:
        <
        input type = "text"
        value = { username }
        onChange = {
            (event) => setUsername(event.target.value) }
        /> <
        /label>
        //fd//
        <
        br / >
        <
        label >

        Password:
        <
        input type = "password"
        value = { password }
        onChange = {
            (event) => setPassword(event.target.value) }
        /> <
        /label>

        <
        br / >
        <
        button type = "submit" > Sign In < /button> <
        /form>

        {
            error && < div style = {
                    { color: 'red' } } > { error } < /div>} <
                /div>
                //formulaire de connexion avec un bouton et un message de erreur en cas d'echec de l'authentification 
        );
    }

    export default SignIn;