//Funcciones
function sort_of_array_string(arrayCiutats){
    for (let i = 0; i < arrayCiutats.length; i++)
    {
        let min_index = i;
        for (let j = i + 1; j < arrayCiutats.length; j++)
        {
            if (arrayCiutats[min_index].localeCompare(arrayCiutats[j]) > 0)
                min_index = j;
        }
        if (i != min_index)
        {
            let temp = arrayCiutats[i];
            arrayCiutats[i] = arrayCiutats[min_index];
            arrayCiutats[min_index] = temp;
        }
    }
}
function split(string1){
    var array_letras = [];
    for (let i = 0; i < string1.length; i++)
    {
        array_letras[i] = string1.substring(i, i+1);
    }
    return array_letras;
} 
//Fase 1
var string1 = "";
var string2 = "";
var string3 = "";
var string4 = "";
var string5 = "";
var string6 = "";
string1 = prompt("Enter name of city 1: ");
string2 = prompt("Enter name of city 2: ");
string3 = prompt("Enter name of city 3: ");
string4 = prompt("Enter name of city 4: ");
string5 = prompt("Enter name of city 5: ");
string6 = prompt("Enter name of city 6: ");
console.log("\n");
//Fase 2 
var arrayCiutats = [ string1, string2, string3, string4, string5, string6 ];
sort_of_array_string(arrayCiutats); //or arrayCiutats.sort();
arrayCiutats.forEach(item => console.log(item));
console.log("\n");
//Fase 3
var arrayCiutatsModificades = [string1.replace('a', '4'), string2.replace('a', '4'), string3.replace('a', '4'), string4.replace('a', '4'), string5.replace('a', '4'), string6.replace('a', '4')];
sort_of_array_string(arrayCiutatsModificades); //or arrayCiutatsModificades.sort();
arrayCiutatsModificades.forEach(item => console.log(item));
console.log("\n");
//Fase 4
var array_letras1 = new Array(string1.length);
var array_letras2 = new Array(string2.length);
var array_letras3 = new Array(string3.length);
var array_letras4 = new Array(string4.length);
var array_letras5 = new Array(string5.length);
var array_letras6 = new Array(string6.length);
array_letras1 = split(string1); //or array_letras1 = string1.split("");
array_letras2 = split(string2); //or array_letras2 = string2.split("");
array_letras3 = split(string3); //or array_letras3 = string3.split("");
array_letras4 = split(string4); //or array_letras4 = string4.split("");
array_letras5 = split(string5); //or array_letras5 = string5.split("");
array_letras6 = split(string6); //or array_letras6 = string6.split("");
array_letras1.reverse();
array_letras2.reverse();
array_letras3.reverse();
array_letras4.reverse();
array_letras5.reverse();
array_letras6.reverse();
console.log(array_letras1.join(""));
console.log(array_letras2.join(""));
console.log(array_letras3.join(""));
console.log(array_letras4.join(""));
console.log(array_letras5.join(""));
console.log(array_letras6.join(""));