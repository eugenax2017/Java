//Fase 1
var array_de_caracteres = ['E', 'V', 'G', 'E', 'N', 'I', 'I', 'A', 'K', 'S', 'I', 'M', 'E', 'N', 'K', 'O'];
for (let i=0; i< array_de_caracteres.length; i++)
{
    console.log(array_de_caracteres[i]);
}
console.log("\n");
//Fase2
//no hay el type de List, sino el de Set en JavaScript
var set_de_caracteres = new Set(['E', 'V', 'G', 'e', 'N', 'I', 'I', 'A', 'K', 'S', 'I', 'M', 'E', 'N', 'K', 'O']);
for (let letra of set_de_caracteres)
{    
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
var set_de_caracteres_nombre = new Set(['E', 'V', 'G', 'E', 'N', 'I', 'I']);
//no hay el type de Dictionary sino el de Map en JavaScript
var dictionary_letras = new Map();
for (let letra of set_de_caracteres_nombre)
{    
    console.log(letra + " " + dictionary_letras.has(letra));
    let hayLetraYa = false;
    for (let item in dictionary_letras)
    {
        if (letra === item)
            hayLetraYa = true;
    }    
    if (hayLetraYa)
        continue;
    let countOfLetra = 0;
    for (let j = i + 1 ; j < set_de_caracteres_nombre.length; j++)
    {
        if (letra === set_de_caracteres_nombre[j])
            countOfLetra++;
    }
    dictionary_letras[letra] = countOfLetra;
}
for (let letra in dictionary_letras)
{    
    console.log(`Letra = ${letra}, Count = ${dictionary_letras[letra]}`);
}
console.log("\n");
