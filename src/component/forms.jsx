import { Box, Button, makeStyles, TextField} from "@material-ui/core";
import { useState,useEffect } from "react";
import { getData } from "../service/api";
import Information from "./Information";
const useStyles= makeStyles({
    component:{
padding:10,
display:'flex',
background:'#445A6F'
    },
button:{
    background: '#e67e22',
    color: '#fff',
    width: 150,
    height: 40,
    marginTop: 5
},
input:{
    color:'#fff',
    marginRight:15
}
})
const Form=()=>{
    const classes= useStyles();
    const [data, setData]=useState();
    const [city,setCity]= useState("");
    const [country,setCountry]=useState("");
    const [click,handleClick]=useState(false);

                useEffect(()=>{
                   
                    //getweatherdata ethod on caling will return a proise fro which we will fetvh data using .yhen
                   //we cant make useeffect asyc because its a react hook and not a function thus we used another function inside 
                   //useeffect and called it
                    const getWeatherData=async()=>{
               city && await getData(city,country).then(response=>{
                   //using setdata we are giving this data value to data state
                   setData(response.data);
              
                console.log(response.data)
    })}
    getWeatherData();
    handleClick(false);
    //making it again false after calling the api
    

},[click]);//we wanted to call useeffect only when we click button thus passing it in dependency
const handleCityChange=(value)=>{
    setCity(value);
}
const handleCountryChange=(value)=>{
    setCountry(value);
}

    return(
    <>
        <Box className={classes.component}>
        <TextField 
        label="City"
        //inputprops as we have to change internal properties
        InputProps={{className:classes.input}}
        className={classes.input }
        onChange={(e)=>handleCityChange(e.target.value)}>
        
        </TextField>
        <TextField label="Country"
        InputProps={{className:classes.input}}
        className={classes.input }
        onChange={(e)=>handleCountryChange(e.target.value)}>

        </TextField>
        <Button
        variant='contained'
        className={classes.button}
        onClick={()=>handleClick(true)}>Get Weather
        </Button>
        </Box>
        <Information data={data}/>
    </>
    )
}
export default Form;