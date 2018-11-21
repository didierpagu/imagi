import React from 'react';
import {connect} from 'react-redux';
import {  BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
//import Home from '../Home/Home';
import Loginform from './Loginform';
import List from './List';


class SelectInicio extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      login:false
    };
  }
 
  componentWillMount=()=>{
    console.log(" ESTA EN will mount")

  }
  componentDidMount(){
    console.log(" ESTA EN did mount")
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(nextProps.login!==undefined){
      this.setState({login:nextProps.login[nextProps.login.length-1]})
    }
  }
    render() {
    return (     
      <div> 
      <Router>
        <Switch >
        
          {
            this.state.login===true?      
            <Route path="/" component={List} />:
            <Route path="/" component={Loginform}/>
          } 
        </Switch>
        </Router>
      </div> 
      );
    }
}
const mapStateToProps = state => ({ 
  //prueba:state.prueba,
  login:state.login,
  //cerrar_sesion:state.cerrar_sesion 
})
 
const mapDispatchToProps = (dispatch,name) => { 
  return {   
      datos_usuario: (event) => { 
       // dispatch(datos_usuario(event))   
    },
  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(SelectInicio);


