import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography  from '@material-ui/core/Typography';

const useStyles = makeStyles({
    mainPhoto: {
      width: '100%',
      height: 650,
      objectFit: 'cover'
    },
    mainTitle: {
      position: 'absolute',
      paddingLeft: '15%',      
      paddingTop: 200
    }
  });
function Header() {
    const classes = useStyles();
    return ( 
      <div>
       <Typography component="h2" variant="h2" className={classes.mainTitle}>База знаний<br/>VR/AR</Typography>
        <img className={classes.mainPhoto} src = "medium-shot-woman-with-vr-glasses.jpg" />
      </div>
   
    );
}

export default Header;