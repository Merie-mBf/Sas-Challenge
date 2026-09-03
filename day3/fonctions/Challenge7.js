function obtenirHeureActuelle(){
    const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
console.log("heure est: "+h+":"+m+":"+s)
}
obtenirHeureActuelle();