const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//les utilisateurs peuvent se connecter et accéder à un itinéraire protégé si leurs informations d'identification sont valides


app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);
  //Si le user et password sont valides, un cookie HTTP-only authenticated est défini à true

  if (user) {
    res.json({ authenticated: true });
    // Défini le jeton d'authentification dans la mémoire locale
    res.cookie('authenticated', true, { httpOnly: true });
    //Sinon ne la mets pas dans la mémoire locale
  } else {
    res.json({ authenticated: false });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});