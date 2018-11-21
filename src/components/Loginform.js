//Este componente es llamado por el componente SelectInicio
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Login} from '../actionCreators';
import compose from 'recompose/compose';
import store from '../store';

import ModalEspera from './ModalEspera'

import iconProfile from '../assets/imaginamos.png';
//import { Link } from "react-router-dom";




const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    //marginLeft: -50,
   // marginRight: theme.spacing.unit,
    width: 300,
  },
  menu: {
    //width: 200,
  },
   root: {
    flexGrow: 1,
    marginTop: 100,
    backgroundColor: theme.palette.background.paper,
   // backgroundColor:'#F9FBE7'
   
  },
  paper: {
    marginTop: 35,
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 500,
    width:390,
  },
   textFieldInput: {
    fontSize: 16,
  },
    textFieldFormLabel: {
    fontSize: 16,
  },

  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
   /*button: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, #B71C1C 30%, #212121 90%)',
    background:'#B71C1C',
    borderRadius: 5,
    border: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 255, 135, .30)',
    width:300
  },*/
   button: {
    margin: theme.spacing.unit,
   // background: 'linear-gradient(10deg, #E65100 5%, #212121 90%)',
    background: '#03A9F4',
    borderRadius: 5,
    border: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 255, 135, .30)',
  },

   registrada: {
    color: 'red',
  },
    recuperar_password: {
    cursor:'pointer' , 
    color: '#03A9F4',
  },
    cursor_false: {
    cursor: 'auto',
  },
    cursor_true: {
    cursor: 'wait',
  },
    progress: {
     color:'#B71C1C',
     padding: '0 60px',

  },

});




class Loginform extends React.Component {
   constructor(props){
      super(props)
      this.state = { 
        modalespera:false,
         error_password: false ,
         error_usuario: false ,
         helperText_password:'Ingrese la contraseña',
         helperText_usuario:'Ingrese el Usuario',
         recuperar_contrasena:false,
         usuario:'',
         password:'',
         open:false,
         loginRespuesta:false
      };
   }

   datos_formulario = (event) => { 
       
         if(event.target.name ==="usuario"){
               this.setState({
                 error_usuario: false,
                 helperText_usuario:'Ingrese el usuario',
                 usuario:event.target.value
               });
        }
        if(event.target.name ==="password"){
            this.setState({
              error_password: false,
              helperText_password:'Ingrese la contraseña',
              password:event.target.value
            });

        }
    } 
  enviardatos=(objlogin)=>{   
    store.dispatch(Login(objlogin))
  }

  validacion_inicio_sesion = (event) => {
    //let conta=0
    let usuarios=this.state.usuario.trim()
    let pass=this.state.password.trim()
    if(usuarios.length===0){
      this.setState({
        error_usuario: true,
        helperText_usuario:'error: Este Campo es requerido esta vacio'
      });
    }
    if(pass.length===0){
      this.setState({
        error_password: true,
        helperText_password:'error: Este Campo es requerido esta vacio'
      });
    }
    if(pass!==0 && usuarios.length!==0){
      var objlogin = { "usuario":usuarios,"contrasena":pass}
     // this.props.enviar_datos_inicio_sesion(objlogin)
      // for (let i = 0; i < 10000000; i++) {}
       this.setState({modalespera:true})
      setTimeout(()=>this.enviardatos(objlogin), 4000)
      //
      
      
      
    }
  }
   componentWillMount=()=>{
     //console.log(this.props.Login_server_respuesta)
   }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(nextProps.login!==undefined){
      this.setState({loginRespuesta:nextProps.login[nextProps.login.length-1],modalespera:nextProps.login[nextProps.login.length-1]})
     
    }
  }

  render() {      
  const { classes } = this.props;
  return (           
  <div className={classes.root} >
    <ModalEspera open={this.state.modalespera} mensaje="Cargando Plataforma..."/>     
    <div >
     
        
      <Grid item xs={12}>
        <Grid container  justify="center" >
          <Paper className={classes.paper} elevation={5}>
            <form>
              <div>
                <br/> <br/> 
                <div style={{marginLeft:'0px',marginTop:'0px'}}>
                  <img  src={iconProfile} alt="logo"  style={{marginTop:'2px',marginLeft:'0px',width:'300px' , height:'80px' }} /> 

                </div>
        
       
                <br/>              
                <TextField
                  disabled={this.props.Login_server_respuesta }
                  error={this.state.error_usuario}
                  onChange={this.datos_formulario}
                  helperText={this.state.helperText_usuario}
                  name="usuario"
                  label="usuario"
                  type="text"
                  autoComplete="off" 
                  //value={this.state.usuario}
                  className={classes.textField}
                  InputProps={{
                  classes: {    
                    input: classes.textFieldInput,                                           
                  },
                  }}
                  InputLabelProps={{
                    className: classes.textFieldFormLabel,
                  }}
                /> 
                <br/> <br/> <br/>  
                <TextField
                  disabled={this.props.Login_server_respuesta }
                  error={this.state.error_password}
                  onChange={this.datos_formulario}
                  label='Contraseña'
                  name="password"
                  type="password"
                  autoComplete="off" 
                  //value={this.state.password}
                  className={classes.textField}
                  helperText={this.state.helperText_password}
                  InputProps={{
                    classes: {    
                      input: classes.textFieldInput,
                      },
                  }}                 
                />
                <br/>  <br/> 
              
                <Typography variant="caption" gutterBottom>
                usuario:admin     contraseña:123456
                </Typography>
                  <br/>  
                <Button className={classes.button}    onClick={this.validacion_inicio_sesion} disabled={this.props.Login_server_respuesta }>
                  Iniciar Sesion
                </Button>
             
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>           
    </div>                                   
  </div>
  );
  }
  }

Loginform.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({ 
   //Login_server_respuesta:state.Login_server_respuesta,
   login:state.login
  // resultadooperacion:state.resultadooperacion

})
 
const mapDispatchToProps = (dispatch) => { 
  return {   
    enviar_datos_inicio_sesion: (objlogin) => { 
         //dispatch(Login(objlogin))   //enviar datos del formuario al servidor( se envia al action creator y el realiza la peticion al server)
        // dispatch(Respuesta_server_Login(true)) // cambia el estado de "Login_server_respuesta" a true 
    },
  }
} 

export default compose(
  withStyles(styles, {
    name: 'Loginform ',
  }),
  //withWidth(),
  connect(mapStateToProps,mapDispatchToProps),
)(Loginform );

