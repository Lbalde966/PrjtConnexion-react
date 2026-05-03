# PrjtConnexion-react

Cette application est un système d'authentification complet (Full-Stack) comprenant une interface utilisateur développée en React et un serveur backend en Node.js/Express. Le projet gère la saisie des identifiants, leur vérification côté serveur, et la restriction d'accès à certaines pages (routes protégées) en fonction du statut de connexion de l'utilisateur.

index.js (Point d'entrée React) : C'est le point de départ de l'interface utilisateur. Il initialise l'application React et l'enveloppe dans un composant BrowserRouter, ce qui permet de gérer la navigation entre les différentes pages sans avoir à recharger le site.

App.js : C'est le composant principal qui organise la structure de l'application. Il affiche par défaut la page de connexion (SignIn) et déclare une route spécifique (ProtectedRoute) contenant le contenu sécurisé ("You are authenticated!") réservé aux utilisateurs connectés.

SignIn.js : Composant React qui affiche et gère le formulaire de connexion (nom d'utilisateur et mot de passe). Il vérifie que les champs ne sont pas vides (et affiche un message d'erreur si c'est le cas), puis envoie les données au serveur via une requête POST. Si l'authentification est validée par le serveur, il redirige l'utilisateur vers la route protégée.

ProtectedRoute.js : Il s'agit d'un composant de sécurité personnalisé agissant comme un "videur" pour vos routes React. Il vérifie dans la mémoire locale (localStorage) si l'utilisateur possède un jeton d'authentification valide. S'il est authentifié, il le laisse accéder à la page demandée ; sinon, il le redirige automatiquement vers la page d'accueil pour se connecter.

server.js (Backend Node.js/Express) : C'est le serveur API qui tourne sur le port 3000. Il réceptionne les requêtes d'authentification sur la route /api/authenticate, analyse les données (grâce à body-parser), et vérifie si le couple utilisateur/mot de passe existe dans ses données. Si les identifiants sont corrects, il renvoie une confirmation positive et crée un cookie sécurisé (httpOnly) pour maintenir la session.
