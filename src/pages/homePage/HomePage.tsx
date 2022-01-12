import { randomInt } from "crypto";
import { WeatherComp } from "../../components/weatherComp/WeatherComp"
import { HeaderWrapper } from "./homePage.style";

const data = {
    "Date": "2022-01-09T07:00:00+02:00",
    "EpochDate": 1641704400,
    "Temperature": {
        "Minimum": {
            "Value": 11.5,
            "Unit": "C",
            "UnitType": 17
        },
        "Maximum": {
            "Value": 21.4,
            "Unit": "C",
            "UnitType": 17
        }
    },
    "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
    },
    "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
    },
    "Sources": [
        "AccuWeather"
    ],
    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
}


export const HomePage = () => {
    let weatherBackground = `require('../assets/images/rain.jpg')`;
    console.log(weatherBackground)
    return (
        <HeaderWrapper>
            <WeatherComp data={data} image={weatherBackground} />
            <WeatherComp data={data} image={weatherBackground} />
            <WeatherComp data={data} image={weatherBackground} />
            <WeatherComp data={data} image={weatherBackground} />
            <WeatherComp data={data} image={weatherBackground} />
            <WeatherComp data={data} image={weatherBackground} />
        </HeaderWrapper>
    )
}