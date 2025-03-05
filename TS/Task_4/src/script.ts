/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */
function tekstasIBinara(tekstas: string): string {
  let rezultatas = "1"; 
  for (let i = 1; i < tekstas.length; i++) {
      rezultatas += i % 2 === 0 ? "1" : "0"; 
  }
  return rezultatas;
}


