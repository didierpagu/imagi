
/********************************************************************************
**************Este componente abre el modal al presionar el boton de enviar operaciones
es */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography'
//import { LinearProgress } from '@material-ui/core/Progress';
import LinearProgress from '@material-ui/core/LinearProgress';
import iconProfile from '../assets/imaginamos.png';


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const styles = theme => ({
  absolute: {
     position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
    background:'#4CAF50',
  },
    progress: {
     color:'#B71C1C',
     padding: '0 60px',
     marginLeft:'40px'

  },
    paper: {
    position: 'absolute',
    width: theme.spacing.unit * 30,
    backgroundColor: 'theme.palette.background.paper',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },

});
/*function getModalStyle() {
  return {
    position: 'absolute',
    //width: 8 * 20,
    top: 350,
    right: 750,
    //border: '#212121',
    backgroundColor: '#BDBDBD',
    //boxShadow: '#212121',
    padding: 8 * 4,
     borderRadius:'15px',
  };
}*/
/*function rand() {
  return Math.round(Math.random() * 20) - 10;
}*/

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    backgroundColor: 'white',
     borderRadius:'15px',
  };
}

class ModalEspera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //  open:false,
    }
  }
  handleClose = () => {
    //this.setState({ open: false });
  };

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  componentDidMount(){
  }
  render() {
  //const {  theme } = this.props;
  const { classes } = this.props;
  return (
  <div>
    <Modal
    open={this.props.open}
    //onClose={this.props.Login_server_respuesta }
    >
      <div style={getModalStyle()}  className={classes.paper}>
        <div style={{marginLeft:'0px',marginTop:'-20px'}}>
          <img  src={iconProfile}  alt="logo mct"  style={{marginTop:'2px',marginLeft:'0px' ,width:'220px' , height:'65px'}} /> 
        </div>      
        <br/> 
        <Typography variant="caption" gutterBottom>      
          {this.props.mensaje}
        </Typography>
        <LinearProgress />
      </div>
    </Modal>
  </div>
  );
  }
}


ModalEspera.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ 

})
 
const mapDispatchToProps = (dispatch) => { 
  return {   

  }
} 
export default compose(
  withStyles(styles, {
    name: 'ModalEspera',
    withTheme: true,
  }),
  //withWidth(),
  connect(mapStateToProps,mapDispatchToProps),
)(ModalEspera);


