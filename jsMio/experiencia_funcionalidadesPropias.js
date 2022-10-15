//Funciones de tarjeta experiencia

//Template Laboral
const btnNuevoTrabajo = document.getElementById('btnAgregarTrabajo');
const botonEliminarTemplateLaboral = document.getElementById('botonSaberSiEliminoSegmentoLaboral');

const templateNuevoTrabajo = {
   iterante : 0,
   cBxSeleccionHabilitada : false,
   conjuntoTemplateLaboral:[],
   cBxSeleccionTemLab:[], 
   cBxSeleccionados:[],
   e_laboralNoSeleccionados:[],
   conjuntoTemplateLaboralEliminandose:[],
   i_labE:[],
   i_resetLab:[],
   conjuntoEmpresasTempLab: [],
   conjuntoTareaTempLab: [],
   conjuntoDescripTrabajoTempLab: [],

   eliminandoTemplateLaboral : function(e_laboralAEliminar, e_conjuntoTL){
       /*
       [NO BORRAR PORQUE PERMITE SABER QUE HACE EL CÓDIGO]
       console.log('esto es lo que guardan las variables');
       e_conjuntoTL.forEach(e_cBxName=>console.log(e_cBxName.getAttribute('name')));
       e_conjuntoTL.forEach(e_cBxName=>console.log(e_cBxName.getAttribute('cbxname')));
       e_laboralAEliminar.forEach(e_labPorEliminar=>console.log(e_labPorEliminar.getAttribute('name')));
       console.log('Borrará:'); 
       */
   e_laboralAEliminar.forEach((e_labE)=>{
       this.i_labE = this.conjuntoTemplateLaboral.length;
       //console.log(this.i_labE);
       var iterante_labE = 1;
       for(iterante_labE; iterante_labE <= this.i_labE; iterante_labE++){
           switch(e_labE.getAttribute('name')){              
               case 'cBxSegmentoLaboral'+`${iterante_labE}`:
                   e_conjuntoTL.forEach((e_cBxName)=>{if(e_cBxName.getAttribute('cbxname') === e_labE.getAttribute('name')){
                   this.conjuntoTemplateLaboralEliminandose.push(e_cBxName)}});
               break;    
               }}
   });
       //console.log(this.conjuntoTemplateLaboralEliminandose);
       this.conjuntoTemplateLaboralEliminandose.forEach(e_definitivoAEliminar=>e_definitivoAEliminar.remove());
       this.cBxSeleccionHabilitada = false;
       templateNuevoTrabajo.resetearAtributosDeTempLab();
       
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
       //console.log(this.cBxSeleccionados);
       
       if(this.cBxSeleccionados){
           this.cBxSeleccionHabilitada = true;
           console.log(this.cBxSeleccionHabilitada);
       }else{
           alert('CÓDIGO Nº 2:No se ha seleccionado ningun elemento para eliminar');
       }
   },
   resetearAtributosDeTempLab : function(){ 
    this.conjuntoTemplateLaboral = document.querySelectorAll('#templateLaborales');
    this.cBxSeleccionTemLab = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoLaboral');
    this.conjuntoEmpresasTempLab = document.querySelectorAll('[name="empresa"]');
    this.conjuntoTareaTempLab = document.querySelectorAll('[name="tarea"]');
    this.conjuntoDescripTrabajoTempLab = document.querySelectorAll('[name="descripcionTrabajo"]');
    console.log('templates laborales que no se eliminan:');
    console.log(this.conjuntoTemplateLaboral);
    //this.i_resetLab = this.conjuntoTemplateLaboral.length;
    //var iterante_resetLab = 1;
    this.iterante = 1;
    this.conjuntoTemplateLaboral.forEach((e_labResetAttrib)=>{
        const resetNuevoNameTempLab = 'templateLaboral' + this.iterante;
        const resetNuevocBxNameTempLab = 'cBxSegmentoLaboral' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_labResetAttrib.setAttribute('name',`${resetNuevoNameTempLab}`); 
        e_labResetAttrib.setAttribute('cbxname',`${resetNuevocBxNameTempLab}`);
    });
    this.iterante = 1;
    this.conjuntoEmpresasTempLab.forEach((e_empresaTempLabResetAttrib)=>{
        const resetNuevoNameBEmpresaTempLab = 'empresa' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_empresaTempLabResetAttrib.setAttribute('nameb',`${resetNuevoNameBEmpresaTempLab}`);
    });
    this.iterante = 1;
    this.conjuntoTareaTempLab.forEach((e_tareaTempLabResetAttrib)=>{
        const resetNuevoNameBtareaTempLab = 'tarea' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_tareaTempLabResetAttrib.setAttribute('nameb',`${resetNuevoNameBtareaTempLab}`);
    });
    this.iterante = 1;
    this.conjuntoDescripTrabajoTempLab.forEach((e_descripcionTrabajoTempLabResetAttrib)=>{
        const resetNuevoNameBdescripTrabTempLab = 'empresa' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_descripcionTrabajoTempLabResetAttrib.setAttribute('nameb',`${resetNuevoNameBdescripTrabTempLab}`);
    });
    this.iterante = 1;
    this.cBxSeleccionTemLab.forEach((e_labResetAttribCbxSelect)=>{
        const resetNuevoName_cBx = 'cBxSegmentoLaboral' + this.iterante;
        e_labResetAttribCbxSelect.setAttribute('name',`${resetNuevoName_cBx}`);
        this.iterante = this.iterante += 1;
    });
    },
   setearAtributosDeTempLab : function(){ 
    this.iterante = this.iterante += 1;
    const nuevoNameTempLab = 'templateLaboral' + this.iterante;
    const nuevocBxNameTempLab = 'cBxSegmentoLaboral' + this.iterante;
    const nuevoName_cBx = 'cBxSegmentoLaboral' + this.iterante;
    const nuevoNameB_empresa = 'empresa' + this.iterante;
    const nuevoNameB_tarea = 'tarea' + this.iterante;
    const nuevoNameB_descripTarea = 'descripcionTrabajo' + this.iterante;
    this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('name',`${nuevoNameTempLab}`);
    this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('cbxname',`${nuevocBxNameTempLab}`);
    this.conjuntoEmpresasTempLab[this.conjuntoEmpresasTempLab.length - 1].setAttribute('nameb',`${nuevoNameB_empresa}`);
    this.conjuntoTareaTempLab[this.conjuntoTareaTempLab.length - 1].setAttribute('nameb',`${nuevoNameB_tarea}`);
    this.conjuntoDescripTrabajoTempLab[this.conjuntoDescripTrabajoTempLab.length - 1].setAttribute('nameb',`${nuevoNameB_descripTarea}`);
    this.cBxSeleccionTemLab[this.cBxSeleccionTemLab.length - 1].setAttribute('name',`${nuevoName_cBx}`);
   },
   insertarNuevoTrabajo : function(){
       
       const modalBdyExperiencia = document.getElementById('modalBodyLaboral');
       const templateDeTrabajo = document.getElementById('templateLaboral').content;
       const nuevoTemplateTrabajo = document.createDocumentFragment();
       const clonarTemplateTrabajo = templateDeTrabajo.cloneNode(true);
       nuevoTemplateTrabajo.appendChild(clonarTemplateTrabajo);
       modalBdyExperiencia.appendChild(nuevoTemplateTrabajo);
       this.conjuntoTemplateLaboral = document.querySelectorAll('#templateLaborales');
       this.conjuntoEmpresasTempLab = document.querySelectorAll('[name="empresa"]');
       this.conjuntoTareaTempLab = document.querySelectorAll('[name="tarea"]');
       this.conjuntoDescripTrabajoTempLab = document.querySelectorAll('[name="descripcionTrabajo"]');
       this.cBxSeleccionTemLab = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoLaboral');
       templateNuevoTrabajo.setearAtributosDeTempLab();
       /*this.iterante = this.iterante += 1; 
       const nuevoNameTempLab = 'templateLaboral' + this.iterante;
       const nuevocBxNameTempLab = 'cBxSegmentoLaboral' + this.iterante;
       const nuevoName_cBx = 'cBxSegmentoLaboral' + this.iterante;
       this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('name',`${nuevoNameTempLab}`);
       this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('cbxname',`${nuevocBxNameTempLab}`);
       this.cBxSeleccionTemLab[this.cBxSeleccionTemLab.length - 1].setAttribute('name',`${nuevoName_cBx}`);*/
       botonEdicionLaboral.saberSiHayTemplate = true;
       botonEdicionLaboral.actualizarEdicionCampoLaboralSi();
   }
}

botonEliminarTemplateLaboral.addEventListener('click', ()=>{
   templateNuevoTrabajo.seleccionCBxLab(); 
   if(templateNuevoTrabajo.cBxSeleccionHabilitada){
       var seBorraTempLab = prompt('Se van a eliminar los trabajos seleccionados, si está de acuerdo: presione (s) sino (n)');
       switch(seBorraTempLab){
           case "s":
           templateNuevoTrabajo.eliminandoTemplateLaboral(templateNuevoTrabajo.cBxSeleccionados, templateNuevoTrabajo.conjuntoTemplateLaboral);
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

//Editar campos de Experiencia
    const editDatosLaborales = document.getElementById('editarExperiencia');
    //const inputsDatosLaborales = document.querySelectorAll('#inputExperienciaLaboral');

    const botonEdicionLaboral = {
        edicionHabilitadaLaboral: false,
        saberSiHayTemplate: false,
        inputsDatosLaborales: [],
        inputsDatosLaboralesFechas: [],
        //seleccionLaboral: [],
        numDeTempsLabs_Iterar: [],
        //nameVarTempLab: [],
        habilitarCamposDatosLaborales: function(){
            this.inputsDatosLaborales = document.querySelectorAll('#inputExperienciaLaboral');
            this.inputsDatosLaboralesFechas = document.querySelectorAll('[name="fechaDesempeño"]');
            this.inputsDatosLaborales.forEach(inputDLaboral=>inputDLaboral.classList.replace('border-dark', 'border-primary'));
            this.inputsDatosLaboralesFechas.forEach(inputDLaboralFecha=>inputDLaboralFecha.disabled = false);
            this.edicionHabilitadaLaboral= true;
            //console.log('Code 1');
            //console.log(this.edicionHabilitadaLaboral);
        },
        actualizarEdicionCampoLaboralSi: function(){
            if(this.edicionHabilitadaLaboral){
                botonEdicionLaboral.habilitarCamposDatosLaborales();
                botonEdicionLaboral.saberSiModificoDatosLaborales();
            }else{
                console.log('hasta que no se habilite la edición...no se podrán modificar los campos');
            }
        },
        saberSiModificoDatosLaborales: function(){
            if(botonEdicionLaboral.edicionHabilitadaLaboral){
                botonEdicionLaboral.inputsDatosLaborales.forEach((nuevoDatoLaboral)=>{
                    nuevoDatoLaboral.addEventListener('click',()=>{
                        //[NO BORRAR]console.log('Code 2');
                        //[NO BORRAR]console.log(botonEdicionLaboral.edicionHabilitadaLaboral);
                        var seleccionLaboral = null;
                        seleccionLaboral = nuevoDatoLaboral.getAttribute('nameb');
                        //[NO BORRAR]console.log(seleccionLaboral);
                        botonEdicionLaboral.inputNuevosDatosLaborales(seleccionLaboral);
                    })
                });
             }else{
                console.log('Se debe habilitar la edición para realizar modificaciones');
             };
        },
        campoLaboralAModificar: function(target_nameBLab){
            document.querySelector(`[nameb="${target_nameBLab}"]`).textContent=prompt('');
        },
        inputNuevosDatosLaborales: function(selecLab){
            //[NO BORRAR]console.log(selecLab);
            if(this.edicionHabilitadaLaboral){
                //console.log('Code 3');
                //console.log(this.edicionHabilitadaLaboral);
                this.numDeTempsLabs_Iterar = templateNuevoTrabajo.conjuntoTemplateLaboral.length;
                var iterante_TemLab = 1;
                for(iterante_TemLab; iterante_TemLab <= this.numDeTempsLabs_Iterar; iterante_TemLab++){
                    templateNuevoTrabajo.conjuntoTemplateLaboral.forEach((nameTempLab)=>{ 
                    //[NO BORRAR]console.log(nameTempLab.getAttribute('name'));
                        switch (nameTempLab.getAttribute('name')){
                            case 'templateLaboral' + iterante_TemLab:
                                switch (selecLab){
                                    case 'empresa' + iterante_TemLab:
                                        botonEdicionLaboral.campoLaboralAModificar(selecLab);
                                    break;    
                                    case 'tarea' + iterante_TemLab:
                                        botonEdicionLaboral.campoLaboralAModificar(selecLab);
                                    break;    
                                    case 'descripcionTrabajo' + iterante_TemLab:
                                        botonEdicionLaboral.campoLaboralAModificar(selecLab);
                                    break;    
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
    //[compruebo error NO BORRAR]console.log(botonEdicionLaboral.saberSiHayTemplate);
editDatosLaborales.addEventListener('click', () =>{
    //[compruebo error NO BORRAR]
    //console.log(botonEdicionLaboral.saberSiHayTemplate);
    botonEdicionLaboral.habilitarCamposDatosLaborales();
    //console.log(botonEdicionLaboral.edicionHabilitadaLaboral);
    botonEdicionLaboral.saberSiModificoDatosLaborales();
 })

