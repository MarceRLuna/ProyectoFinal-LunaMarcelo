const misProductos = [
  {
    id: "1",
    stock: 5,
    nombre: "Vulk BC Ombuxe",
    precio: "48.900",
    img: "../img/lentes-de-sol-vulk-bc-ombuxe-c2.png",
    descripcion:
      "Vulk es una de las marcas número 1 en el mercado óptico a nivel internacional. Esta empresa se caracteriza por ofrecer modelos y diseños originales y por buscar inspiración en las últimas tendencias. Además, sus colecciones ofrecen diseños #NoGender para que mujeres y hombres elijan con libertad qué diseños usar.Un filtro que te beneficia. Pensado para cuidar la salud de los ojos, el filtro solar protege de los rayos UV. Disfrutá el sol tanto en la playa como en la montaña.",
    idCat: "1",
  },
  {
    id: "2",
    stock: 4,
    nombre: "Ramone 53&3",
    precio: "72.000",
    img: "../img/lentes-de-sol-vulk-ramone-533.png",
    descripcion:
      "Vulk es una de las marcas número 1 en el mercado óptico a nivel internacional. Esta empresa se caracteriza por ofrecer modelos y diseños originales y por buscar inspiración en las últimas tendencias. Además, sus colecciones ofrecen diseños #NoGender para que mujeres y hombres elijan con libertad qué diseños usar.Un filtro que te beneficia. Pensado para cuidar la salud de los ojos, el filtro solar protege de los rayos UV. Disfrutá el sol tanto en la playa como en la montaña.",
    idCat: "1",
  },
  {
    id: "3",
    stock: 11,
    nombre: "Vulk Bi Mars Negro",
    precio: "48.500",
    img: "../img/lentes-de-sol-vulk-bi-mars-negro-brillo-1-polarizado.png",
    descripcion:
      "Vulk es una de las marcas número 1 en el mercado óptico a nivel internacional. Esta empresa se caracteriza por ofrecer modelos y diseños originales y por buscar inspiración en las últimas tendencias. Además, sus colecciones ofrecen diseños #NoGender para que mujeres y hombres elijan con libertad qué diseños usar.Un filtro que te beneficia. Pensado para cuidar la salud de los ojos, el filtro solar protege de los rayos UV. Disfrutá el sol tanto en la playa como en la montaña.",
    idCat: "1",
  },
  {
    id: "4",
    stock: 5,
    nombre: "Anteojos 360º Kong",
    precio: "59.000",
    img: "../img/anteojos-360-kong-clip-on-espejado-verde-10.png",
    descripcion: `Modelo Kong. + Marcos Grilamid , con mucha presencia. + Incluye clipon gris polarizado,ideal para conducir ya que evita el reflejo con todas las superficies.
    + Medidas: A: 139 mm, B :43 mm , C :  17 mm y D:  140 mm de largo de patillas. + Estilo Rectangular. + Color Azul Matte.C08. + Incluye estuche de  360.`,
    idCat: "2",
  },
  {
    id: "5",
    stock: 15,
    nombre: "Anteojos Reef",
    precio: "43.680",
    img: "../img/anteojos-reef-5240-negro-opaco-1.png",
    descripcion: `La marca de antejos REEF se dedica hace más de 40 años a la creación de armazones oftálmicos y anteojos de sol, que se caracterizan por su alta calidad y su diseño innovador, con el firme propósito de proteger los ojos y vestir las miradas. 
    Cada colección de REEF es diseñada interpretando las tendencias de la moda, alineándose a los valores del mundo del surf e identificando las necesidades de quienes cultivan un estilo de vida en donde la vida en contacto con la naturaleza y el deporte son ley`,
    idCat: "2",
  },
  {
    id: "6",
    stock: 10,
    nombre: "Anteojos Wanama",
    precio: "62.000",
    img: "../img/anteojos-wanama-3923-dorado-1.png",
    descripcion:
      `Wanama es una marca argentina conocida por su línea de ropa, que abarca todas las edades, incluso bebés! Con diseños innovadores, un estilo relajado y bohemio que atrae principalmente a los jóvenes, Wanama logró instalarse entre el público que quiere verse moderno y elegante. Objetivo que lograron traducir en su nueva colección de anteojos de sol, con una gran diversidad de modelos y colores, para que todos puedan vestir su mirada de acuerdo a sus gustos personales.
      Su estilo Urban Folk y su orientación permanente hacia la innovación y al diseño, junto con la calidad de sus productos, hacen de Wanama la marca elegida por hombres y mujeres jóvenes y modernos.`,
    idCat: "2", 
  },
];

// función que retorna todos los ítems del array de productos

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};

// función que retorna un solo ítem

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

// función que retorna productos por categoría

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
