/**
 * 
 * @author Javi Lopez
 * @description crear un Gestor de tareas
 * 
 * 
 */



 const cuadroTarea = document.getElementById("cuadroTarea");


 /*
  funcion para obtener la fecha en el momento 
  */
 function fecha(){
    let dia= new Date();
    let fechaString= "---> " + dia.getDate() + "/"+ dia.getMonth()+"/"+ dia.getFullYear() + "-"+ dia.getHours() + ":" + dia.getMinutes() + ":" + dia.getSeconds(); 
    return fechaString;
}


/*

Contadores que nos van a servir para llevar la cuenta de las 
tareas realizadas (contador) y de las tareas eliminadas (contador2)

*/
 let contador =0;
 let contador2=0;


 


/*
funcion para crear la tarea
*/

 function creaTarea() {

    // si la tarea está vacía...
    if (cuadroTarea.value ==="" ){
        //cambia los atributos del div y reemplaza la clase para ponerlo de color rojo
        cuadroTarea.setAttribute("placeholder", "Escribe una tarea valida");
        cuadroTarea.classList.replace("cuTarea", "cuTarea2");
    }else{
            //si no está vacia la tarea introducida
            //en el caso de que hayamos introducido una tarea vacia anteriormente, pone el cuadro como al principio
            cuadroTarea.classList.replace("cuTarea2", "cuTarea");
            //creamos un elemento li
            var li=document.createElement("li"); 
            //obtenemos el texto introducido de la tarea
            var textoTextArea = cuadroTarea.value;
            //le añadimos la hota y lo convertimos en un nodo texto
            textoTextArea += fecha();
            let texto= document.createTextNode(textoTextArea) ;
            //le añadimos el nodo texto al li anteriormente creado y se lo añadimos al div con id=lista
            li.appendChild(texto);            
            document.getElementById("lista").appendChild(li);
            //llamamos al contador de añadir tarea
            newContador();
            
            

    }
    /*                --- Eliminacion de la tarea ----           */
    // Obtenemos el li al que le hemos dado click y llamamos a la funcion recorrer 
    
    for(let i=0; i< document.getElementsByTagName("li").length; i++){
        
        document.getElementsByTagName("li")[i].addEventListener("click", recorrer);


    }
    // eliminamos la tarea
    function recorrer(e) {

        let li=e.target;
        
        //llama a la funcion eliminar para eliminar la tarea del array para volver a poder introducirla
        array=eliminar(array,cuadroTarea.value);

        //llama a la funcion eliminadas para añadir la tarea eliminada a un array
        eliminadas(arrayeliminadas,li);
        
        //elimina la tarea deseada
        li.remove();
        
           
    }
    
    




        
}

let array =[];
let arrayeliminadas = [];
//funcion para añadir las tareas eliminadas a un array y mostrarlo por la linea de comandos
function eliminadas(a,t){
    a.push(t);
    console.log(a);
}



// Funcion que comprueba que no se ha repetido una tarea introducida


function repetido(){
    
    var textoTextAreaArray = cuadroTarea.value;
    // si el array está vacio introduce la tarea y llama a la funcion crearTarea
    if (array.length==0){
        array.push(textoTextAreaArray);
        creaTarea();
        
    }else{  //si el array no está vacio
        //comprueba que la tarea introducida no esté en el array
        let comprobacion = array.includes(textoTextAreaArray);
        
   // Si la tarea está introducida en el array te salta un alert avisandote
        if (comprobacion) {
            alert('Este elemento ya está insertado');
            
        }else{
        // si no está introducida en el array, la introduce y llama a la funcion de crear tarea
            array.push(textoTextAreaArray);
            creaTarea();
          


        }
    

    }



}

// funcion creada para que cuando elimines la tarea del gestor de tareas, te la elimine del array para que la puedas introducir de nuevo
function eliminar(array, t) {
    newContadorMenos();
    console.log(t);
    var resultado = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== t) {
        resultado.push(array[i]);
      }
    }
    return resultado;
    
  }


//funcion creada para llevar el tema del contador de las tareas introducidas
function newContador() {
    contador++;
    let textoContador ="Numero de tareas introducidas: " + contador;
    
    let textoContador2 ="Numero de tareas eliminadas: " + contador2;
    document.getElementById("contador").innerHTML = textoContador + "   <br> " + textoContador2;
    
 
}


//funcion creada para llevar el tema del contador de las tareas eliminadas
function newContadorMenos() {
    contador2++;
    let textoContador ="Numero de tareas introducidas: " + contador;
    
    let textoContador2 ="Numero de tareas eliminadas: " + contador2;
    document.getElementById("contador").innerHTML = textoContador + "   <br> " + textoContador2;
    
 
}


// si la tarea es introducida con el boton
document.getElementById("boton").addEventListener("click",repetido);

// si la tarea es introducida con el boton de enter 
document.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      repetido();
    }
  });

