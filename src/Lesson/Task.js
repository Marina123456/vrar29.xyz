import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLayoutEffect }from 'react';
import Scroll from 'react-scroll';

const useStyles = makeStyles({
    mainTitle: {
      paddingTop: 50,
    },
    mainContent: {
      paddingTop: 30,
    }
  });
function Task(props) {   
    const classes = useStyles(); 
    let Element  = Scroll.Element;
     
    useLayoutEffect(() => {
      let scroller = Scroll.scroller;
      scroller.scrollTo(`id-${props.idSubsection}`, {
        duration: 1500,
        delay: 100,
        smooth: true,
        //containerId: 'ContainerElementID',
        offset: 50, // Scrolls to element + 50 pixels down the page
      });
      
    }, [props.selectedLesson]);
    return (    
      
        <div>
          
          <Typography className={classes.mainTitle} align="center" component="h2" variant="h4">
             <div dangerouslySetInnerHTML={{__html:props.selectedLesson.title.rendered }}/>
             Практикум
          </Typography>
          
          {console.log(props.selectedLesson.subsectionList)}
          <div className={classes.mainContent}>
          {props.selectedLesson.taskList.map( (valueTask) => {
                     return(
                       <div key={valueTask.id}>
                       <Element name={`id-${valueTask.id}`}>
                       
                     
                        
                        
                      <Typography  component="p" variant="h6">
                      <div  dangerouslySetInnerHTML={{ __html: valueTask.title.rendered }} />
                        
                      </Typography>
                      <Typography  component="p" variant="body1">
                      <div  dangerouslySetInnerHTML={{ __html: valueTask.acf.main_content }} />
                        
                      </Typography>
                      </Element>
                      
                      
                      
                      </div>
                     )
          })}
        </div>
       </div>
    
    );
}

export default Task;