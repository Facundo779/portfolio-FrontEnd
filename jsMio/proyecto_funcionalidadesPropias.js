//Acciones en fotos de proyecto
const agregarFotoProyecto = document.querySelector('#botonsaberSiAgregoFotoProyecto');
const ocultarFotoProyecto = document.querySelector('#botonsaberSiOcultoFotoProyecto');
const eliminarProyecto = document.querySelector('#botonsaberSiEliminoSegmentoProyecto');

const habilitarCargarProyecto = {
    habilitandoCargaFoto : function(){
        document.querySelector('#filaModalProyectoAdjFoto').classList.replace('agregarFotoProyectoOculto','agregarFotoProyectoActivo');
    },
    ocultarCargaFoto : function() {
        document.querySelector('#filaModalProyectoAdjFoto').classList.replace('agregarFotoProyectoActivo','agregarFotoProyectoOculto');
    },
    eliminarProyecto : function(){
        document.querySelector('[name="templateProyecto1"]').remove();
    }
}

agregarFotoProyecto.addEventListener('click', ()=>{
    habilitarCargarProyecto.habilitandoCargaFoto();
})
ocultarFotoProyecto.addEventListener('click', ()=>{
    habilitarCargarProyecto.ocultarCargaFoto();
})
eliminarProyecto.addEventListener('click', ()=>{
    habilitarCargarProyecto.eliminarProyecto();
})