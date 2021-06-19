import Task from '../Lesson/Task';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAndSelect} from '../store/lesson/actions';
import Container  from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import { useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
    '& > *': {
      margin: theme.spacing(1),
      textDecoration: 'none',
    },
  }
}));

function LessonPage(props) {
    const classes = useStyles();
    const idLesson=+props.match.params.idLesson;
    const idCourse=+props.match.params.idCourse;
    const idTask = +props.match.params.idTask;
    const dispatch = useDispatch();
    const lessonList = useSelector(state=>state.lesson.lessonList);
    const indexSelectedLesson = useSelector(state=>state.lesson.indexSelectedLesson);
    
    useEffect(() => {
        dispatch(fetchAndSelect(idCourse,idLesson));                 
      }, []);
      
    return (    
        
        <Container className={classes.mainContainer}>
         
          <div className={classes.root}>
          <a href={"\\"+idCourse}>
            <Button variant="contained">К оглавлению</Button>
          </a>
          <a href={"/"+idCourse+"/lesson/"+idLesson}>
          <Button variant="contained" color="secondary">
            Теория
          </Button>
          </a>
          </div>
         
          {  (indexSelectedLesson!=null && indexSelectedLesson!=-1) ? 
             (<Task 
              selectedLesson={lessonList[indexSelectedLesson]} 
              idTask={idTask}/>): (<p></p>)    
             
          }
          
        </Container>
    
    );
}

export default LessonPage;