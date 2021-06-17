import { useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Course from './Course';
import Grid from '@material-ui/core/Grid';
import Container  from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseList } from '../store/course/actions';



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
    const course_list = useSelector(state=>state.course.courseList);
    useEffect(() => {
     //   dispatch(fetchCourseList());
   
      }, []);

    return (         
        <Container className={classes.root}>
       
        <Grid container direction="row" justify="center"  spacing={1}>
        { course_list.map( (value) => {
            return ( <Grid item md={3} sm={6} xs={12}  >
               <Course 
                  title={value.title.rendered}
                  description={value.acf.description}
                  img={value.acf.img}
                  id={value.id}
                  />
            </Grid>);
           

        })}
           
        </Grid>
        </Container>
    );
}

export default CourseList;