/**
 * 
 * @author Javi Lopez
 * @description Creando eventos con DOM
 */

const boton = document.getElementById("boton");
const caja = document.getElementById("caja");


// escuchamos los eventos

boton.addEventListener("click", (e) =>{

    //e --> hace referencia al evento que genera la accion
    //e.target --> elemento html que ha generado la accion
    console.log("a")

});


caja.addEventListener("mouseenter", (e) => {

    //metodo para cambiar o reemplazar una clase css --> classList.replace(original,nuevo);
   caja.classList.replace("verde","azul");

});

caja.addEventListener("mouseleave", (e) => {

    //metodo para cambiar o reemplazar una clase css --> classList.replace(original,nuevo);
   caja.classList.replace("azul","verde");

});

boton.addEventListener("dblclick", (e) => {

    //metodo para cambiar o reemplazar una clase css --> classList.replace(original,nuevo);
    caja.classList.replace("rojo","azul");

});

document.addEventListener("keypress" , (e) =>{
    if(e.code ==="KeyG"){
    caja.classList.add("verde");
    }

})