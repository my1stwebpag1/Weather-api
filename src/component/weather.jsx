import { Box, makeStyles} from "@material-ui/core"

import logo from '../images/bg.jpg';
import Form from "./forms";
//usestyle is a function calling akestyles that takes an object as an argument
const useStyles= makeStyles({
    //these are my objects(i.e my classes) taking key value pairs i.e property nae and its value
    component:{
        height:'100vh',
        display:'flex',
        alignItems:'center',
        width:'65%',
        margin:'0 auto'

    },
    leftContainer:{
        width:'27%',
        height:'80%',
        backgroundImage:`url(${logo})`,
        backgroundSize:'cover',
        borderRadius:'20px 0px 0px 20px'
    },
    rightContainer:{
      width:'73%',
      height:'80%',
      background: 'linear-gradient(to right, #e74c3c, #e67e22)'
    }

})

 const Weather= () =>{
     //calling usestyles to use our objects
     const classes=useStyles();
   return(
       
<Box className={classes.component}>
<Box className={classes.leftContainer}></Box>
<Box className={classes.rightContainer}>
    <Form/>
</Box>
</Box>
   ) 

}
export default Weather;