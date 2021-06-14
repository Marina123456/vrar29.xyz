import { makeStyles } from '@material-ui/core/styles';
import CardNews from './CardNews';
import Grid from '@material-ui/core/Grid';
import Container  from '@material-ui/core/Container';


const useStyles = makeStyles({
  
    root: {
      paddingTop: 30,
      paddingBottom: 20,
      flexGrow: 1,

    }
  });

function News() {
    const classes = useStyles();
    return (         
        <Container className={classes.root}>
       
        <Grid container direction="row" justify="center"  spacing={1}>
            <Grid item sm={3} xs={12}  >
               <CardNews 
                  title='Курс по VR'
                  description='Особенности работы с очками виртуальной реальности HTC Vive и Oculus Rift.'
                  img="woman-wearing-vr-glasses-with-copy-space.jpg"
                  />
            </Grid>
            <Grid item sm={3}  xs={12}  >
               <CardNews 
                   title='Курс по AR' 
                   description='В курсе описано как создать различные виды дополненной реальности.'
                   img="2ar.jpg"
               />
            </Grid>
            <Grid item sm={3}  xs={12}  >
               <CardNews 
                   title='Съемка панорам'
                   description='Основные особенности съемки сферических панорам, а также сведение их в экскурсию 360.' 
                   img="insta360.jpg"  
                   />
            </Grid>
            <Grid item  sm={3} xs={12}  >
               <CardNews 
                  title='Моделирование'
                  description='Моделлирование в Blender, запечка, текстурирование и оптимизация модели.'     
                  img="3084793.jpg"
                  />
            </Grid>
        </Grid>
        </Container>
    );
}

export default News;