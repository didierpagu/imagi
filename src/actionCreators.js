//import axios from 'axios';
//import client from './lib/apiClient'; //llamado api server principal
import swal from 'sweetalert'; //libreria para alertas

const datos=(valores)=>{
  if(valores.Ciudad==="Origen"){
    return {        
    type:"datos", 
    value:valores,    
    }
  }else{
    return {        
      type:"datos2", 
      value:valores,    
    }
  }
}

const distanciatiempo=(valores)=>{
  console.log(valores)
   return {        
    type:"distanciatiempo", 
    value:valores,    
  };
}

const Login=(valores)=>{
  console.log(valores)
   let value=false
   //let conta=0
   if(valores.usuario==="admin"&& valores.contrasena==="123456"){
    value=true
     swal("Buen Trabajo!",' Datos son Correctos', "success");
   }else{
    swal("Error !",'Contraseña o Usuario Incorrecto', "error");
   }
   
   return {        
    type:"Login", 
    value:value,    
  };
}

const deletes=(producto)=>{
  console.log(producto)
   return {        
    type:"deletes", 
    value:producto,    
  };
}

const add=(producto)=>{
  console.log(producto)
   return {        
    type:"add", 
    value:producto,    
  };
}



//export {acionesGrid,Operaciones_NuevaOperacion,Enviar_crear_operacion,formulario_crear_operacion,select,api_url_select_datafields_dep,api_url_select_datafields,enviar_datos_operaciones_fases_ambientes,tipo,tipo_select_tab_operaciones_ambientes,Api_Tipos_Operaciones_Ambientes,Api_Operaciones_Ambientes,checkbox,Api_Fases,contenido_menu_right,menu,datos_usuario,Open_Close_Cerrar_Sesion,Modificar_datos_estado,Modificar_datos,cerrar_sesion, cambio_contrasena,Respuesta_recuperar_contrasena,Respuesta_server_Login,Admin_menu_2,contenido,Login};
export {datos,distanciatiempo,Login,deletes,add}