
fetch("https://jsonplaceholder.typicode.com/photos")
.then((response)=>response.json())
.then((data)=>{
let tabla= document.getElementById("tabla");

for(let dato of data){
let fila=tabla.appendChild(document.createElement("tr"));
for (let key in dato){
    let columna= document.createElement('td');
    if (key != "albumId" && key != "title" && key != "url" ){
        if (key == "thumbnailUrl"){
            //console.log(nodoTexto);
            let image = fila.appendChild(document.createElement("img"));
            image.setAttribute('src', dato[key]);
            columna.appendChild(image);
            fila.appendChild(columna);
        }else{

        let nodoTexto= document.createTextNode(dato[key]);
        columna.appendChild(nodoTexto);
        fila.appendChild(columna);
        }
    }
    

}

}
});
