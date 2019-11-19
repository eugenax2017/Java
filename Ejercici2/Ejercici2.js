//Fase 1
var array_de_caracteres = ['E', 'V', 'G', 'E', 'N', 'I', 'I', 'A', 'K', 'S', 'I', 'M', 'E', 'N', 'K', 'O'];
for (let i=0; i< array_de_caracteres.length; i++) // or console.log(array_de_caracteres.join());
{
    console.log(array_de_caracteres[i]);
}
console.log("\n");
//Fase2
//no hay el type de List en JavaScript
var array_de_caracteres = ['8', '9', ',', 'e', 'N', 'I', 'I', 'A', 'K', 'S', 'I', 'M', 'E', 'N', 'K', 'O'];
for (let i in array_de_caracteres)
{
    let letra = array_de_caracteres[i];
    if (letra.match(/[a-zA-z]/i)) //or ((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z'))
    {
        switch (letra.toLowerCase())
        {
            case 'a':
            case 'e':
            case 'o':
            case 'i':    
            case 'u':
                console.log(`${letra} is VOCAL`);;
                break;
            default:
                console.log(`${letra} is CONSONANT`);;
                break;
        }
    }
    else if (letra.match(/[0-9]/i)) //or (letra >= '0' && letra <= '9') 
    {
        console.log(letra + " - Els noms de persones no contenen numeros!");
    }
    else
    {
        console.log(`${letra} no es ni letra ni numero!`);
    }    
}
console.log("\n");
//Fase 3
var list_de_caracteres_nombre = new Array('E', 'V', 'G', 'E', 'N', 'I', 'I' );
//no hay el type de Dictionary sino el de Map en JavaScript
var dictionary_letras = new Map(); 
for (let i = 0; i < list_de_caracteres_nombre.length; i++)
{
    let letra = list_de_caracteres_nombre[i];    
    if (dictionary_letras.has(letra))
        continue;
    let countOfLetra = 1;
    for (let j = i + 1 ; j < list_de_caracteres_nombre.length; j++)
    {
        if (letra === list_de_caracteres_nombre[j])
            countOfLetra++;
    }
    dictionary_letras.set(letra, countOfLetra);
}
for (let [count, letra] of dictionary_letras) 
{    
    console.log(`Letra = ${letra}, Count = ${count}`);
}
/* or dictionary_letras.forEach((count, letra) => {
    console.log(`Letra = ${letra}, Count = ${count}`);
})*/
console.log("\n");
//Fase 4
var list_de_caracteres_cognom = ['A', 'K', 'S', 'I', 'M', 'E', 'N', 'K', 'O'];
var list_final = [];
for (let letra in list_de_caracteres_nombre)
{
    list_final.push(list_de_caracteres_nombre[letra]);
}
list_final.push(' ');
for (let letra in list_de_caracteres_cognom)
{
    list_final.push(list_de_caracteres_cognom[letra]);
}
console.log(list_final.join()); // or list_final.forEach(letra => console.log(letra)); 