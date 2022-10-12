//Editar campos de AcercaDe
const editDatosPersonal = document.getElementById('editarDatosPersonales');
const nombreCompletoPortadaTarjeta = document.getElementsByClassName('.card-title');
const tituloProfesionalPortadaTarjeta = document.getElementsByClassName('.card-text');
const inputsDatosPersonales = document.querySelectorAll('#inputDatosPersonales');

const botonesEdicion = {
   edicionHabilitada: false,
   habilitarCamposDatosPersonales: function(){
       inputsDatosPersonales.forEach(inputDPersonal=>inputDPersonal.classList.replace('border-dark', 'border-primary'));
       document.querySelector('[name="fotoPerfil"]').removeAttribute('disabled');
       this.edicionHabilitada= true;
   },
   campoAModificar: function(target_name){
       document.querySelector(`[name="${target_name}"]`).textContent=prompt('');
   },
   inputNuevosDatosPersonales: function(){
       if(this.edicionHabilitada){
           switch (seleccion){
               case "nombreCompleto":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "titulo":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "nacionalidad":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "pais":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "provincia":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "ciudad":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "direccion":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "telefono":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "email2":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "edad":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "fechaNacimiento":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
               case "docIdentidad":
                   botonesEdicion.campoAModificar(seleccion);
               break;
               case "datosPertinentes":
                   botonesEdicion.campoAModificar(seleccion);
               break;    
           }
       }else{
           alert('Debe hacer click en el botón de editar sección para modificar los campos');
       }
   }  
}

editDatosPersonal.addEventListener('click', () =>{
   botonesEdicion.habilitarCamposDatosPersonales();
   
})
var seleccion = null;
inputsDatosPersonales.forEach(nuevoDato=>nuevoDato.addEventListener("click", () => {
   seleccion = nuevoDato.getAttribute('name');
   botonesEdicion.inputNuevosDatosPersonales();

}))