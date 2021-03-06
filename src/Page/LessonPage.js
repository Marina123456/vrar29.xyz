import Lesson from '../Lesson/Lesson';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessonList, fetchSubsectionList, fetchTaskList, fetchAndSelect} from '../store/lesson/actions';
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
    const idSubsection = +props.match.params.idSubsection;
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
          <a href={"/"+idCourse+"/task/"+idLesson}>
          <Button variant="contained" color="secondary">
            Задания
          </Button>
          </a>
          </div>
         
          {  (indexSelectedLesson!=null && indexSelectedLesson!=-1) ? 
             (<Lesson 
              selectedLesson={lessonList[indexSelectedLesson]} 
              idSubsection={idSubsection}/>): (<p></p>)    
             
          }
          
        </Container>
    
    );
}

export default LessonPage;