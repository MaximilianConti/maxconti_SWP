class Bruch {
  constructor(bruchString) {
    this.ganzeZahl = 0;
    this.zaehler = 0;
    this.nenner = 1;

    this.parseBruch(bruchString);
  }

  // Wandelt den String in Zahlen um
  parseBruch(str) {
    if (str.includes("_")) {
      const [ganze, rest] = str.split("_");
      const [z, n] = rest.split("/");

      this.ganzeZahl = Number(ganze);
      this.zaehler = Number(z);
      this.nenner = Number(n);
    } else {
      const [z, n] = str.split("/");
      this.zaehler = Number(z);
      this.nenner = Number(n);
    }
  }

  // unechter Bruch berechnen
  getUnechterZaehler() {
    return (this.ganzeZahl * this.nenner) + this.zaehler;
  }

  // Darstellung als String
  toString() {
    return `${this.getUnechterZaehler()}/${this.nenner}`;
  }
}


// Hilfsfunktionen für Mathe
class BruchRechner {
  static kgv(a, b) {
    let x = 1;
    while (x % a !== 0 || x % b !== 0) {
      x++;
    }
    return x;
  }

  static ggt(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  static add(bruch1, bruch2) {
    const nenner1 = bruch1.nenner;
    const nenner2 = bruch2.nenner;
    const zaehler1 = bruch1.getUnechterZaehler();
    const zaehler2 = bruch2.getUnechterZaehler();

    const kgv = this.kgv(nenner1, nenner2);

    const erweiterterZaehler1 = zaehler1 * (kgv / nenner1);
    const erweiterterZaehler2 = zaehler2 * (kgv / nenner2);

    const summe = erweiterterZaehler1 + erweiterterZaehler2;

    // kürzen
    const ggt = this.ggt(summe, kgv);
    const gekZ = summe / ggt;
    const gekN = kgv / ggt;

    return `${gekZ}/${gekN}`;
  }
}


// =====================
// TEST
// =====================
const bruch1 = new Bruch("1_2/5");
const bruch2 = new Bruch("5_3/10");

console.log("Erster Bruch als unechter Bruch:", bruch1.toString());
console.log("Zweiter Bruch als unechter Bruch:", bruch2.toString());

console.log("Summe der Brüche:", BruchRechner.add(bruch1, bruch2));
