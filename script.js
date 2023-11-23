/*Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.*/

const salary = (wage, hours, days) => {
    return Math.round (wage * hours * days);
}

const taxed = (amount, taxes) => {
    return Math.round (amount - (taxes * 0.01 * amount));
}


document.body.innerHTML = `
<p> ${salary(500, 8, 20)} <p>
<p> ${taxed (salary (500, 8, 20), 15)} <p>
`



