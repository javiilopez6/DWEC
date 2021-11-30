/**
 * La API Fetch proporciona una interfaz para recuperar recursos de internet.
 * sustituye a XMLHttRequest
 */

fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response)=>response.json())
    .then((data)=>{
    let tabla= document.getElementById("tabla");

    for(let dato of data){
    let fila=tabla.appendChild(document.createElement("tr"));
    for (let key in dato){
        let columna= document.createElement('td');
        let nodoTexto= document.createTextNode(dato[key]);
        columna.appendChild(nodoTexto);
        fila.appendChild(columna);
    
    }
    
 }
});


