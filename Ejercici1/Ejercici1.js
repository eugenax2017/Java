//Fase 1
var nom = "Evgenii";
var cognom1 = "Aksimenko";
var cognom2 = "Nikolaevich";
var dia = 16;
var mes = 9;
var any = 1980;
console.log(cognom1 + " " + cognom2 + ", " + nom); //or alert(`${cognom1} ${cognom2}, ${nom}`);
console.log(dia + "/" + mes + "/" + any); // or alert(`${dia}/${mes}/${any}`);
console.log("\n");
//Fase 2
var any_inici = 1948;
var any_traspas = [1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980];            
console.log("Count of leap years: " + any_traspas.length);
console.log("\n");
//Fase 3
const frase_true = "This year is leap: ";
const frase_false = "This year isn't leap: ";
var print_frase_true = false;
for (let i=0; i<any_traspas.length; i++)
{
    console.log("Leap year is: " + any_traspas[i]);
}
for (let i=any_inici; i<=any; i++)
{
    for (let j=0; j<any_traspas.length; j++)
    {
        if (i == any_traspas[j])
        {
            print_frase_true = true;
            break;
        } 
        else
            print_frase_true = false;
    }
    if (print_frase_true) 
        console.log(frase_true + i);
    else
        console.log(frase_false + i);
}
console.log("\n");
//Fase 4
var fullName = `${nom} ${cognom2} ${cognom1}`;
var dataDeNacio = dia + "/" + mes + "/" + any;
var meu_Any_trespas = false;
for (let i=0; i<any_traspas.length; i++) 
{
    if (any_traspas[i] == any) 
    {
        meu_Any_trespas = true;
        break;
    }
}
console.log("El meu nom es " + fullName);
console.log("Vaig neixer el " + dataDeNacio);
if (meu_Any_trespas)
    console.log("El meu any de naixement es de traspas");
else
    console.log("El meu any de naixement no es de traspas");