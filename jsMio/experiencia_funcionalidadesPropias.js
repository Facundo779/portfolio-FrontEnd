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
    this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('name',`${nuevoNameTempLab}`);
    this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('cbxname',`${nuevocBxNameTempLab}`);
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
        habilitarCamposDatosLaborales: function(){
            this.inputsDatosLaborales = document.querySelectorAll('#inputExperienciaLaboral');
            this.inputsDatosLaboralesFechas = document.querySelectorAll('#fechaDesempeño');
            this.inputsDatosLaborales.forEach(inputDLaboral=>inputDLaboral.classList.replace('border-dark', 'border-primary'));
            this.inputsDatosLaboralesFechas.forEach(inputDLaboralFecha=>inputDLaboralFecha.setAttribute('disabled', false));
            this.edicionHabilitadaLaboral= true;
        },
        campoLaboralAModificar: function(target_nameLab){
            document.querySelector(`[name="${target_nameLab}"]`).textContent=prompt('');
        },
        inputNuevosDatosLaborales: function(){
            if(this.edicionHabilitadaLaboral){
                switch (seleccionLaboral){
                    case "empresa":
                        botonEdicionLaboral.campoLaboralAModificar(seleccionLaboral);
                    break;    
                    case "tarea":
                        botonEdicionLaboral.campoLaboralAModificar(seleccionLaboral);
                    break;    
                    case "descripcionTrabajo":
                        botonEdicionLaboral.campoLaboralAModificar(seleccionLaboral);
                    break;    
                }
            }else{
                alert('Debe hacer click en el botón de editar sección para modificar los campos');
            }
        }  
     }
     
     var seleccionLaboral = null;
        botonEdicionLaboral.inputsDatosLaborales.forEach(nuevoDatoLaboral=>nuevoDatoLaboral.addEventListener("click", () => {
        seleccionLaboral = nuevoDatoLaboral.getAttribute('name');
        botonEdicionLaboral.inputNuevosDatosLaborales();
     
     }))
    //[compruebo error NO BORRAR]console.log(botonEdicionLaboral.saberSiHayTemplate);
editDatosLaborales.addEventListener('click', () =>{
    //[compruebo error NO BORRAR]
    console.log(botonEdicionLaboral.saberSiHayTemplate);
    botonEdicionLaboral.habilitarCamposDatosLaborales();
    console.log(botonEdicionLaboral.edicionHabilitadaLaboral);
    
 })

