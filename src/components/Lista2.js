import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
   maxWidth: 700,
    //marginTop: theme.spacing.unit * 3,
    justifyContent: 'center',
    marginLeft:theme.spacing.unit * 30,
     flexGrow: 1,
  },
  table: {
    minWidth: 200,
  },
    title: {
    marginLeft: theme.spacing.unit *4,

  },
});


class Lista2 extends React.Component {
   constructor(props){
      super(props)
      this.state = { 
        datos:[]
      };
   }

   componentWillMount=()=>{
     console.log('esta en will')
   }
     componentDidMount=()=>{
  console.log("esta en did")
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }




  render() {   
     const { classes } = this.props;
  return (
   
   
    <Paper className={classes.root} elevation={20}>
         <Typography variant="button" className={classes.title}>
            Items seleccionados
            </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre Item</TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.listar!==undefined?(
            this.props.listar.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>          
               
              </TableRow>
            );
          })
            ):null
          }
        </TableBody>
      </Table>
    </Paper>
  );
 }
}

Lista2.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({ 
   //Login_server_respuesta:state.Login_server_respuesta,
  listar:state.listar
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


//export default withStyles(styles)(Lista2);

export default compose(
  withStyles(styles, {
    name: 'Lista2',
  }),
  //withWidth(),
  connect(mapStateToProps,mapDispatchToProps),
)(Lista2);

