import { Link } from 'react-router-dom';
import { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessonList, fetchSubsectionList, fetchTaskList } from '../store/lesson/actions';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 10,
    '&$expanded': {
      minHeight: 10,
    },
  },
  content: {
    margin: '5px 0',
    '&$expanded': {
      margin: '5px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function LessonList(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel, idLesson) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    dispatch(fetchSubsectionList(idLesson));
    dispatch(fetchTaskList(idLesson));  
  };

  
  const dispatch = useDispatch();
  const lessonList = useSelector(state=>state.lesson.lessonList);
      
      useEffect(() => {
         dispatch(fetchLessonList(props.idCourse));   
          
       }, []);

    

  return (
    
    <div>
      {console.log(lessonList)}
       { lessonList.map( (value) => {
            return (
              <Accordion square 
              expanded={expanded === `panel${value.id}`} 
              onChange={handleChange(`panel${value.id}`,value.id)}>
                <AccordionSummary 
                 aria-controls={`panel${value.id}d-content`}
                 id={`panel${value.id}d-header`}>
                  <Typography>
                    <div dangerouslySetInnerHTML={{ __html: value.title.rendered }}/></Typography>
                </AccordionSummary>
                <AccordionDetails>
                 <Typography>
                 <span>Теория</span>
                 <br />
                   {value.subsectionList.map( (valueSub) => {
                     return(
                       <span>
                         <Link  
                            to={`/${props.idCourse}/lesson/${value.id}/${valueSub.id}`} 
                            dangerouslySetInnerHTML={{ __html: valueSub.title.rendered }}
                         />
                        <br />
                       </span>

                       
                     )
                   })}
                   
                   <span>Практика</span>
                   <br />
                  {value.taskList.map( (valueTask) => {
                     return(
                      <span>
                         <Link  
                            to={`/${props.idCourse}/task/${value.id}/${valueTask.id}`} 
                            dangerouslySetInnerHTML={{ __html: valueTask.title.rendered }}
                         />
                        <br />
                      </span>
                     )
                   })}
                  </Typography>
                </AccordionDetails>
              </Accordion>

            )
       })}
        
      
    </div>
  );
}

