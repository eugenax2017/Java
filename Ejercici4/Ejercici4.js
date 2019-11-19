//Fase 1
var billete_5 = 0;
var billete_10 = 0;
var billete_20 = 0;
var billete_50 = 0;
var billete_100 = 0;
var billete_200 = 0;
var billete_500 = 0;
var cost_total = 0;
var platos = new Array(5);
preus = new Array(5);
//Fase 2
platos[0] = "Ensalada rusa";
platos[1] = "Sopa de mariscos";
platos[2] = "Antrecote";
platos[3] = "Bistec";
platos[4] = "Crema catalana";
preus[0] = 4;
preus[1] = 6;
preus[2] = 8;
preus[3] = 6;
preus[4] = 3;
console.log("Ara tenim: ");
for (let i = 0; i < platos.length; i++)
{
    console.log(`Plato${i+1}: ${platos[i]} - ${preus[i]} EUR`);
}
var key = "1";
var pedido = [];
while (key === "1")
{
    pedido.push(prompt("Que vols menjar?").trim());                
    do
    {
        key = prompt("Vols mes? 1:Si / 0:No").trim();
    } while (key!="0" && key!="1");    
}
console.log("\n");
var hay_en_carta;
for (let item in pedido)
{
    hay_en_carta = false;
    for (let i = 0; i < platos.length; i++)
    {
        if (pedido[item] === platos[i])
        {
            hay_en_carta = true;
            cost_total += preus[i];
            console.log(`${pedido[item]} - ${preus[i]} EUR`);
            break;
        }                  
    }
    if (!hay_en_carta)
    {
        console.log(`Producte ${pedido[item]} que hem demanat no existeix!`);
    }                
}
console.log(`Total cost son: ${cost_total} EUR`);
var saldo = cost_total;            
while (saldo>4) 
{
    let sum;
    if (saldo >= 500 && (sum = Math.trunc(saldo / 500)) >= 1)
    {
        billete_500 += sum;
        saldo -= sum * 500;
    }
    if (saldo >= 200 && (sum = Math.trunc(saldo / 200)) >= 1)
    {
        billete_200 += sum;                    
        saldo -= sum * 200;
    }
    if (saldo >= 100 && (sum = Math.trunc(saldo / 100)) >= 1)
    {
        billete_100 += sum;                    
        saldo -= sum * 100;
    }
    if (saldo >= 50 && (sum = Math.trunc(saldo / 50)) >= 1)
    {
        billete_50 += sum;                    
        saldo -= sum * 50;
    }
    if (saldo >= 20 && (sum = Math.trunc(saldo / 20)) >= 1)
    {
        billete_20 += sum;                    
        saldo -= sum * 20;
    }
    if (saldo >= 10 && (sum = Math.trunc(saldo / 10)) >= 1)
    {
        billete_10 += sum;                    
        saldo -= sum * 10;
    }
    if (saldo >= 5 && (sum = Math.trunc(saldo / 5)) >= 1)
    {
        billete_5 += sum;                    
        saldo -= sum * 5;
    }                
}
console.log(`500 EUR: ${billete_500}`);
console.log(`200 EUR: ${billete_200}`);
console.log(`100 EUR: ${billete_100}`);
console.log(`50 EUR: ${billete_50}`);
console.log(`20 EUR: ${billete_20}`);
console.log(`10 EUR: ${billete_10}`);
console.log(`5 EUR: ${billete_5}`);
console.log(`Saldo: ${saldo} EUR`);