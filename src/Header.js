import { makeStyles, createStyles } from '@material-ui/core/styles';

import Typography  from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => createStyles({
    mainPhoto: {
      width: '100%',
      
    },
    mainTitle: {
      position: 'absolute',
      paddingLeft: '15%',      
      paddingTop: '15%',
      fontSize: '2rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '5rem',
      },
    }
  }));
function Header(props) {
    const classes = useStyles();
    return ( 
      <div>
       <Typography component="h2" variant="h2" className={classes.mainTitle}><div dangerouslySetInnerHTML={{ __html: props.title }}/></Typography>
        <img className={classes.mainPhoto} src = {props.img} />
      </div>
   
    );
}

export default Header;