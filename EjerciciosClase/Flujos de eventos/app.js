/**
 * 
 * @author Javi Lopez
 * @description flujo de eventos (burbuja)
 */
function info(evento){
    console.log('Hola soy el evento ' + this.className +' y el click lo lanzó '+evento.target.className  );



}
const eventosDiv= document.querySelectorAll(".flujos-eventos div");
console.log(eventosDiv);

eventosDiv.forEach((div) => {
    div.addEventListener("click",info,{
        capture:false,
        once:false,    // el once hace que capture el evento una vez solo 
    });
    eventosDiv.preventDefault();    
})


