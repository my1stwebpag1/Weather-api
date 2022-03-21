import {Box,Typography ,makeStyles} from  "@material-ui/core";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExposureIcon from '@mui/icons-material/Exposure';
import OpacityIcon from '@mui/icons-material/Opacity';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloudIcon from '@mui/icons-material/Cloud';
const useStyles=makeStyles({
    component:{
        margin:'30x 60px'
    },
    value:{
        color:'#fff'
    },
    row:{
        padding:10,
        letterSpacing:2,
        fontSize:20
    },
    icon:{
        marginRight:20,
        color:'darkred'
    }
  })
  //api ka sara data is data k andr hai i.e passed a prop by fors.jsx
const Information=({data})=>{
    const classes=useStyles();
    return (

data ? <Box className={classes.component}>
    <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>Location<Box className={classes.value} component="span"> {data.name},{data.sys.country}</Box></Typography>
    <Typography className={classes.row}><ExposureIcon className={classes.icon}/>Temperature<Box className={classes.value} component="span"> {data.main.temp} °C</Box></Typography>
    <Typography className={classes.row}><OpacityIcon className={classes.icon}/>Humidity <Box className={classes.value} component="span">{data.main.humidity} %</Box></Typography>
    <Typography className={classes.row}><LightModeIcon className={classes.icon}/>Sun Rise <Box className={classes.value} component="span">{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</Box></Typography>
    <Typography className={classes.row}><Brightness6Icon className={classes.icon}/>Sun Set<Box className={classes.value} component="span"> {new Date(data.sys.sunset*1000).toLocaleTimeString()}</Box></Typography>
    <Typography className={classes.row}><ReorderIcon className={classes.icon}/>Condition <Box className={classes.value} component="span">{data.weather[0].main}</Box></Typography>
    <Typography className={classes.row}><CloudIcon className={classes.icon}/>Clouds <Box className={classes.value} component="span">{data.clouds.all}</Box></Typography>
</Box>: ""

    )
}
export default Information;