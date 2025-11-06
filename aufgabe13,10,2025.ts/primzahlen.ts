function isPrime(n: number): boolean {
  if (n < 2) return false; // Zahlen kleiner als 2 sind keine Primzahlen

  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Alle Zahlen von 0 bis 100 prüfen
for (let i = 0; i <= 100; i++) {
  console.log(`${i} ist ${isPrime(i) ? "eine Primzahl" : "keine Primzahl"}`);
}





/*
ERKLÄRUNG:

🧩 isPrime(n: number): boolean
→ n ist die Zahl, die geprüft wird.
→ boolean heißt: gibt true oder false zurück.

🔢 if (n < 2) return false;
→ Zahlen unter 2 sind keine Primzahlen.

🧮 const limit = Math.sqrt(n);
→ Math.sqrt() = Quadratwurzel.
→ Wir prüfen nur bis √n, weil sich Teiler danach wiederholen.

🔁 for (let i = 2; i <= limit; i++)
→ Schleife testet alle Zahlen von 2 bis √n als mögliche Teiler.

⚙️ if (n % i === 0)
→ % gibt den Rest einer Division.
→ Wenn Rest 0 → keine Primzahl.

💡 return true / false
→ true = Primzahl, false = keine.

📜 console.log(`${i} ist ${isPrime(i) ? "eine Primzahl" : "keine Primzahl"}`);
→ `${}` = Variable in Text einfügen.
→ ? : = Wenn-Bedingung in einer Zeile (wenn true, dann links; sonst rechts).
*/

