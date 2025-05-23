const frases = [
  '“Tu outfit, tu manifiesto urbano.”',
  '“Rap es protesta, estilo y alma.”',
  '“El rencor es el mundo donde vivo.”',
  '“El estilo no se copia, se vive en cada paso que das.”',
  '“Viste como piensas, expresa lo que sientes.”',
  '“Una mentira y cuestiono todas tus verdades.”',
  '“Admirable es el que muere por sus ideales. Respetable es aquel hombre que respetó a sus similares.”',
  '“El llanto reina y el mañana es rojo y me preocupo al pensar que verán mis hijos al abrir los ojos.”',
  '“Un pueblo calla, una injusticia se comete.”',
  '“No es solo música, es una forma de resistencia.”',
];

let index = 0;
const fraseTexto = document.getElementById("frase-texto");

setInterval(() => {
  index = (index + 1) % frases.length;
  fraseTexto.textContent = frases[index];
}, 5000);

const productos = [
  {
    img: "https://down-co.img.susercontent.com/file/cn-11134207-7qukw-lhgaepeg9pszcb",
    titulo: "Gorra Snapback - Black Flow",
  },
  {
    img: "https://libur.com.co/cdn/shop/files/sfasfs.jpg?v=1710454542&width=1200",
    titulo: 'Sudadera Oversize "Street King"',
  },
  {
    img: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw4b5a62a7/original/90_E75YA3SF1-EZP328_E003_20_Graffiti~Stargaze~Sneakers-Shoes-Versace-online-store_1_0.jpg?sw=850&q=85&strip=true",
    titulo: "Zapatillas Graff City",
  },
];

let currentIndex = 0;

function mostrarProductos(index) {
  const imagen = document.getElementById("producto-imagen");
  const titulo = document.getElementById("producto-titulo");
  imagen.src = productos[index].img;
  imagen.alt = productos[index].titulo;
  titulo.textContent = productos[index].titulo;
}

function mostrarSiguienteProducto() {
  currentIndex = (currentIndex + 1) % productos.length;
  mostrarProductos(currentIndex);
}

function mostrarAnteriorProducto() {
  currentIndex = (currentIndex - 1 + productos.length) % productos.length;
  mostrarProductos(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos(currentIndex);

  setInterval(() => {
    mostrarSiguienteProducto();
  }, 5000);
});