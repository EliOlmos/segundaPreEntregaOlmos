const items = [
  {
    id: "1",
    titulo: "Raqueta",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/050/152/products/235621_ti_reward_mm_usa_trade_nube1-fca0aedd6bbe4b564d16467418819607-640-0.webp",
    descripcion: "Breve texto",
    precio: 55000,
    stock: 2,
  },
  {
    id: "2",
    titulo: "Bolso",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_865403-MLA50292270323_062022-O.webp",
    descripcion: "Breve texto",
    precio: 45000,
    stock: 4,
  },

  {
    id: "3",
    titulo: "Mochila",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/165/935/products/mochila-babolat-pure-aero-753094142-21-c1326a2657446883ea16669064983558-640-0.webp",
    descripcion: "Breve texto",
    precio: 35000,
    stock: 1,
  },
  {
    id: "4",
    titulo: "Remera Rafa",
    imagen:
      "https://resize.sprintercdn.com/f/261x261/products/0350490/nike-rafa_0350490_00_4_3736992735.jpg",
    descripcion: "Breve texto",
    precio: 2000,
    stock: 6,
  },
  {
    id: "5",
    titulo: "Conjunto de tenis",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_715640-MLA50888885075_072022-V.jpg",
    descripcion: "Breve texto",
    precio: 2000,
    stock: 3,
  },
  {
    id: "6",
    titulo: "Zapatillas de tenis",
    imagen:
      "https://www.fullram.com.ar/files/products/5ec7cbe8aad06-1757-4.jpg",
    descripcion: "Breve texto",
    precio: 4300,
    stock: 5,
  },
];


export const bringData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  })
}
