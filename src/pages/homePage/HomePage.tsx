import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/loader/Loader';
import { getWeatherImage } from '../../components/utills/utils';
import { CurrentWeatherComp } from '../../components/weatherComp/CurrentWeatherComp';
import { WeatherComp } from '../../components/weatherComp/WeatherComp';
import { getCityKey, getWeatherInfo } from '../../services/fetchService';
import { addWeather } from '../../store/weatherReducer';
import { HeaderWrapper } from './homePage.style';

const data = [
    {
        "Date": "2022-01-14T07:00:00+02:00",
        "EpochDate": 1642136400,
        "Temperature": {
            "Minimum": {
                "Value": 9.9,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 15.5,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Heavy"
        },
        "Night": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    },
    {
        "Date": "2022-01-15T07:00:00+02:00",
        "EpochDate": 1642222800,
        "Temperature": {
            "Minimum": {
                "Value": 11.1,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 14.7,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Night": {
            "Icon": 18,
            "IconPhrase": "Rain",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
    },
    {
        "Date": "2022-01-16T07:00:00+02:00",
        "EpochDate": 1642309200,
        "Temperature": {
            "Minimum": {
                "Value": 3.6,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 14.8,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 13,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
    },
    {
        "Date": "2022-01-17T07:00:00+02:00",
        "EpochDate": 1642395600,
        "Temperature": {
            "Minimum": {
                "Value": 5.5,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 13.6,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
    },
    {
        "Date": "2022-01-18T07:00:00+02:00",
        "EpochDate": 1642482000,
        "Temperature": {
            "Minimum": {
                "Value": 9.4,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 15.5,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
    }
]
export interface WeatherInterface {
    Date: string;
    EpochDate: number;
    Temperature: {
        Minimum: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
        Maximum: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
    };
    Day: {
        Icon: number;
        IconPhrase: string;
        HasPrecipitation: boolean;
        PrecipitationType: string;
        PrecipitationIntensity: string;
    };
    Night: {
        Icon: number;
        IconPhrase: string;
        HasPrecipitation: boolean;
        PrecipitationType: string;
        PrecipitationIntensity: string;
    };
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export const HomePage = () => {
    const [backgroundImg, setBackgroundImg] = useState('');
    const { weatherData, city } = useSelector((state: any) => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
        //if (weatherData.length) {
        //alert('ddddd' + getWeatherImage(weatherData[0]))

        //}

    }, [])

    const getData = async () => {
        let cityKey = await getCityKey(city);
        if (cityKey) {
            let weatherInfo = await getWeatherInfo(cityKey);
            if (weatherInfo) {
                // console.log(weatherInfo.DailyForecasts)
                dispatch(addWeather(weatherInfo.DailyForecasts))
                alert(getWeatherImage(weatherData[0]))
                setBackgroundImg(getWeatherImage(weatherData[0]));
            } else {
                console.log('weather info not found')
            }
        } else {
            console.log('city not found')
        }
    }

    if (!weatherData.length) return <Loader />
    return (
        <HeaderWrapper image={backgroundImg}>
            <CurrentWeatherComp data={weatherData[0]} />
            {weatherData.map((weather: WeatherInterface, index: number) => {
                return (
                    <WeatherComp key={weather.Date + index} data={weather} />
                )
            })}
        </HeaderWrapper>
    )
}