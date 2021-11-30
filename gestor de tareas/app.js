/**
 * 
 * @author Javi Lopez
 * @description crear un Gestor de tareas
 * 
 * 
 */



 const cuadroTarea = document.getElementById("cuadroTarea");
 let dia= new Date();
 let fecha= "---> " + dia.getDate() + "/"+ dia.getMonth()+"/"+ dia.getFullYear() + " ---- "+ dia.getHours() + ":" + dia.getMinutes() + ":" + dia.getSeconds(); 

 function creaTarea() {

    // si la tarea está vacía...
    if (cuadroTarea.value ==="" ){
        cuadroTarea.setAttribute("placeholder", "Escribe una tarea valida");
        cuadroTarea.classList.replace("cuTarea", "cuTarea2");
    }else{

            cuadroTarea.classList.replace("cuTarea2", "cuTarea");
            var li=document.createElement("li"); 
            var textoTextArea = cuadroTarea.value;
            textoTextArea += fecha;
            let texto= document.createTextNode(textoTextArea) ;
            li.appendChild(texto);            
            document.getElementById("lista").appendChild(li);

    }

    // Obtenemos el li al que le hemos dado click y llamamos a la funcion recorrer
    
    for(let i=0; i< document.getElementsByTagName("li").length; i++){
        document.getElementsByTagName("li")[i].addEventListener("click", recorrer);


    }
    // eliminamos la tarea
    function recorrer(e) {

        let li=e.target;
        li.remove();
           
    }
    function remove(e){

        var liSeleccionado=document.getElementsByTagName("li")[i];
        var primerHijo=liSeleccionado.firstChild;
        liSeleccionado.removeChild(primerHijo);
        
        

    }
    




        
}

let array =[];
let contador =0;

function repetido(){
    //alert(cuadroTarea.value + array.length);

    var textoTextAreaArray = cuadroTarea.value;
    if (array.length==0){
        array.push(textoTextAreaArray);
        creaTarea();
        contador ++;
    }else{


        
    for (let i = 0; i < array.length; i++) {
        if (textoTextAreaArray===array[i]) {
            alert('Este elemento ya está insertado');
            
        }else{
            
            array.push(textoTextAreaArray);
            creaTarea();
            contador ++;


        }
    }

    }



}







document.getElementById("boton").addEventListener("click",repetido);


