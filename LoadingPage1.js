import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header';

import LoadingPage1 from '../images/LoadingPage1.png';
import Profile from '../components/Profile';
import LoadingFlame from '../animations/LoadingFlame';





const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '45vh',
    minWidth: '45vh',
    backgroundImage: `url(${LoadingPage1})`,
    backgroundColor: '#000000',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width:'60%',
    margin: '0 auto',
   
    
  
    
   
   

  },

}));
export default function HomePage() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline/>
    <Header />
    <LoadingFlame />
    

  
    
    
    
  
    

  </div>;
  
}
