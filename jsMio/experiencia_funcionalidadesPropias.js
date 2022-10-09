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
       console.log(this.i_labE);
       var iterante_labE = 1;
       for(iterante_labE; iterante_labE <= this.i_labE; iterante_labE++){
           switch(e_labE.getAttribute('name')){              
               case 'cBxSegmentoLaboral'+`${iterante_labE}`:
                   e_conjuntoTL.forEach((e_cBxName)=>{if(e_cBxName.getAttribute('cbxname') === e_labE.getAttribute('name')){
                   this.conjuntoTemplateLaboralEliminandose.push(e_cBxName)}});
               break;    
               }}
   });
       console.log(this.conjuntoTemplateLaboralEliminandose);
       this.conjuntoTemplateLaboralEliminandose.forEach(e_definitivoAEliminar=>e_definitivoAEliminar.remove());
       this.cBxSeleccionHabilitada = false;
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
       //console.log(this.cBxSeleccionados);
       
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
       this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('name',`${nuevoNameTempLab}`);
       this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('cbxname',`${nuevocBxNameTempLab}`);
       this.cBxSeleccionTemLab[this.cBxSeleccionTemLab.length - 1].setAttribute('name',`${nuevoName_cBx}`);
       
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

