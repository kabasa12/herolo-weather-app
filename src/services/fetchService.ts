import axios from 'axios';
const apiKey = process.env.REACT_APP_WEATHER_APP_KEY;

export const getCityKey = async (city:string) => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
    let resp = await axios.get(url)

    if(resp.data){
        console.log(resp.data)
        return resp.data[0].Key
    } else{
        console.log('No data found')
        return null;
    }
}

export const getWeatherInfo = async(cityKey:number) => {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`;
    let resp = await axios.get(url);
    
    if(resp.data){
        return resp.data;
    } else{
        console.log('No data found')
        return null;
    }
}
