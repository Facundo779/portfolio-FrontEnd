//Funciones de tarjeta educación
const cursandoActualmente = document.querySelector('#estudiaActualmenteCBox');
const eliminarEstudio = document.querySelector('#templateEducacion1');
const botonEliminarSegmentoEdu = document.querySelector('#botonsaberSiEliminoSegmentoEducacion');

const habilitarCargaTitulo = {
    habilitandoCargaTitulo : function(){
        if(cursandoActualmente.checked){
        document.querySelector('#filaModalEducacionTituloProfesional').classList.replace('habilitarTituloProfesionalActivo','habilitarTituloProfesionalOculto');
        document.querySelector('#filaModalEducacionTituloFechaObtencion').classList.replace('habilitarTituloProfesionalActivo','habilitarTituloProfesionalOculto');
        }else{
        document.querySelector('#filaModalEducacionTituloProfesional').classList.replace('habilitarTituloProfesionalOculto','habilitarTituloProfesionalActivo');
        document.querySelector('#filaModalEducacionTituloFechaObtencion').classList.replace('habilitarTituloProfesionalOculto','habilitarTituloProfesionalActivo');
        }  
    },
    eliminandoCargaTitulo : function(){
        document.querySelector('[name="templateEducacion1"]').remove();
    }
}

cursandoActualmente.addEventListener('change', ()=>{
habilitarCargaTitulo.habilitandoCargaTitulo();
})

botonEliminarSegmentoEdu.addEventListener('click', ()=>{
    habilitarCargaTitulo.eliminandoCargaTitulo();
})