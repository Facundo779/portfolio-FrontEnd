//Funciones en tarjeta educación

//Template Educación
const btnNuevoEducacion = document.getElementById('btnAgregarEducacion');
const botonEliminarTemplateEducacion = document.getElementById('botonsaberSiEliminoSegmentoEducacion');

const nuevoTemplateEducacion = {
   iterante : 0,
   cBxSeleccionHabilitada : false,
   conjuntoTemplateEducacion:[],
   cBxSeleccionTemEdu:[], 
   cBxSeleccionados:[],
   cBx_siEstudiaActualmente: [],
   cBx_nameb_siEstudiaActualmente: [],
   e_educacionNoSeleccionados:[],
   conjuntoTemplateEducacionEliminandose:[],
   i_eduE:[],
   i_resetEdu:[],
   conjuntoInstitucionTempEdu: [],
   conjuntoCarreraTempEdu: [],
   conjuntoTituloProfesionalTempEdu: [],
   cursandoActualmente: [],
   fechaObtencionTitulo: [],
   filamodalTitProf: [],
   filamodalObtTitProf: [],
   
   saberSiPrehabilitacionCargaTitulo : function(){
        this.cursandoActualmente = document.querySelectorAll('#estudiaActualmenteCBox');
        this.cursandoActualmente.forEach((e_tituloProf)=>{
            e_tituloProf.addEventListener('change',()=>{
                nuevoTemplateEducacion.habilitandoCargaTitulo(e_tituloProf);
            });
        });
    },
   habilitandoCargaTitulo : function(e_targetTitProf){
        if(e_targetTitProf.checked){
        var iterador_SiEstAct = this.conjuntoTemplateEducacion.length;
        for(e_iterantefilamodal1=1; e_iterantefilamodal1 <= iterador_SiEstAct; e_iterantefilamodal1++){
            this.filamodalTitProf.forEach((e_titProf)=>{
                switch(e_titProf.getAttribute('nameb')){
                    case 'filaModalEducacionTituloProfesional' + `${e_iterantefilamodal1}`:
                        if(e_targetTitProf.getAttribute('nameb') === `${e_iterantefilamodal1}`){
                        document.querySelector(`[nameb="${e_titProf.getAttribute('nameb')}"]`).classList.replace('habilitarTituloProfesionalActivo','habilitarTituloProfesionalOculto');
                        }else{console.log("tenes un error1")};
                    break;
                };
            });
            this.filamodalObtTitProf.forEach((e_obtTitProf)=>{
                switch(e_obtTitProf.getAttribute('nameb')){
                    case 'filaModalEducacionTituloFechaObtencion' + `${e_iterantefilamodal1}`:
                        if(e_targetTitProf.getAttribute('nameb') === `${e_iterantefilamodal1}`){
                    document.querySelector(`[nameb="${e_obtTitProf.getAttribute('nameb')}"]`).classList.replace('habilitarTituloProfesionalActivo','habilitarTituloProfesionalOculto');
                        }else{console.log("tenes un error2")};
                    break;
                };
            });
            
        };
        
        //document.querySelector('#filaModalEducacionTituloProfesional').classList.replace('habilitarTituloProfesionalActivo','habilitarTituloProfesionalOculto');
        //document.querySelector('#filaModalEducacionTituloFechaObtencion').classList.replace('habilitarTituloProfesionalActivo','habilitarTituloProfesionalOculto');
        }else{
            var iterador2_SiEstAct = this.conjuntoTemplateEducacion.length;
            for(e_iterantefilamodal2=1; e_iterantefilamodal2 <= iterador2_SiEstAct; e_iterantefilamodal2++){
            this.filamodalTitProf.forEach((e_titProf)=>{
                switch(e_titProf.getAttribute('nameb')){
                    case 'filaModalEducacionTituloProfesional' + `${e_iterantefilamodal2}`:
                        if(e_targetTitProf.getAttribute('nameb') === `${e_iterantefilamodal2}`){
                        document.querySelector(`[nameb="${e_titProf.getAttribute('nameb')}"]`).classList.replace('habilitarTituloProfesionalOculto','habilitarTituloProfesionalActivo');
                        }else{console.log("tenes un error3")};
                    break;
                };
            });
            this.filamodalObtTitProf.forEach((e_obtTitProf)=>{
                switch(e_obtTitProf.getAttribute('nameb')){
                    case 'filaModalEducacionTituloFechaObtencion' + `${e_iterantefilamodal2}`:
                        if(e_targetTitProf.getAttribute('nameb') === `${e_iterantefilamodal2}`){
                        document.querySelector(`[nameb="${e_obtTitProf.getAttribute('nameb')}"]`).classList.replace('habilitarTituloProfesionalOculto','habilitarTituloProfesionalActivo');
                        }else{console.log("tenes un error4")};
                    break;
                };
            });
        //document.querySelector('#filaModalEducacionTituloProfesional').classList.replace('habilitarTituloProfesionalOculto','habilitarTituloProfesionalActivo');
        //document.querySelector('#filaModalEducacionTituloFechaObtencion').classList.replace('habilitarTituloProfesionalOculto','habilitarTituloProfesionalActivo');
        };
        }; 
    },
   eliminandoTemplateEducacion : function(e_educacionAEliminar, e_conjuntoTE){
       /*
       [NO BORRAR PORQUE PERMITE SABER QUE HACE EL CÓDIGO]
       console.log('esto es lo que guardan las variables');
       e_conjuntoTE.forEach(e_cBxName=>console.log(e_cBxName.getAttribute('name')));
       e_conjuntoTE.forEach(e_cBxName=>console.log(e_cBxName.getAttribute('cbxname')));
       e_educacionAEliminar.forEach(e_labPorEliminar=>console.log(e_labPorEliminar.getAttribute('name')));
       console.log('Borrará:'); 
       */
   e_educacionAEliminar.forEach((e_eduE)=>{
       this.i_eduE = this.conjuntoTemplateEducacion.length;
       //console.log(this.i_eduE);
       var iterante_eduE = 1;
       for(iterante_eduE; iterante_eduE <= this.i_eduE; iterante_eduE++){
           switch(e_eduE.getAttribute('name')){              
               case 'cBxSegmentoEducacion'+`${iterante_eduE}`:
                   e_conjuntoTE.forEach((e_cBxName)=>{if(e_cBxName.getAttribute('cbxname') === e_eduE.getAttribute('name')){
                   this.conjuntoTemplateEducacionEliminandose.push(e_cBxName)}});
               break;    
               }}
   });
       //console.log(this.conjuntoTemplateEducacionEliminandose);
       this.conjuntoTemplateEducacionEliminandose.forEach(e_definitivoAEliminar=>e_definitivoAEliminar.remove());
       this.cBxSeleccionHabilitada = false;
       nuevoTemplateEducacion.resetearAtributosDeTempEdu();
       
   },
   
   seleccionCBxEdu : function(){
       this.cBxSeleccionTemEdu = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoEducacion');
       //console.log(this.cBxSeleccionTemEdu);
      //(NO ELIMINAR ESTA LINEA)this.cBxSeleccionTemLab.forEach(cBxEdu=>this.cBxSeleccionados.push(cBxEdu.checked));
       this.cBxSeleccionTemEdu.forEach((cBxEdu)=>{if(cBxEdu.checked===true){
           this.cBxSeleccionados.push(cBxEdu)
       }else{
           this.e_educacionNoSeleccionados.push(cBxEdu);
           //console.log(e_educacionNoSeleccionados);
           //console.log('CÓDIGO Nº 1: Estos elementos no han sido seleccionados...');
           //console.log(this.e_educacionNoSeleccionados);
           };
       });
       //console.log(this.cBxSeleccionados);
       
       if(this.cBxSeleccionados){
           this.cBxSeleccionHabilitada = true;
           //console.log(this.cBxSeleccionHabilitada);
       }else{
           alert('CÓDIGO Nº 2:No se ha seleccionado ningun elemento para eliminar');
       }
   },
   resetearAtributosDeTempEdu : function(){ 
    this.conjuntoTemplateEducacion = document.querySelectorAll('#templateEducaciones');
    this.cBxSeleccionTemEdu = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoEducacion');
    this.conjuntoInstitucionTempEdu = document.querySelectorAll('[name="institucion"]');
    this.conjuntoCarreraTempEdu = document.querySelectorAll('[name="carrera"]');
    this.conjuntoTituloProfesionalTempEdu = document.querySelectorAll('[name="tituloProfesional"]');
    this.cBx_siEstudiaActualmente = document.querySelectorAll('#estudiaActualmenteCBox');
    //console.log('templates laborales que no se eliminan:');
    //console.log(this.conjuntoTemplateEducacion);
    //this.i_resetEdu = this.conjuntoTemplateEducacion.length;
    //var iterante_resetLab = 1;
    this.iterante = 1;
    this.conjuntoTemplateEducacion.forEach((e_eduResetAttrib)=>{
        const resetNuevoNameTempEdu = 'templateEducacion' + this.iterante;
        const resetNuevocBxNameTempEdu = 'cBxSegmentoEducacion' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_eduResetAttrib.setAttribute('name',`${resetNuevoNameTempEdu}`); 
        e_eduResetAttrib.setAttribute('cbxname',`${resetNuevocBxNameTempEdu}`);
    });
    this.iterante = 1;
    this.conjuntoInstitucionTempEdu.forEach((e_empresaTempEduResetAttrib)=>{
        const resetNuevoNameBInstitucionTempEdu = 'institucion' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_empresaTempEduResetAttrib.setAttribute('nameb',`${resetNuevoNameBInstitucionTempEdu}`);
    });
    this.iterante = 1;
    this.conjuntoCarreraTempEdu.forEach((e_tareaTempEduResetAttrib)=>{
        const resetNuevoNameBcarreraTempEdu = 'carrera' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_tareaTempEduResetAttrib.setAttribute('nameb',`${resetNuevoNameBcarreraTempEdu}`);
    });
    this.iterante = 1;
    this.conjuntoTituloProfesionalTempEdu.forEach((e_tituloProfesionalTempLabResetAttrib)=>{
        const resetNuevoNameBtitProfTempLab = 'tituloProfesional' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_tituloProfesionalTempLabResetAttrib.setAttribute('nameb',`${resetNuevoNameBtitProfTempLab}`);
    });
    this.iterante = 1;
    this.cBxSeleccionTemEdu.forEach((e_eduResetAttribCbxSelect)=>{
        const resetNuevoName_cBx = 'cBxSegmentoEducacion' + this.iterante;
        e_eduResetAttribCbxSelect.setAttribute('name',`${resetNuevoName_cBx}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.cBx_siEstudiaActualmente.forEach((e_ResetAttribCbxSiEstudiaActualmente)=>{
        const resetcBxEstudiaActualmente = /*'cBx_estudiaActualmente' +*/ this.iterante;
        e_ResetAttribCbxSiEstudiaActualmente.setAttribute('nameb',`${resetcBxEstudiaActualmente}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.fechaObtencionTitulo.forEach((e_ResetAttribFechaObtTit)=>{
        const resetFechaObtTit = 'fechaObtencionTitulo' + this.iterante;
        e_ResetAttribFechaObtTit.setAttribute('nameb',`${resetFechaObtTit}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.filamodalTitProf.forEach((e_ResetAttribfilaModTitProf)=>{
        const resetfilaTitProf = 'filaModalEducacionTituloProfesional' + this.iterante;
        e_ResetAttribfilaModTitProf.setAttribute('nameb',`${resetfilaTitProf}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.filamodalObtTitProf.forEach((e_ResetAttribfilaFechaObtTit)=>{
        const resetfilaFechaObtTit = 'filaModalEducacionTituloFechaObtencion' + this.iterante;
        e_ResetAttribfilaFechaObtTit.setAttribute('nameb',`${resetfilaFechaObtTit}`);
        this.iterante = this.iterante += 1;
    });
    },
   setearAtributosDeTempEducacion : function(){ 
    this.iterante = this.iterante += 1;
    const nuevoNameTempEdu = 'templateEducacion' + this.iterante;
    const nuevocBxNameTempEdu = 'cBxSegmentoEducacion' + this.iterante;
    const nuevoNameEdu_cBx = 'cBxSegmentoEducacion' + this.iterante;
    const nuevoNameB_institucion = 'institucion' + this.iterante;
    const nuevoNameB_carrera = 'carrera' + this.iterante;
    const nuevoNameB_Titulo = 'tituloProfesional' + this.iterante;
    const nuevo_cBxEstudiaActualmente = 'cBx_estudiaActualmente' + this.iterante;
    const nuevo_cBxNamebEstudiaActualmente = /*'cBx_estudiaActualmente' +*/ this.iterante;
    const nuevoNameFechaObtTit = 'fechaObtencionTitulo' + this.iterante;
    const nuevoNameFilaTitProf = 'filaModalEducacionTituloProfesional' + this.iterante;
    const nuevoNameFilaFechaObtTit = 'filaModalEducacionTituloFechaObtencion' + this.iterante;
    this.conjuntoTemplateEducacion[this.conjuntoTemplateEducacion.length - 1].setAttribute('name',`${nuevoNameTempEdu}`);
    this.conjuntoTemplateEducacion[this.conjuntoTemplateEducacion.length - 1].setAttribute('cbxname',`${nuevocBxNameTempEdu}`);
    this.conjuntoInstitucionTempEdu[this.conjuntoInstitucionTempEdu.length - 1].setAttribute('nameb',`${nuevoNameB_institucion}`);
    this.conjuntoCarreraTempEdu[this.conjuntoCarreraTempEdu.length - 1].setAttribute('nameb',`${nuevoNameB_carrera}`);
    this.conjuntoTituloProfesionalTempEdu[this.conjuntoTituloProfesionalTempEdu.length - 1].setAttribute('nameb',`${nuevoNameB_Titulo}`);
    this.cBxSeleccionTemEdu[this.cBxSeleccionTemEdu.length - 1].setAttribute('name',`${nuevoNameEdu_cBx}`);
    this.cBx_siEstudiaActualmente[this.cBx_siEstudiaActualmente.length - 1].setAttribute('name',`${nuevo_cBxEstudiaActualmente}`);
    this.cBx_siEstudiaActualmente[this.cBx_siEstudiaActualmente.length - 1].setAttribute('nameb',`${nuevo_cBxNamebEstudiaActualmente}`);
    this.fechaObtencionTitulo[this.fechaObtencionTitulo.length - 1].setAttribute('nameb',`${nuevoNameFechaObtTit}`);
    this.filamodalTitProf[this.filamodalTitProf.length - 1].setAttribute('nameb',`${nuevoNameFilaTitProf}`);
    this.filamodalObtTitProf[this.filamodalObtTitProf.length - 1].setAttribute('nameb',`${nuevoNameFilaFechaObtTit}`);
   },
   insertarNuevoEducacion : function(){
    
       const modalBdyEducacion = document.getElementById('modalBodyEducacion');
       const templateDeEducacion = document.getElementById('templateEducacion').content;
       const nuevoTemplateEducacional = document.createDocumentFragment();
       const clonarTemplateEducacion = templateDeEducacion.cloneNode(true);
       nuevoTemplateEducacional.appendChild(clonarTemplateEducacion);
       modalBdyEducacion.appendChild(nuevoTemplateEducacional);
       this.conjuntoTemplateEducacion = document.querySelectorAll('#templateEducaciones');
       this.conjuntoInstitucionTempEdu = document.querySelectorAll('[name="institucion"]');
       this.conjuntoCarreraTempEdu = document.querySelectorAll('[name="carrera"]');
       this.conjuntoTituloProfesionalTempEdu = document.querySelectorAll('[name="tituloProfesional"]');
       this.cBxSeleccionTemEdu = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoEducacion');
       this.cBx_siEstudiaActualmente = document.querySelectorAll('#estudiaActualmenteCBox');
       this.cBx_nameb_siEstudiaActualmente = document.querySelectorAll('[nameb="estudiaActualmenteCBox"]');
       this.fechaObtencionTitulo = document.querySelectorAll('[name="fechaObtencionTitulo"]');
       this.filamodalTitProf = document.querySelectorAll('#filaModalEducacionTituloProfesional');
       this.filamodalObtTitProf = document.querySelectorAll('#filaModalEducacionTituloFechaObtencion');
       nuevoTemplateEducacion.setearAtributosDeTempEducacion();
       nuevoTemplateEducacion.saberSiPrehabilitacionCargaTitulo();

       /*this.iterante = this.iterante += 1; 
       const nuevoNameTempEdu = 'templateEducacion' + this.iterante;
       const nuevocBxNameTempLab = 'cBxSegmentoEducacion' + this.iterante;
       const nuevoName_cBx = 'cBxSegmentoEducacion' + this.iterante;
       this.conjuntoTemplateEducacion[this.conjuntoTemplateEducacion.length - 1].setAttribute('name',`${nuevoNameTempEdu}`);
       this.conjuntoTemplateEducacion[this.conjuntoTemplateEducacion.length - 1].setAttribute('cbxname',`${nuevocBxNameTempLab}`);
       this.cBxSeleccionTemLab[this.cBxSeleccionTemLab.length - 1].setAttribute('name',`${nuevoName_cBx}`);*/
       botonEdicionEducacion.saberSiHayTemplate = true;
       botonEdicionEducacion.actualizarEdicionCampoEducacionSi();
   }
}

botonEliminarTemplateEducacion.addEventListener('click', ()=>{
   nuevoTemplateEducacion.seleccionCBxEdu(); 
   if(nuevoTemplateEducacion.cBxSeleccionHabilitada){
       var seBorraTempEdu = prompt('Se van a eliminar los estudios seleccionados, si está de acuerdo: presione (s) sino (n)');
       switch(seBorraTempEdu){
           case "s":
           nuevoTemplateEducacion.eliminandoTemplateEducacion(nuevoTemplateEducacion.cBxSeleccionados, nuevoTemplateEducacion.conjuntoTemplateEducacion);
           break;
           case "n":
           alert('CÓDIGO Nº 3:No se borrará nada. Puede seleccionar nuevamente si lo desea')
       }
   }else{
       alert('CÓDIGO Nº 4:Ha presionado una tecla que no se encuentra habilitada');
   }
   
})

btnNuevoEducacion.addEventListener('click', ()=>{
   nuevoTemplateEducacion.insertarNuevoEducacion();
})

//Editar campos de Educación
    const editDatosEducacionales = document.getElementById('editarTitulos');
    //const inputsDatosEducacion = document.querySelectorAll('#inputEducacion');

    const botonEdicionEducacion = {
        edicionHabilitadaEducacion: false,
        saberSiHayTemplate: false,
        inputsDatosEducacion: [],
        inputsDatosEduFechas: [],
        //seleccionEducacion: [],
        numDeTempsLabs_Iterar: [],
        //nameVarTempEdu: [],
        habilitarCamposDatosEducacion: function(){
            this.inputsDatosEducacion = document.querySelectorAll('#inputEducacion');
            this.inputsDatosEduFechas = document.querySelectorAll('[name="fechaObtencionTitulo"]');
            this.inputsDatosEducacion.forEach(inputDEducacion=>inputDEducacion.classList.replace('border-dark', 'border-primary'));
            this.inputsDatosEduFechas.forEach(inputDEduFecha=>inputDEduFecha.disabled = false);
            this.edicionHabilitadaEducacion= true;
            //console.log('Code 1');
            //console.log(this.edicionHabilitadaEducacion);
        },
        actualizarEdicionCampoEducacionSi: function(){
            if(this.edicionHabilitadaEducacion){
                botonEdicionEducacion.habilitarCamposDatosEducacion();
                botonEdicionEducacion.saberSiModificoDatosEdu();
            }else{
                console.log('hasta que no se habilite la edición...no se podrán modificar los campos');
            }
        },
        saberSiModificoDatosEdu: function(){
            if(botonEdicionEducacion.edicionHabilitadaEducacion){
                botonEdicionEducacion.inputsDatosEducacion.forEach((nuevoDatoEducacion)=>{
                    nuevoDatoEducacion.addEventListener('click',()=>{
                        //[NO BORRAR]console.log('Code 2');
                        //[NO BORRAR]console.log(botonEdicionEducacion.edicionHabilitadaEducacion);
                        var seleccionEdu = null;
                        seleccionEdu = nuevoDatoEducacion.getAttribute('nameb');
                        //[NO BORRAR]console.log(seleccionLaboral);
                        botonEdicionEducacion.inputNuevosDatosLaborales(seleccionEdu);
                    })
                });
             }else{
                console.log('Se debe habilitar la edición para realizar modificaciones');
             };
        },
        campoEduAModificar: function(target_nameBEdu){
            document.querySelector(`[nameb="${target_nameBEdu}"]`).textContent=prompt('');
        },
        inputNuevosDatosLaborales: function(selecEdu){
            //[NO BORRAR]console.log(selecEdu);
            if(this.edicionHabilitadaEducacion){
                //console.log('Code 3');
                //console.log(this.edicionHabilitadaEducacion);
                this.numDeTempsEdus_Iterar = nuevoTemplateEducacion.conjuntoTemplateEducacion.length;
                var iterante_TemEdu = 1;
                for(iterante_TemEdu; iterante_TemEdu <= this.numDeTempsEdus_Iterar; iterante_TemEdu++){
                    nuevoTemplateEducacion.conjuntoTemplateEducacion.forEach((nameTempEdu)=>{ 
                    //[NO BORRAR]console.log(nameTempLab.getAttribute('name'));
                        switch (nameTempEdu.getAttribute('name')){
                            case 'templateEducacion' + iterante_TemEdu:
                                switch (selecEdu){
                                    case 'institucion' + iterante_TemEdu:
                                        botonEdicionEducacion.campoEduAModificar(selecEdu);
                                    break;    
                                    case 'carrera' + iterante_TemEdu:
                                        botonEdicionEducacion.campoEduAModificar(selecEdu);
                                    break;    /*
                                    case 'descripcionTrabajo' + iterante_TemEdu:
                                        botonEdicionEducacion.campoEduAModificar(selecEdu);
                                    break;    */
                                }
                            break;
                        }   
                    });
                }
            }else{
                alert('Debe hacer click en el botón de editar sección para modificar los campos');
            }
        }  
     }
     
     //var seleccionLaboral = null; 
    //[compruebo error NO BORRAR]console.log(botonEdicionEducacion.saberSiHayTemplate);
editDatosEducacionales.addEventListener('click', () =>{
    //[compruebo error NO BORRAR]
    //console.log(botonEdicionEducacion.saberSiHayTemplate);
    botonEdicionEducacion.habilitarCamposDatosEducacion();
    //console.log(botonEdicionEducacion.edicionHabilitadaEducacion);
    botonEdicionEducacion.saberSiModificoDatosEdu();
 })