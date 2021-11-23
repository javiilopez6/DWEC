/**
 * 
 * @author Javi Lopez
 * @description Ambitos del uso del this
 * 
 * 
 */


console.log(this);
this.nombre=" texto Global";

console.log(this.nombre);

function saludo(){
    console.log(this.nombre);
}
saludo();
 const objeto={
     nombre:"texto objeto", 
     imprimir: function(){
         console.log(this.nombre);
     }
 }
 objeto.imprimir();


 const objeto2={
     nombre:"texto objeto2", 
     imprimir: ()=>{
         console.log(this.nombre);
     }
 }
 objeto2.imprimir();//saca el objeto padre de todos en las funciones flecha solamente



 /*
 las funciones flecha el probleba que acarrean es que heredadan
 el contexto donde han sido creadas
 
 */