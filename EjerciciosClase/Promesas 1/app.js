const peliculas = [
    {
      id: 1,
      titulo: "Pelicula 1",
      sinopsis: "Contenido Pelicula 1",
    },
    {
      id: 2,
      titulo: "Pelicula 2",
      sinopsis: "Contenido Pelicula 2",
    },
  ];

// ------ PROMESAS --------

//las promesas se construyen con new Promise(resolve,reject)

const buscarPelicula = (id) => {
    const pelicula = peliculas.find((item) => item.id === id);
    return new Promise((resolve, reject) => {
        if (pelicula){
            resolve (pelicula);
        }else {
            reject("No he encontrado la pelicula con ID: " + id);
            }
    });
};

//para obtener los resolve tengo que llamar a .then
// para obtener los reject tengo que llamar a .catch
//tambien puedo usar .finally() que se mostraria siempre

buscarPelicula(2)
.then((pelicula) => {
    console.log(pelicula);
})
.catch((error) => {
    console.log(error);
});
