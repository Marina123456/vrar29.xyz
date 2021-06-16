import { useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container  from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessonList } from '../store/lesson/actions';



const useStyles = makeStyles({
  
    root: {
      paddingTop: 30,
      paddingBottom: 20,
      flexGrow: 1,

    }
  });

function CourseList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
       
   
      }, []);

    return (         
        <Container className={classes.root}>
        
        </Container>
    );
}

export default CourseList;