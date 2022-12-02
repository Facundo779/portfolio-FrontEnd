//Acciones en fotos de proyecto
/*
const agregarFotoProyecto = document.querySelector('#botonsaberSiAgregoFotoProyecto');
const ocultarFotoProyecto = document.querySelector('#botonsaberSiOcultoFotoProyecto');

const habilitarCargarProyecto = {
    habilitandoCargaFoto : function(){
        document.querySelector('#filaModalProyectoAdjFoto').classList.replace('agregarFotoProyectoOculto','agregarFotoProyectoActivo');
    },
    ocultarCargaFoto : function() {
        document.querySelector('#filaModalProyectoAdjFoto').classList.replace('agregarFotoProyectoActivo','agregarFotoProyectoOculto');
    },
}

agregarFotoProyecto.addEventListener('click', ()=>{
    habilitarCargarProyecto.habilitandoCargaFoto();
})
ocultarFotoProyecto.addEventListener('click', ()=>{
    habilitarCargarProyecto.ocultarCargaFoto();
})
*/
//Template Laboral
const btnNuevoProyecto = document.getElementById('btnAgregarProyecto');
const botonEliminarTemplateProyecto = document.getElementById('botonSaberSiEliminoSegmentoProyecto');

const templateNuevoProyecto = {
   iterante : 0,
   cBxSeleccionHabilitada : false,
   cargarFoto: false,
   conjuntoTemplateProyecto:[],
   cBxSeleccionTemPro:[], 
   cBxSeleccionados:[],
   e_proyectoNoSeleccionados:[],
   conjuntoTemplateProyectoEliminandose:[],
   i_labP:[],
   i_resetPro:[],
   linkCambiar_url_Proyecto: [],
   link_url_nameb_proyecto: [],
   conjuntoNombreProyectoTempPro: [],
   conjuntoDescripProyectoTempPro: [],
   filaModal_Proyecto_AdjFoto: [],
   btn_agregarFotoProyecto: [],
   btn_ocultarFotoProyecto: [],

   eliminandoTemplateProyecto : function(e_proyectoAEliminar, e_conjuntoTP){
       /*
       [NO BORRAR PORQUE PERMITE SABER QUE HACE EL CÓDIGO]
       console.log('esto es lo que guardan las variables');
       e_conjuntoTL.forEach(e_cBxName=>console.log(e_cBxName.getAttribute('name')));
       e_conjuntoTL.forEach(e_cBxName=>console.log(e_cBxName.getAttribute('cbxname')));
       e_laboralAEliminar.forEach(e_labPorEliminar=>console.log(e_labPorEliminar.getAttribute('name')));
       console.log('Borrará:'); 
       */
   e_proyectoAEliminar.forEach((e_ProE)=>{
       this.i_labP = this.conjuntoTemplateProyecto.length;
       //console.log(this.i_labP);
       var iterante_ProE = 1;
       for(iterante_ProE; iterante_ProE <= this.i_labP; iterante_ProE++){
           switch(e_ProE.getAttribute('name')){              
               case 'cBxSegmentoProyecto'+`${iterante_ProE}`:
                   e_conjuntoTP.forEach((e_cBxName)=>{if(e_cBxName.getAttribute('cbxname') === e_ProE.getAttribute('name')){
                   this.conjuntoTemplateProyectoEliminandose.push(e_cBxName)}});
               break;    
               }}
   });
       //console.log(this.conjuntoTemplateProyectoEliminandose);
       this.conjuntoTemplateProyectoEliminandose.forEach(e_definitivoAEliminar=>e_definitivoAEliminar.remove());
       this.cBxSeleccionHabilitada = false;
       templateNuevoProyecto.resetearAtributosDeTempPro();
       
   },
   
   seleccionCBxPro : function(){
       this.cBxSeleccionTemPro = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoProyecto');
       console.log(this.cBxSeleccionTemPro);
      //(NO ELIMINAR ESTA LINEA)this.cBxSeleccionTemLab.forEach(cBxLab=>this.cBxSeleccionados.push(cBxLab.checked));
       this.cBxSeleccionTemPro.forEach((cBxPro)=>{if(cBxPro.checked===true){
           this.cBxSeleccionados.push(cBxPro)
       }else{
           this.e_proyectoNoSeleccionados.push(cBxPro);
           //console.log(e_laboralNoSeleccionados);
           console.log('CÓDIGO Nº 1: Estos elementos no han sido seleccionados...');
           console.log(this.e_proyectoNoSeleccionados);
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
   resetearAtributosDeTempPro : function(){ 
    this.conjuntoTemplateProyecto = document.querySelectorAll('#templateProyectos');
    this.cBxSeleccionTemPro = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoProyecto');
    //this.conjuntoEmpresasTempPro = document.querySelectorAll('[name="empresa"]');
    this.conjuntoNombreProyectoTempPro = document.querySelectorAll('[name="nombreProyecto"]');
    this.conjuntoDescripProyectoTempPro = document.querySelectorAll('[name="descripcionProyecto"]');
    this.linkCambiar_url_Proyecto = document.querySelectorAll('[name="enlaceAProyecto"]');
    this.link_url_nameb_proyecto = document.querySelectorAll('[name="link_url_proyecto"]');
    //console.log('templates proyectos que no se eliminan:');
    //console.log(this.conjuntoTemplateProyecto);
    //this.i_resetPro = this.conjuntoTemplateProyecto.length;
    //var iterante_resetLab = 1;
    this.iterante = 1;
    this.conjuntoTemplateProyecto.forEach((e_proResetAttrib)=>{
        const resetNuevoNameTempPro = 'templateProyecto' + this.iterante;
        const resetNuevocBxNameTempPro = 'cBxSegmentoProyecto' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_proResetAttrib.setAttribute('name',`${resetNuevoNameTempPro}`); 
        e_proResetAttrib.setAttribute('cbxname',`${resetNuevocBxNameTempPro}`);
    });
    this.iterante = 1;
    this.conjuntoNombreProyectoTempPro.forEach((e_nombreProyectoTempProResetAttrib)=>{
        const resetNuevoNameBnombProTempLab = 'nombreProyecto' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_nombreProyectoTempProResetAttrib.setAttribute('nameb',`${resetNuevoNameBnombProTempLab}`);
    });
    this.iterante = 1;
    this.conjuntoDescripProyectoTempPro.forEach((e_descripcionProyectoTempProResetAttrib)=>{
        const resetNuevoNameBdescripProTempLab = 'descripcionProyecto' + this.iterante;
        this.iterante = this.iterante += 1; 
        e_descripcionProyectoTempProResetAttrib.setAttribute('nameb',`${resetNuevoNameBdescripProTempLab}`);
    });
    this.iterante = 1;
    this.cBxSeleccionTemPro.forEach((e_proResetAttribCbxSelect)=>{
        const resetNuevoName_cBx = 'cBxSegmentoProyecto' + this.iterante;
        e_proResetAttribCbxSelect.setAttribute('name',`${resetNuevoName_cBx}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.linkCambiar_url_Proyecto.forEach((e_proCambiarLinkUrl)=>{
        const resetNuevoNameB_linkUrl = 'enlaceAProyecto' + this.iterante;
        e_proCambiarLinkUrl.setAttribute('nameb',`${resetNuevoNameB_linkUrl}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.link_url_nameb_proyecto.forEach((e_proCambiarNameBLinkUrl)=>{
        const resetNuevoNameB_linkUrl = 'link_url_proyecto' + this.iterante;
        e_proCambiarNameBLinkUrl.setAttribute('nameb',`${resetNuevoNameB_linkUrl}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.btn_agregarFotoProyecto.forEach((e_proCambiarNameBbtn_agregFoto)=>{
        const resetNuevoNameBbtn_agregFoto = 'filaModalProyectoAdjFoto' + this.iterante;
        e_proCambiarNameBbtn_agregFoto.setAttribute('nameb',`${resetNuevoNameBbtn_agregFoto}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.btn_ocultarFotoProyecto.forEach((e_proCambiarNameBbtn_ocultFoto)=>{
        const resetNuevoNameBbtn_ocultFoto = 'filaModalProyectoAdjFoto' + this.iterante;
        e_proCambiarNameBbtn_ocultFoto.setAttribute('nameb',`${resetNuevoNameBbtn_ocultFoto}`);
        this.iterante = this.iterante += 1;
    });
    this.iterante = 1;
    this.filaModal_Proyecto_AdjFoto.forEach((e_proCambiarNameBfilaModProAdjFoto)=>{
        const resetNuevoNameBfilaModProAdjFoto = 'filaModalProyectoAdjFoto' + this.iterante;
        e_proCambiarNameBfilaModProAdjFoto.setAttribute('nameb',`${resetNuevoNameBfilaModProAdjFoto}`);
        this.iterante = this.iterante += 1;
    });
    },
   setearAtributosDeTempPro : function(){ 
    this.iterante = this.iterante += 1;
    const nuevoNameTempPro = 'templateProyecto' + this.iterante;
    const nuevocBxNameTempPro = 'cBxSegmentoProyecto' + this.iterante;
    const nuevoName_cBx = 'cBxSegmentoProyecto' + this.iterante;
    const nuevoNameB_nombreProyecto = 'nombreProyecto' + this.iterante;
    const nuevoNameB_descripProyecto = 'descripcionProyecto' + this.iterante;
    const nuevoNameB_enlaceAProyecto = 'enlaceAProyecto' + this.iterante;
    const nuevoNameB_hrefProyecto = 'link_url_proyecto' + this.iterante;
    const nuevoNameB_btnAgregarFotoProyecto = 'filaModalProyectoAdjFoto' + this.iterante;
    const nuevoNameB_btnOcultarFotoProyecto = 'filaModalProyectoAdjFoto' + this.iterante;
    const nuevoNameB_filaMod_proyectoAdjFoto = 'filaModalProyectoAdjFoto' + this.iterante;
    this.conjuntoTemplateProyecto[this.conjuntoTemplateProyecto.length - 1].setAttribute('name',`${nuevoNameTempPro}`);
    this.conjuntoTemplateProyecto[this.conjuntoTemplateProyecto.length - 1].setAttribute('cbxname',`${nuevocBxNameTempPro}`);
    this.conjuntoNombreProyectoTempPro[this.conjuntoNombreProyectoTempPro.length - 1].setAttribute('nameb',`${nuevoNameB_nombreProyecto}`);
    this.conjuntoDescripProyectoTempPro[this.conjuntoDescripProyectoTempPro.length - 1].setAttribute('nameb',`${nuevoNameB_descripProyecto}`);
    this.linkCambiar_url_Proyecto[this.linkCambiar_url_Proyecto.length - 1].setAttribute('nameb',`${nuevoNameB_enlaceAProyecto}`);
    this.link_url_nameb_proyecto[this.link_url_nameb_proyecto.length - 1].setAttribute('nameb',`${nuevoNameB_hrefProyecto}`);
    this.btn_agregarFotoProyecto[this.btn_agregarFotoProyecto.length - 1].setAttribute('nameb',`${nuevoNameB_btnAgregarFotoProyecto}`);
    this.btn_ocultarFotoProyecto[this.btn_ocultarFotoProyecto.length - 1].setAttribute('nameb',`${nuevoNameB_btnOcultarFotoProyecto}`);
    this.filaModal_Proyecto_AdjFoto[this.filaModal_Proyecto_AdjFoto.length - 1].setAttribute('nameb',`${nuevoNameB_filaMod_proyectoAdjFoto}`);
    this.cBxSeleccionTemPro[this.cBxSeleccionTemPro.length - 1].setAttribute('name',`${nuevoName_cBx}`);
   },
   insertarNuevoProyecto : function(){
       
       const modalBdyProyecto = document.getElementById('modalBodyProyecto');
       const templateDeProyecto = document.getElementById('templateProyecto').content;
       const nuevoTemplateProyecto = document.createDocumentFragment();
       const clonarTemplateProyecto = templateDeProyecto.cloneNode(true);
       nuevoTemplateProyecto.appendChild(clonarTemplateProyecto);
       modalBdyProyecto.appendChild(nuevoTemplateProyecto);
       this.conjuntoTemplateProyecto = document.querySelectorAll('#templateProyectos');
       //this.conjuntoEmpresasTempPro = document.querySelectorAll('[name="empresa"]');
       this.conjuntoNombreProyectoTempPro = document.querySelectorAll('[name="nombreProyecto"]');
       this.conjuntoDescripProyectoTempPro = document.querySelectorAll('[name="descripcionProyecto"]');
       this.cBxSeleccionTemPro = document.querySelectorAll('#checkBoxSaberSiEliminoSegmentoProyecto');
       this.linkCambiar_url_Proyecto = document.querySelectorAll('[name="enlaceAProyecto"]');
       this.link_url_nameb_proyecto = document.querySelectorAll('[name="link_url_proyecto"]');
       this.btn_agregarFotoProyecto = document.querySelectorAll('#botonsaberSiAgregoFotoProyecto');
       this.btn_ocultarFotoProyecto = document.querySelectorAll('#botonsaberSiOcultoFotoProyecto');
       this.filaModal_Proyecto_AdjFoto = document.querySelectorAll('#filaModalProyectoAdjFoto');
       templateNuevoProyecto.setearAtributosDeTempPro();
       /*this.iterante = this.iterante += 1; 
       const nuevoNameTempLab = 'templateLaboral' + this.iterante;
       const nuevocBxNameTempLab = 'cBxSegmentoLaboral' + this.iterante;
       const nuevoName_cBx = 'cBxSegmentoLaboral' + this.iterante;
       this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('name',`${nuevoNameTempLab}`);
       this.conjuntoTemplateLaboral[this.conjuntoTemplateLaboral.length - 1].setAttribute('cbxname',`${nuevocBxNameTempLab}`);
       this.cBxSeleccionTemLab[this.cBxSeleccionTemLab.length - 1].setAttribute('name',`${nuevoName_cBx}`);*/
       botonEdicionProyecto.saberSiHayTemplate = true;
       botonEdicionProyecto.actualizarEdicionCampoProyectoSi();
   }
}

botonEliminarTemplateProyecto.addEventListener('click', ()=>{
   templateNuevoProyecto.seleccionCBxPro(); 
   if(templateNuevoProyecto.cBxSeleccionHabilitada){
       var seBorraTempPro = prompt('Se van a eliminar los proyectos seleccionados, si está de acuerdo: presione (s) sino (n)');
       switch(seBorraTempPro){
           case "s":
           templateNuevoProyecto.eliminandoTemplateProyecto(templateNuevoProyecto.cBxSeleccionados, templateNuevoProyecto.conjuntoTemplateProyecto);
           break;
           case "n":
           alert('CÓDIGO Nº 3:No se borrará nada. Puede seleccionar nuevamente si lo desea')
       }
   }else{
       alert('CÓDIGO Nº 4:Ha presionado una tecla que no se encuentra habilitada');
   }
   
})

btnNuevoProyecto.addEventListener('click', ()=>{
   templateNuevoProyecto.insertarNuevoProyecto();
})

//Editar campos de Experiencia
    const editDatosProyectos = document.getElementById('editarProyectos');
    //const inputsDatosProyectos = document.querySelectorAll('#inputExperienciaLaboral');

    const botonEdicionProyecto = {
        edicionHabilitadaProyectos: false,
        saberSiHayTemplate: false,
        inputsDatosProyectos: [],
        inputsDatosProyectosFechas: [],
        //seleccionLaboral: [],
        numDeTempsPros_Iterar: [],
        //nameVarTempLab: [],
        habilitarCamposDatosProyectos: function(){
            this.inputsDatosProyectos = document.querySelectorAll('#inputProyectos');
            this.inputsDatosProyectosFechas = document.querySelectorAll('[name="fechaRealizacionProyecto"]');
            //this.linkCambiar_url_Proyecto = document.querySelectorAll('');
            this.inputsDatosProyectos.forEach((inputDProyecto)=>{
            inputDProyecto.classList.replace('border-dark', 'border-primary');
            });
            this.inputsDatosProyectosFechas.forEach(inputDProyectoFecha=>inputDProyectoFecha.disabled = false);
            this.edicionHabilitadaProyectos= true;
            //console.log('Code 1');
            //console.log(this.edicionHabilitadaProyectos);
            this.cargarFoto = true;
        },
        saberSihabilitarCargaFoto: function(){
            //console.log(templateNuevoProyecto.btn_agregarFotoProyecto);
            templateNuevoProyecto.btn_agregarFotoProyecto.forEach((e_agregfotoProyecto) => {
                    e_agregfotoProyecto.addEventListener('click', ()=>{
                        console.log('click');
                        this.cargarFoto = true;
                        var nameB_agregFoto = e_agregfotoProyecto.getAttribute('nameb');
                        botonEdicionProyecto.habilitandoCargaFoto(nameB_agregFoto);
                        if(this.cargarFoto){
                            templateNuevoProyecto.btn_ocultarFotoProyecto.forEach((e_ocultfotoProyecto) => {
                                e_ocultfotoProyecto.addEventListener('click', ()=>{
                                    console.log('click');
                                    var nameB_ocultFoto = e_ocultfotoProyecto.getAttribute('nameb');
                                    botonEdicionProyecto.ocultarCargaFoto(nameB_ocultFoto);
                                    this.cargarFoto = false;
                                });
                            });
                        }else{
                            console.log('El botón ocultar foto aún no está habilitado');
                            }
                        });
                    });
        }, 
        habilitandoCargaFoto : function(target_agregfotoProyecto){
            console.log(target_agregfotoProyecto);
            document.querySelector('#filaModalProyectoAdjFoto' + `[nameb=${target_agregfotoProyecto}]`).classList.replace('agregarFotoProyectoOculto','agregarFotoProyectoActivo');
        },
        ocultarCargaFoto : function(target_ocultfotoProyecto) {
            document.querySelector('#filaModalProyectoAdjFoto' + `[nameb="${target_ocultfotoProyecto}"]`).classList.replace('agregarFotoProyectoActivo','agregarFotoProyectoOculto');
        },
        actualizarEdicionCampoProyectoSi: function(){
            if(this.edicionHabilitadaProyectos){
                botonEdicionProyecto.habilitarCamposDatosProyectos();
                botonEdicionProyecto.saberSiModificoDatosProyectos();
                botonEdicionProyecto.saberSihabilitarCargaFoto();
            }else{
                console.log('hasta que no se habilite la edición...no se podrán modificar los campos');
            }
        },
        saberSiModificoDatosProyectos: function(){
            if(botonEdicionProyecto.edicionHabilitadaProyectos){
                botonEdicionProyecto.inputsDatosProyectos.forEach((nuevoDatoProyecto)=>{
                    nuevoDatoProyecto.addEventListener('click',()=>{
                        //[NO BORRAR]console.log('Code 2');
                        //[NO BORRAR]console.log(botonEdicionProyecto.edicionHabilitadaProyectos);
                        var seleccionProyecto = null;
                        seleccionProyecto = nuevoDatoProyecto.getAttribute('nameb');
                        //[NO BORRAR]console.log(seleccionLaboral);
                        botonEdicionProyecto.inputNuevosDatosProyectos(seleccionProyecto);
                    })
                });
             }else{
                console.log('Se debe habilitar la edición para realizar modificaciones');
             };
        },
        campoProyectoAModificar: function(target_nameBPro){
            document.querySelector(`[nameb="${target_nameBPro}"]`).textContent=prompt('');
        },
        inputNuevosDatosProyectos: function(selecPro){
            //[NO BORRAR]console.log(selecPro);
            if(this.edicionHabilitadaProyectos){
                //console.log('Code 3');
                //console.log(this.edicionHabilitadaProyectos);
                this.numDeTempsPros_Iterar = templateNuevoProyecto.conjuntoTemplateProyecto.length;
                var iterante_TemPro = 1;
                for(iterante_TemPro; iterante_TemPro <= this.numDeTempsPros_Iterar; iterante_TemPro++){
                    templateNuevoProyecto.conjuntoTemplateProyecto.forEach((nameTempPro)=>{ 
                    //[NO BORRAR]console.log(nameTempLab.getAttribute('name'));
                        switch (nameTempPro.getAttribute('name')){
                            case 'templateProyecto' + iterante_TemPro:
                                switch (selecPro){    
                                    case 'nombreProyecto' + iterante_TemPro:
                                        botonEdicionProyecto.campoProyectoAModificar(selecPro);
                                    break;    
                                    case 'descripcionProyecto' + iterante_TemPro:
                                        botonEdicionProyecto.campoProyectoAModificar(selecPro);
                                    break;    
                                    case 'enlaceAProyecto' + iterante_TemPro:
                                        var almacenado = 'link_url_proyecto' + iterante_TemPro;
                                        document.querySelector(`[nameb="${almacenado}"]`).setAttribute('href', prompt('') );
                                        //botonEdicionProyecto.campoProyectoAModificar(selecPro);
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
    //[compruebo error NO BORRAR]console.log(botonEdicionProyecto.saberSiHayTemplate);
editDatosProyectos.addEventListener('click', () =>{
    //[compruebo error NO BORRAR]
    //console.log(botonEdicionProyecto.saberSiHayTemplate);
    botonEdicionProyecto.habilitarCamposDatosProyectos();
    //console.log(botonEdicionProyecto.edicionHabilitadaProyectos);
    botonEdicionProyecto.saberSiModificoDatosProyectos();
    if(botonEdicionProyecto.edicionHabilitadaProyectos){
    botonEdicionProyecto.saberSihabilitarCargaFoto();
    }else{
        console.log('Se debe habilitar la edición para realizar modificaciones a las fotos');
    }
 })


