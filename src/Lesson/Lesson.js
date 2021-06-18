import Typography  from '@material-ui/core/Typography';
import Container  from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableAnchor from 'react-scrollable-anchor';
const useStyles = makeStyles({
  
    mainContent: {
      paddingTop: 80,
      

    }
  });
function Lesson(props) {   
    const classes = useStyles(); 
    return (    
      
        <Container maxWidth="lg">
          <Typography align="center" component="h2" variant="h3">
             <div dangerouslySetInnerHTML={{__html:props.selectedLesson.title.rendered }}/>
          </Typography>
          {console.log(props.selectedLesson.subsectionList)}
          <div className={classes.mainContent}>
          {props.selectedLesson.subsectionList.map( (valueSub) => {
                     return(
                        <div>
                     
                        
                        
                      <Typography  component="h2" variant="h7">
                      <div  dangerouslySetInnerHTML={{ __html: valueSub.title.rendered }} />
                        
                      </Typography>
                      <Typography  component="p" variant="h5">
                      <div  dangerouslySetInnerHTML={{ __html: valueSub.acf.main_content }} />
                        
                      </Typography>
                      
                      </div>
                     )
          })}
        </div>
       </Container>
    
    );
}

export default Lesson;