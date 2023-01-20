/*const { Client } = require('pg')
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

client.connect()

const text = 'INSERT INTO form_profil(nom, prenom, age) VALUES($1, $2, $3)'
const values = ['John', 'Doe', 25]

client.query(text, values)
  .then(res => {
    console.log(res.rows[0])
    client.end()
  })
  .catch(e => {
    console.error(e.stack)
    client.end()
  })

/*Assurez-vous d'avoir également les variables d'environnement pour la chaine de connexion à la base de données configurées avant de lancer ce code.
Gael Mukendi
ajoute ca au code quand on clickera sur le bouton submit du form il faut exécuté la Querie INSERT INTO profile ( " toutes les colonnes de la table profile") VALUES ($1, $2, $3, ...)

Pour exécuter la requête SQL INSERT lorsque l'utilisateur clique sur le bouton "submit" d'un formulaire, vous pouvez utiliser JavaScript pour écouter l'événement "submit" du formulaire et exécuter la requête SQL lorsque l'événement est déclenché. Voici un exemple de code qui montre comment cela peut être fait :*/

/*const form = document.getElementById('form-profil');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const age = document.getElementById('age').value;
    // Ajoutez ici toutes les autres variables pour les champs de formulaire supplémentaires
    const text = 'INSERT INTO form_profil(nom, prenom, age) VALUES($1, $2, $3)';
    const values = [nom, prenom, age];
    // Ajoutez ici les valeurs pour les autres champs de formulaire
    client.query(text, values)
    .then(res => {
        console.log("Data inserted");
    })
    .catch(e => {
        console.error(e.stack);
    });
});

Ce code suppose que vous avez déjà configuré une connexion à votre base de données via la bibliothèque "pg" comme indiqué dans mon précédent message. Il récupère les valeurs saisies dans les champs du formulaire en utilisant les méthodes value des éléments de formulaire, puis construit et exécute la requête SQL INSERT en utilisant ces valeurs.



const form = document.getElementById('form-profil');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const age = document.getElementById('age').value;
    // Ajoutez ici toutes les autres variables pour les champs de formulaire supplémentaires
    const text = 'INSERT INTO form_profil(nom, prenom, age) VALUES($1, $2, $3)';
    const values = [nom, prenom, age];
    // Ajoutez ici les valeurs pour les autres champs de formulaire
    client.query(text, values)
    .then(res => {
        console.log("Data inserted");
    })
    .catch(e => {
        console.error(e.stack);
    });
});
*/