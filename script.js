const auto = [
  {
    marca: "Fiat",
    modello: "Panda",
    prezzo: "€ 8.900",
    img: "assets/images/panda.jpg"
  },
  {
    marca: "Toyota",
    modello: "Yaris",
    prezzo: "€ 12.500",
    img: "assets/images/yaris.jpg"
  },
  {
    marca: "Fiat",
    modello: "500",
    prezzo: "€ 10.900",
    img: "assets/images/fiat500.jpg"
  }
];

const lista = document.getElementById("lista-auto");
const filtro = document.getElementById("filtroMarca");

function mostraAuto(filtroMarca = "all") {
  lista.innerHTML = "";

  auto
    .filter(a => filtroMarca === "all" || a.marca === filtroMarca)
    .forEach(a => {
      lista.innerHTML += `
        <div class="auto">
          <img src="${a.img}">
          <div class="info">
            <h3>${a.marca} ${a.modello}</h3>
            <div class="prezzo">${a.prezzo}</div>
          </div>
        </div>
      `;
    });
}

filtro.addEventListener("change", e => {
  mostraAuto(e.target.value);
});

mostraAuto();
