function genererEmail(prenom , nom) {

    let Prenom = prenom.toLowerCase();
    let Nom = nom.toLowerCase();

   return Prenom + "." + Nom + "@entreprise.com"
}

console.log(genererEmail("Meriem", "Bouffi"));
