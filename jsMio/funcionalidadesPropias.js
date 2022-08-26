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
        arrayBotonEditar.forEach(elementBoton => elementBoton.classList.replace('botonEdicionActivo', 'botonEdicionOculto'));
        document.getElementById('formInicioSesion').classList.remove('formDropdownOculto');
    }else if (cerrarSesionRespuestaUsuario==="n"){
        alert('Puede seguir editando el Curriculum');
    }else{
        alert('Ha oprimido cualquier tecla...intentelo nuevamente. s=Si y n=NO');
    }
    
})


/*Editar campos*/
 const editDatosPersonal = document.getElementById('editarDatosPersonales');

 const edicionAcercaDe = (acercaDe) => {
    const nombreCompletoPortadaTarjeta = document.getElementsByClassName('.card-title');
    const tituloProfesionalPortadaTarjeta = document.getElementsByClassName('.card-text');
    const nombreCompletoInTarjeta = document.getElementByName('nombreCompleto');
    const tituloInTarjeta = document.getElementByName('titulo');
    const fotoPerfilInTarjeta = document.getElementByName('fotoPerfil');
 }

 editDatosPersonal.addEventListener('click', (acercaDe) =>{

})



/*Templates*/ 