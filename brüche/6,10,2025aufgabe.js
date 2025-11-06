export class Bruch 
{
    constructor(zaehler, nenner) 
    {
        if (nenner === 0)
            {
                throw new Error("Nenner darf nicht 0 sein");
            }

        if (nenner < 0) 
            {
                zaehler = -zaehler;
                nenner = -nenner;
            }
        const g = Bruch.ggt(Math.abs(zaehler), Math.abs(nenner));
        this.zaehler = zaehler / g;
        this.nenner = nenner / g;
    }

    static ggt(a, b)
    {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) 
        {
            const t = b;
            b = a % b;
            a = t;
        }
        return a === 0 ? 1 : a;
  }

  toString() 
  {
    return `${this.zaehler}/${this.nenner}`;
  }

  add(other) 
  {
        const z = this.zaehler * other.nenner + other.zaehler * this.nenner;
        const n = this.nenner * other.nenner;
        return new Bruch(z, n);
  }

  sub(other) 
  {
    const z = this.zaehler * other.nenner - other.zaehler * this.nenner;
    const n = this.nenner * other.nenner;
    return new Bruch(z, n);
  }

  mul(other) 
  {
    return new Bruch(this.zaehler * other.zaehler, this.nenner * other.nenner);
  }

  div(other) 
  {
        if (other.zaehler === 0) 
        {
            throw new Error("Division durch 0");
        }
    return new Bruch(this.zaehler * other.nenner, this.nenner * other.zaehler);
  }

  equals(other) 
  {
    return this.zaehler === other.zaehler && this.nenner === other.nenner;
  }

  // Neu: Umwandlung in gemischten Bruch als String
    toGemischt() 
    {
        const ganze = Math.trunc(this.zaehler / this.nenner);
        const rest = Math.abs(this.zaehler % this.nenner);
        if (ganze !== 0 && rest !== 0) 
        {
            return `${ganze}_${rest}/${this.nenner}`;
        }
        else if (ganze !== 0) {
        return `${ganze}`;
        } 
        else 
        {
            return `${this.zaehler}/${this.nenner}`;
        }
    }
}

/* Beispiel (entfernen oder auskommentieren, wenn die Klasse importiert wird): */
const a = new Bruch(7, 4);
console.log(a.toString());    // "7/4"
console.log(a.toGemischt());  // "1_3/4"