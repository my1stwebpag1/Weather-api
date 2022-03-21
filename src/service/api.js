import axios from 'axios'
const API_KEY='b5e745bbaa397f11ec125e17a9118bf0';
const URL='https://api.openweathermap.org/data/2.5/weather';
//we have to use async and await
//thus we will also make use effect async and await
export const  getData=async(city,country)=>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}