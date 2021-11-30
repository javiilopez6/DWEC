/**
 *
 * @author Javi Lopez
 * Uso de CallBack
 * una funcion de callback es una funcion que se pasa a otra funcion como argumento (ultimo argumento)
 * que posteriormente es invocado en una funcion externa
 *
 */

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

const buscarPelicula = (id, callback) => {
  //filtro por id
  const pelicula = peliculas.find((item) => item.id === id);

  if (pelicula) {
    callback(pelicula);
  } else {
    console.log("Pelicula no encontrada con ID: " + id);
  }
};
buscarPelicula(5, (pelicula) => {
  console.log(pelicula);
});

// con un diley de 3 segundos
setTimeout(() => {
    buscarPelicula(2, (pelicula) => {
        console.log(pelicula);
    });
},3000)
/*
var tiempo = setInterval(miReloj,1000);

function miReloj(){
    let d = new Date().toLocaleTimeString();
    
    document.getElementById("reloj").innerHTML=d;
}
*/