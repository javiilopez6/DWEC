/**
 * 
 * @author Javi Lopez
 * @description crear un acordeon cuando pulsemos en dos botones
 */

const eleAcordeon = document.getElementsByClassName("acordeon");



// escuchamos los eventos

for (let elemento of eleAcordeon) {
    elemento.addEventListener("click", (e) =>{
        let panel = elemento.nextElementSibling;
        if (panel.style.display == "none"){
            panel.style.display = "block";
        }else{
            panel.style.display = "none";
        }
        
        elemento.addEventListener("mouseenter", (e) => {
            eleAcordeon.classList.replace("acordeon","cyan");
        });

        elemento.addEventListener("mouseleave", (e) => {
            eleAcordeon.classList.replace("cyan","acordeon");
        });


    });
    
};



