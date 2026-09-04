function trouverMax(tab){
    max=tab[0];
    for(let i=0; i<=tab.length; i++){
        if (max < tab[i]){
            max = tab[i];
        }
    }
return max;
}
array=[12, 45, 7, 89, 23, 345];
console.log(trouverMax(array));