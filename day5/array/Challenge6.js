function inverserTableau(tab) {
  let debut = 0;
  let fin = tab.length - 1;

  while (debut < fin) {
    let elem = tab[debut];
    tab[debut] = tab[fin];
    tab[fin] = elem;

    debut++;
    fin--;
  }

  return tab;
}
console.log(inverserTableau([1, 2, 3, 4]));