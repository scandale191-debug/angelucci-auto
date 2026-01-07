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
.hero {
  position: relative;
  height: 420px;
  overflow: hidden;
}

.hero-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
}

.hero-slide.active {
  opacity: 1;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  height: 100%;
  background: rgba(0,0,0,0.45);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

