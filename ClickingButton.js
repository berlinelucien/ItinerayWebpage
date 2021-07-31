import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, teal } from "@material-ui/core/colors";


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor:teal[700],
    },
  },
}))(Button)

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ClickingButton(props) {
  const classes = useStyles();
  return (
    <div>
      <a href={props.myLink}>
      <ColorButton
        variant="contained"
        color="secondary"
        className={classes.margin}
      >
        {props.myLabel}
      </ColorButton>
      </a>     
    </div>
  );
}
export default ClickingButton;
  

