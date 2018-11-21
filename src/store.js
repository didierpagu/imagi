//createstore = nos permite crear un store de redux
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';

  const reducer=(state,action)=>{
  if (action.type === 'undefined') {
    state = 0; // default state
  }

  else if(action.type === "datos"){   
    return{
      ...state,
      lon:state.lon.concat(action.value.lon),
      lat:state.lat.concat(action.value.lat),
    }
  }
   else if(action.type === "datos2"){   
    return{
      ...state,
      lon2:state.lon2.concat(action.value.lon),
      lat2:state.lat2.concat(action.value.lat),
    }
  }
  else if(action.type === "distanciatiempo"){  
    console.log(action.value) 
    return{
      ...state,
      duracion:state.duracion.concat(action.value.duracion),
      distancia:state.distancia.concat(action.value.distancia),
    }
  }
  else if(action.type === "Login"){     
    return{
      ...state,
      login:state.login.concat(action.value),
    }
  }

  else if(action.type === "deletes"){     
    console.log(action.value)
    return{
      ...state,
      listar:state.listar.filter(product=>product.id !== action.value.id)
    }
  }

  else if(action.type === "add"){     
    let repetido='false'
     state.listar.map(lista => {
      parseInt(lista.id,10) === parseInt(action.value.id,10)?repetido='true':null      
     })
      if(repetido==='false'){    
        return{
          ...state,
          listar:state.listar.concat(action.value),
        }
      }
  }
  return state;
};
// middleware nos permite intercepar una accion 
//cada vez que haya un dispatch y poderla ver o hacer algo con ella ..
  const logger = store => next => action => {
  console.log('dispatching', action); //imprimir un dispatching 
  let result = next(action); //llama la accion para que termine llamando al reducer
  console.log('next state', store.getState()); //despues muestra el estado como quedo
  return result;

}
// reducer =recibe una funcion reductora,inicializacion de los objetos                                                  
export default createStore(reducer, {lon:[0],lat:[0],lon2:[0],lat2:[0],duracion:[],distancia:[],login:[false],listar:[]},applyMiddleware(logger,thunk))

   
                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                           