import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

import {deletes} from '../actionCreators';
import {add} from '../actionCreators';
import store from '../store';

import Lista2 from './lista2';
import Paper from '@material-ui/core/Paper';




const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 700,
     justifyContent: 'center',
      marginLeft:theme.spacing.unit * 30,
      margin:theme.spacing.unit * 4,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginLeft:theme.spacing.unit * 4,

  },
});



class InteractiveList extends React.Component {

     constructor() {
    super(); 
      this.state = {
            dense: false,
    secondary: false,
      products: [
        { id: 1, name: "Item 1"},
        { id: 2, name: "Item 2"},
        { id: 3, name: "Item 3"},
      ]
    }
  }

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;
    return (
      <div>
      <Paper className={classes.root} elevation={15}>
          <Grid item xs={12} md={6}>
            <Typography variant="button" className={classes.title}>
             Lista de todos los Items
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>                {  
                this.state.products.map(product =>
                  <ListItem key={product.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={product.name}                
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <DeleteIcon   onClick={() => this.deletes(product)}/>
                      </IconButton>
                      <Button variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
                      <AddIcon  onClick={() => this.add(product)} />
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid> 
          </Paper>      
         <Lista2/>
         </div>
      
    );
  }

  add(product) {
    console.log("agregando producto : " +product.id)
     store.dispatch(add(product))
  }

  deletes(product) {
    console.log("borrando producto :" +product.id)
     store.dispatch(deletes(product))
  }

}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);
