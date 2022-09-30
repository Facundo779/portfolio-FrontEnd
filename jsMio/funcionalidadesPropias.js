//Registrarse en la página
const bodyRegistro = document.getElementById('formRegistro');
const inputs = document.querySelectorAll('#modalBodyRegistro input');


const expresionesComparacion = {
    nombre: /^[A-Za-z\s]{1,30}$/, 
    apellido: /^[A-Za-z\s]{1,30}$/,
    nombreDeUsuario: /^[A-Za-z0-9]{9,30}$/,
    clave: /^[A-Za-z0-9]{9,}$/,
    correoElectronico: /^[A-Za-z0-9@\.-]{9,}$/
}


const validarRegistro = (evento) => {
    switch (evento.target.name) {
        case "nombre":
            validarCampo(expresionesComparacion.nombre, evento.target, 'checkBox1', 'mnsjAlert1');
            /*
            if(expresionesComparacion.nombre.test(evento.target.value)){
                document.getElementById('checkBox1').classList.remove('iconoValidacion_neutral');
                document.getElementById('checkBox1').classList.add('iconoValidacion_correcto');
                document.getElementById('checkBox1').classList.remove('iconoValidacion_incorrecto');
                document.getElementById('mnsjAlert').classList.remove('mensajeAtencionActivo');    
            }else{
                document.getElementById('checkBox1').classList.remove('iconoValidacion_neutro');
                document.getElementById('checkBox1').classList.add('iconoValidacion_incorrecto');
                document.getElementById('mnsjAlert').classList.add('mensajeAtencionActivo');
            }  */
        break;
        case "apellido":
            validarCampo(expresionesComparacion.apellido, evento.target,'checkBox2','mnsjAlert2');
        break;
        case "nombreDeUsuario":
            validarCampo(expresionesComparacion.nombreDeUsuario, evento.target, 'checkBox3', 'mnsjAlert3');
        break;
        case "correoElectronico":
            validarCampo(expresionesComparacion.correoElectronico, evento.target, 'checkBox4', 'mnsjAlert4');
        break;
        case "clave1":
            validarCampo(expresionesComparacion.clave, evento.target, 'checkBox5', 'mnsjAlert5');
            validarPassRegistro('checkBox6', 'mnsjAlert6');
        break;
        case "clave2": 
        validarCampo(expresionesComparacion.clave, evento.target, 'checkBox6', 'mnsjAlert6');
        validarPassRegistro('checkBox6', 'mnsjAlert6');
        break;
    }
}
///*
const validarCampo = (expresion, campo, idCbox, idMalrt) => {
    if(expresion.test(campo.value)){
        document.getElementById(`${idCbox}`).classList.remove('iconoValidacion_neutral');
        document.getElementById(`${idCbox}`).classList.add('iconoValidacion_correcto');
        document.getElementById(`${idCbox}`).classList.remove('iconoValidacion_incorrecto');
        document.getElementById(`${idMalrt}`).classList.remove('mensajeAtencionActivo');    
        datosRequeridos[campo.name]= true;
    }else{
        document.getElementById(`${idCbox}`).classList.remove('iconoValidacion_neutro');
        document.getElementById(`${idCbox}`).classList.add('iconoValidacion_incorrecto');
        document.getElementById(`${idMalrt}`).classList.add('mensajeAtencionActivo');
        datosRequeridos[campo.name]= false;
    }
} //*/

const validarPassRegistro = (idCbox, idMalrt) => {
    const claveUnoIngresada = document.getElementById('clave1');
    const claveDosIngresada = document.getElementById('clave2');

    if(claveUnoIngresada.value === claveDosIngresada.value){
        document.getElementById(`${idCbox}`).classList.remove('iconoValidacion_neutral');
        document.getElementById(`${idCbox}`).classList.add('iconoValidacion_correcto');
        document.getElementById(`${idCbox}`).classList.remove('iconoValidacion_incorrecto');
        document.getElementById(`${idMalrt}`).classList.remove('mensajeAtencionActivo');
        datosRequeridos[clave1]= true;
        datosRequeridos[clave2]= true;
    }else{
        document.getElementById(`${idCbox}`).classList.remove('iconoValidacion_neutro');
        document.getElementById(`${idCbox}`).classList.add('iconoValidacion_incorrecto');
        document.getElementById(`${idMalrt}`).classList.add('mensajeAtencionActivo');
        datosRequeridos[clave1]= false;
        datosRequeridos[clave2]= false;
    }
}


const datosRequeridos = {
    nombre: false,
    apellido: false,
    nombreDeUsuario: false,
    correoElectronico: false,
    clave1: false,
    clave2: false,
    envioAcorde: function(){
        if(this.nombre&&this.apellido&&this.nombreDeUsuario&&this.correoElectronico&&this.clave1&&this.clave2){
            alert("Ha completado todos los campos correctamente, seleccione ACEPTAR para enviarlos.");
            bodyRegistro.reset();
            document.querySelectorAll('.form-check-input').forEach((checkbox)=>{
                checkbox.classList.remove('iconoValidacion_correcto');
                checkbox.classList.add('iconoValidacion_neutral');
            })
        }else{ 
            alert("Debe completar todos los campos para registrarse, seleccione ACEPTAR para completarlo.");
            evento.preventDefault();
        }
    }
}
/*
const limpiarCbox = () => {
    document.querySelectorAll('.form-check-input').forEach((checkbox)=>{
        checkbox.classList.remove('iconoValidacion_correcto');
        checkbox.classList.add('iconoValidacion_neutral');
    })
} */

inputs.forEach((input) => {
    input.addEventListener('keyup', validarRegistro);
    input.addEventListener('blur', validarRegistro);
})

bodyRegistro.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    datosRequeridos.envioAcorde();
    //limpiarCbox();
})

//Iniciar Sesión
const formularioInicioSesion = document.getElementById('formInicioSesion');
const inputsInicioSesion = document.querySelectorAll('#formInicioSesion input');
const mailValidacion = "dir@correo.com";
const nombreUsuarioValidacion = "Pila";
const passValidacion = "369";
const arrayBotonEditar = document.getElementsByName('botonEditar');

const validarInicioSesion = {
    mail: false,
    pass: false,
    validandoInicioSesion: function (){
        const usuarioOmailIngresado = document.getElementById('formularioInicioDeSesionMail_Usuario');
        const claveInicioSesionIngresada = document.getElementById('formularioInicioDeSesionPass');
        if(usuarioOmailIngresado.value===mailValidacion ||usuarioOmailIngresado.value===nombreUsuarioValidacion && claveInicioSesionIngresada.value===passValidacion){
            validarInicioSesion.mail = true;
            validarInicioSesion.pass = true;
            }else{
                alert("Su nombre de usuario o contraseña es incorrecto");
            } 
    },
    habilitarEdicion: function () {
       //const arrayTarjetaCv = document.getElementsByName('tarjetaCv');
        if(this.mail&&this.pass){
            arrayBotonEditar.forEach(elementBoton => elementBoton.classList.replace('botonEdicionOculto', 'botonEdicionActivo'));
            //[FUNCIONA CORRECTAMENTE LA SIGUIENTE LINEA]arrayTarjetaCv.forEach(elementTarjeta => elementTarjeta.classList.replace('tarjetaCvOculto', 'tarjetaCvActivo'));
            //[FUNCIONA CORRECTAMENTE LA SIGUIENTE LINEA]arrayTarjetaCv.forEach(elementTarjeta=> console.log(elementTarjeta));
            
            
            //arrayBotonEditar.forEach(element=> console.log(element));
            /*
            document.getElementsByName('botonEditar')[0].classList.replace('botonEdicionOculto', 'botonEdicionActivo');
            document.getElementsByName('botonEditar')[1].classList.replace('botonEdicionOculto', 'botonEdicionActivo');
            document.getElementsByName('botonEditar')[2].classList.replace('botonEdicionOculto', 'botonEdicionActivo');
            document.getElementsByName('botonEditar')[3].classList.replace('botonEdicionOculto', 'botonEdicionActivo');
            document.getElementsByName('botonEditar')[4].classList.replace('botonEdicionOculto', 'botonEdicionActivo');
            document.getElementsByName('tarjetaCv').forEach([`${arrayTarjetaCv}`]).classList.replace('botonEdicionOculto', 'botonEdicionActivo');
           */
            alert("Se ha habilitado la edición del Currriculum");
        }else{
            
        }
    }
}

formularioInicioSesion.addEventListener("submit", (e_sesion) => {
        e_sesion.preventDefault();
        validarInicioSesion.validandoInicioSesion();
        validarInicioSesion.habilitarEdicion();
        formularioInicioSesion.reset();
        document.getElementById('formInicioSesion').classList.replace('show','formDropdownOculto');
    })

/*Botón Cerrar Sesión*/
document.getElementById('cerrarSesion').addEventListener('click', (e_sesionClose) => {
    
    const cerrarSesionRespuestaUsuario = prompt("Está por cerrar sesión...Si desea cerrarla presione: - s - sino - n -");
    if(cerrarSesionRespuestaUsuario==="s"){
        //inputsDatosPersonales.forEach(elementoInput=> elementoInput.setAttribute('disabled', ''));
        arrayBotonEditar.forEach(elementBoton => elementBoton.classList.replace('botonEdicionActivo', 'botonEdicionOculto'));
        document.getElementById('formInicioSesion').classList.remove('formDropdownOculto');
        document.querySelector('[name="fotoPerfil"]').setAttribute('disabled', '');
        inputsDatosPersonales.forEach(inputDPersonal=>inputDPersonal.classList.replace('border-primary', 'border-dark'));
        botonesEdicion[this.edicionHabilitada]= false,
        alert('Ha cerrado la sesión y ya no es posible editar el Curriculum');
    }else if (cerrarSesionRespuestaUsuario==="n"){
        alert('Puede seguir editando el Curriculum');
    }else{
        alert('Ha oprimido cualquier tecla...intentelo nuevamente. s=Si y n=NO');
    }
    
})


/*Editar campos*/
 const editDatosPersonal = document.getElementById('editarDatosPersonales');
 const nombreCompletoPortadaTarjeta = document.getElementsByClassName('.card-title');
 const tituloProfesionalPortadaTarjeta = document.getElementsByClassName('.card-text');
 const inputsDatosPersonales = document.querySelectorAll('#inputDatosPersonales');
 
   /* const nombreCompletoPortadaTarjeta = document.getElementsByClassName('.card-title');
    const tituloProfesionalPortadaTarjeta = document.getElementsByClassName('.card-text');
    const inputsDatosPersonales = querySelectorAll('#inputDatosPersonales');*/ //LOS PUSE FUERA DE LA FUNCION
 
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
    //inputsDatosPersonales.forEach(elementoInput=> elementoInput.removeAttribute('disabled'));
    // document.querySelector('[name="nombreCompleto"]').setAttribute('placeholder', prompt('Ingrese su nombre'));
    //document.querySelectorAll('#inputDatosPersonales').forEach(elementoInput=> elementoInput.removeAttribute('disabled'));

})
var seleccion = null;
inputsDatosPersonales.forEach(nuevoDato=>nuevoDato.addEventListener("click", () => {
    seleccion = nuevoDato.getAttribute('name');
    botonesEdicion.inputNuevosDatosPersonales();
    //seleccion= inputsDatosPersonales[0].getAttribute('name');
    //botonesEdicion.inputNuevosDatosPersonales();
}))


/*Acciones en fotos de proyecto*/
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

/*Funciones de tarjeta educación*/
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

/*Funciones de tarjeta experiencia*/
/*
const conjuntoTemplateLaboral = document.querySelector('#templateLaborales');
const botonEliminarTemplateLaboral = document.querySelector('#botonSaberSiEliminoSegmentoLaboral');

const accionesSobreTemplateLaboral = {
    eliminandoTemplateLaboral : function(){
        document.querySelector('[name="templateLaboral1"]').remove();
    }
}

botonEliminarTemplateLaboral.addEventListener('click', ()=>{
    accionesSobreTemplateLaboral.eliminandoTemplateLaboral();
}) 
*/
/*Template Laboral*/
 const btnNuevoTrabajo = document.getElementById('btnAgregarTrabajo');
 const botonEliminarTemplateLaboral = document.getElementById('botonSaberSiEliminoSegmentoLaboral');
 //templateNuevoTrabajo.cBxSeleccionTemLab = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoLaboral');
 //const cBxSeleccionTemLab = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoLaboral');

 const templateNuevoTrabajo = {
    iterante : 0,
    cBxSeleccionHabilitada : false,
    conjuntoTemplateLaboral:[],
    cBxSeleccionTemLab:[], 
    cBxSeleccionados:[],
    e_laboralNoSeleccionados:[],
    eliminandoTemplateLaboral : function(e_laboralAEliminar){
        if(this.conjuntoTemplateLaboral.forEach(e_cBxName=>e_cBxName.getAttribute('cBxName'))===e_laboralAEliminar.forEach(e_labPorEliminar=>e_labPorEliminar.getAttribute('name'))){
            console.log(e_cBxName);
        }else{
            console.log('CÓDIGO Nº 0: Hay templates que no se han descartado');
        }
        this.cBxSeleccionHabilitada = false;
        //e_laboralAEliminar.forEach(e_labPorEliminar=>e_labPorEliminar.remove());
        //document.querySelector(`[name="${target_name_laboral}"]`).remove();
        //this.iterante = this.iterante -= 1;  
    },
    
    seleccionCBxLab : function(){
        this.cBxSeleccionTemLab = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoLaboral');
        console.log(this.cBxSeleccionTemLab);
       //(NO ELIMINAR ESTA LINEA)this.cBxSeleccionTemLab.forEach(cBxLab=>this.cBxSeleccionados.push(cBxLab.checked));
        this.cBxSeleccionTemLab.forEach((cBxLab)=>{if(cBxLab.checked===true){
            this.cBxSeleccionados.push(cBxLab)
        }else{
            this.e_laboralNoSeleccionados.push(cBxLab);
            //console.log(e_laboralNoSeleccionados);
            console.log('CÓDIGO Nº 1: Estos elementos no han sido seleccionados...');
            console.log(this.e_laboralNoSeleccionados);
            };
        });
        console.log(this.cBxSeleccionados);
        
        if(this.cBxSeleccionados){
            this.cBxSeleccionHabilitada = true;
            console.log(this.cBxSeleccionHabilitada);
        }else{
            alert('CÓDIGO Nº 2:No se ha seleccionado ningun elemento para eliminar');
        }
    },

    insertarNuevoTrabajo : function(){
        
        const modalBdyExperiencia = document.getElementById('modalBodyLaboral');
        const templateDeTrabajo = document.getElementById('templateLaboral').content;
        const nuevoTemplateTrabajo = document.createDocumentFragment();
        const clonarTemplateTrabajo = templateDeTrabajo.cloneNode(true);
        nuevoTemplateTrabajo.appendChild(clonarTemplateTrabajo);
        modalBdyExperiencia.appendChild(nuevoTemplateTrabajo);
        this.conjuntoTemplateLaboral = document.querySelectorAll('#templateLaborales');
        this.cBxSeleccionTemLab = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoLaboral');
        this.iterante = this.iterante += 1; 
        const nuevoNameTempLab = 'templateLaboral' + this.iterante;
        const nuevocBxNameTempLab = 'cBxSegmentoLaboral' + this.iterante;
        const nuevoName_cBx = 'cBxSegmentoLaboral' + this.iterante;
        //(descartado pero queda de ejemplo)conjuntoTemplateLaboral[conjuntoTemplateLaboral.length - 1].forEach(porCNuevoTempLab=>porCNuevoTempLab.setAttribute('name',`"${nuevoNameTempLab}"`));
        this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('name',`${nuevoNameTempLab}`);
        this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('cBxName',`${nuevocBxNameTempLab}`);
        this.cBxSeleccionTemLab[this.cBxSeleccionTemLab.length - 1].setAttribute('name',`${nuevoName_cBx}`);
        //botonEliminarTemplateLaboral[botonEliminarTemplateLaboral.length - 1].setAttribute('name',`${nuevoNameBtnTempLab}`);
        //this.cBxSeleccionTemLab = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoLaboral');
       // inputsDatosPersonales.forEach(nuevoDato=>nuevoDato.addEventListener("click", () => {
    }
}

botonEliminarTemplateLaboral.addEventListener('click', ()=>{
    templateNuevoTrabajo.seleccionCBxLab(); 
    if(templateNuevoTrabajo.cBxSeleccionHabilitada){
        var seBorraTempLab = prompt('Se van a eliminar los trabajos seleccionados, si está de acuerdo: presione (s) sino (n)');
        switch(seBorraTempLab){
            case "s":
            templateNuevoTrabajo.eliminandoTemplateLaboral(templateNuevoTrabajo.cBxSeleccionados);
            break;
            case "n":
            alert('CÓDIGO Nº 3:No se borrará nada. Puede seleccionar nuevamente si lo desea')
        }
    }else{
        alert('CÓDIGO Nº 4:Ha presionado una tecla que no se encuentra habilitada');
    }
    
})

 btnNuevoTrabajo.addEventListener('click', ()=>{
    templateNuevoTrabajo.insertarNuevoTrabajo();
 })

/*
 botonEliminarTemplateLaboral.addEventListener('click', ()=>{
    templateNuevoTrabajo.eliminandoTemplateLaboral();  
})*/
