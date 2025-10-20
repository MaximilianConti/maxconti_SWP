let primzahlen = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
let nichtPrimzahlen = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25];

for (let i = 0; i < primzahlen.length; i++) 
{
    if (primzahlen[i] % 2 != 0 )
    {
        let zahlen = primzahlen[i];
        console.log ("Die Zahl " + zahlen + " ist eine Primzahl.");
    }
}

for (let i = 0; i < nichtPrimzahlen.length; i++) 
{
    if (nichtPrimzahlen[i] % 2 == 0 )
    {
        let zahlen = nichtPrimzahlen[i];
        console.log ("Die Zahl " + zahlen + " ist keine Primzahl.");
    }
}