const items = [
  {
    id: "1",
    categoria: "1",
    titulo: "Raqueta Radical Head Oversize",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/050/152/products/235621_ti_reward_mm_usa_trade_nube1-fca0aedd6bbe4b564d16467418819607-640-0.webp",
    descripcion:
      "En esta oportunidad la marca Head cumplió su promesa al brindarnos mayor potencia, estabilidad y sensaciones en el juego utilizando esta maravilla de raqueta. Por su peso de 110gr estamos hablando de una oversize recomendadas para personas +50 años. Buenas jugadas sin perder el equilibrio y con mucha ligereza al golpear",
    precio: 22000,
    stock: 2,
  },
  {
    id: "2",
    categoria: "4",
    titulo: "Bolso Raquetero Tenis Babolat Pure Aero Rafa X6 Raquetas",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_865403-MLA50292270323_062022-O.webp",
    descripcion: "La bolsa Babolat RH6 PURE se convirtió rápidamente en un modelo de referencia gracias a su diseño y útiles funciones. Desde su lanzamiento, hemos seguido mejorando nuestros productos para hacerlos cada vez más cómodos, espaciosos y prácticos, y para proteger aún mejor tus raquetas.",
    precio: 45000,
    stock: 4,
  },

  {
    id: "3",
    categoria: "4",
    titulo: "Mochila de tenis Babolat Pure Aero",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/165/935/products/mochila-babolat-pure-aero-753094142-21-c1326a2657446883ea16669064983558-640-0.webp",
    descripcion:
      "La mochila de tenis Babolat Pure Aero 2021 en negro y amarillo presenta un diseño completamente nuevo con más capacidad de almacenamiento. Compartimento con cremallera para dos raquetas Compartimento principal aislantecorreas de hombro acolchadas",
    precio: 35000,
    stock: 5,
  },
  {
    id: "4",
    categoria: "3",
    titulo: "Camiseta Nike Rafa",
    imagen:
      "https://resize.sprintercdn.com/f/261x261/products/0350490/nike-rafa_0350490_00_4_3736992735.jpg",
    descripcion: "La camiseta Nike Rafa es una prenda deportiva de manga corta para hombre. Está confeccionada en un tejido ligero y transpirable que aporta una sensación de frescor durante el ejercicio. La camiseta cuenta con un diseño moderno y una estética deportiva. Perfecta para los amantes del tenis.",
    precio: 2000,
    stock: 6,
  },
  {
    id: "5",
    categoria: "3",
    titulo: "Conjunto Remera Y Short C/bolsillos Deportivo Tenis",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_715640-MLA50888885075_072022-V.jpg",
    descripcion: "Conjunto deportivo remera manga corta y shorts con bolsillos y cintura ajustable interior, en Jersey Set (poliéster). Ideal para Tenis, Pádel, Futbol, Básquet, Gimnasio, Running y todos los deportes que elijas!",
    precio: 2000,
    stock: 3,
  },
  {
    id: "6",
    categoria: "2",
    titulo: "ZAPATILLAS ASICS GEL-PADEL PRO 4 HOMBRE",
    imagen:
      "https://www.fullram.com.ar/files/products/5ec7cbe8aad06-1757-4.jpg",
    descripcion: "La zapatilla GEL-PADEL PRO 4 de ASICS es un modelo versátil para jugadores de pádel competitivos. Esta zapatilla mejorará tu experiencia en la pista gracias a sus inigualables prestaciones de sujeción y comodidad. Se trata de un modelo que combina capas de piel sintética y un elegante panel de malla en el empeine, proporciona una óptima ventilación y garantiza sujeción donde más lo necesitas.",
    precio: 4300,
    stock: 5,
  },
];

export const bringData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 20);
  });
};

export const getItemId = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find((item) => item.id === itemId));
    }, 20);
  });
};

export const getCategory = (itemCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.filter((item) => item.categoria === itemCategory));
    }, 20);
  });
};
