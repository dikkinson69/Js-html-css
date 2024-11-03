// MATH
// ovo npr daaje vrednost PI
console.log(Math.PI);
// trunc skida sve decimales
console.log(Math.trunc(Math.PI));
// round ga zaokruzuje i daje mu najblizi integer
// ovde ce biti 3. jer je pi 3,14
console.log(Math.round(Math.PI));
console.log(Math.round(3.6));
// ovde ce npr biti 4 zbog rounda

// ceil metod ga zaokruzuje uvek na veci br
// ovde ce biti 4
console.log(Math.ceil(3.2));
// floor ga uvek zaokruzuje na manji broj.
// ovdece biti 3
console.log(Math.floor(3.7));

// powe funkcija radi tako sto se prvi broj 
// stavi na kvadrat, kao u ovom slucaju 8 i 2
// gde je rezultat 64/
// ili bilo koji drugi broj, recimo (5, 10) 5 na
// deseti itd...
console.log(Math.pow(8, 2));

// min metod nam izdvaja najmanji od zadatih
// brojeva
console.log(Math.min(2, 5, 9));
// takodje i max metod
console.log(Math.max(2, 5, 9));

// daje nam random broj od 0 do 1
console.log(Math.random());
// od 1 do 10 random broj. Moraju 2 metode da se
// kombinuju
console.log(Math.floor(Math.random() *10) + 1);

