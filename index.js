// Variabel för att spara alla produkter från API
let products = [];

// Hämta produkter från Fake Store API
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json()) // Konvertera svar till JSON
  .then((data) => {
    products = data; // Spara produkterna i variabeln
    renderProducts(products); // Visa alla produkter initialt (skickar till en funktion)
  })
  .catch((err) => console.error("Fel vid hämtning:", err)); // Om fetch misslyckas

// Funktion som tar en lista av produkter och renderar dem i DOM
function renderProducts(list) {
  const container = document.getElementById("product-container"); // Hämta container
  container.innerHTML = ""; // Töm container innan vi lägger till nya produkter

  // Loopa igenom varje produkt i listan
  list.forEach((p) => {
    const div = document.createElement("div"); // Skapa ett nytt div-element
    div.className = "product"; // Lägg till CSS-klass för styling

    // Lägg till HTML-innehåll för produkt: bild, titel, pris och kategori
    div.innerHTML = `
          <img src="${p.image}" alt="${p.title}">
          <div class="product-title">${p.title}</div>
          <div class="product-price">${p.price} kr</div>
          <div class="product-category">${p.category}</div>
        `;

    container.appendChild(div); // Lägg till produkten i container
  });
}

//bättre solution för knappar
function filterByPrice(limit) {
  const filtered = products.filter((p) => p.price < limit);
  renderProducts(filtered);
}

document
  .getElementById("btn20")
  .addEventListener("click", () => filterByPrice(20));
document
  .getElementById("btn50")
  .addEventListener("click", () => filterByPrice(50));
document
  .getElementById("btn200")
  .addEventListener("click", () => filterByPrice(200));
document
  .getElementById("btnAll")
  .addEventListener("click", () => renderProducts(products));

/* istället alla addEventListeners:
// Event listener för knapp "Under 20 kr"
document.getElementById("btn20").addEventListener("click", () => {
  // Filtrera produkter som har pris mindre än 20
  const filtered = products.filter((p) => p.price < 20);
  renderProducts(filtered); // Rendera filtrerade produkter
});

// Event listener för knapp "Under 50 kr"
document.getElementById("btn50").addEventListener("click", () => {
  // Filtrera produkter som har pris mindre än 50
  const filtered = products.filter((p) => p.price < 50);
  renderProducts(filtered); // Rendera filtrerade produkter
});

// Event listener för knapp "Under 200 kr"
document.getElementById("btn200").addEventListener("click", () => {
  const filtered = products.filter((p) => p.price < 200);
  renderProducts(filtered);
});

// Event listener för knapp "Visa alla"
document.getElementById("btnAll").addEventListener("click", () => {
  renderProducts(products); // Rendera alla produkter utan filter
});
*/
