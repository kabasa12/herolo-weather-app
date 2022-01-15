import { WeatherComp } from "../../components/weatherComp/WeatherComp"
import { FavoriteCardWrap, FavoriteCity, FavoriteWrapper } from "./favoritePage.style"

const data = [
    {
        "Date": "2022-01-14T07:00:00+02:00",
        "EpochDate": 1642136400,
        "Temperature": {
            "Minimum": {
                "Value": 36,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 38,
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
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "City": "Tel Aviv"
    },
    {
        "Date": "2022-01-14T07:00:00+02:00",
        "EpochDate": 1642136400,
        "Temperature": {
            "Minimum": {
                "Value": 28,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 31,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 2,
            "IconPhrase": "Sunny",
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
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "City": "Haifa"
    },
    {
        "Date": "2022-01-14T07:00:00+02:00",
        "EpochDate": 1642136400,
        "Temperature": {
            "Minimum": {
                "Value": 19,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 21,
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
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "City": "Amsterdam"
    },
    {
        "Date": "2022-01-14T07:00:00+02:00",
        "EpochDate": 1642136400,
        "Temperature": {
            "Minimum": {
                "Value": -2,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 0,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 22,
            "IconPhrase": "Snow",
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
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "City": "Madrid"
    },
    {
        "Date": "2022-01-14T07:00:00+02:00",
        "EpochDate": 1642136400,
        "Temperature": {
            "Minimum": {
                "Value": 2,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 5,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 41,
            "IconPhrase": "Partly Cloudy w/ T-Storms",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 41,
            "IconPhrase": "Partly Cloudy w/ T-Storms",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "City": "Berlin"
    },
    {
        "Date": "2022-01-14T07:00:00+02:00",
        "EpochDate": 1642136400,
        "Temperature": {
            "Minimum": {
                "Value": 6,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 8,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 26,
            "IconPhrase": "Freezing Rain",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 26,
            "IconPhrase": "Freezing Rain",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "City": "Jerusalem"
    },
]
export const FavoritePage = () => {
    return (
        <FavoriteWrapper>
            {data.map((weather, index) => {
                return (
                    <FavoriteCardWrap key={weather.City + index}>
                        <FavoriteCity>
                            {weather.City}
                        </FavoriteCity>
                        <WeatherComp key={weather.Date + index} data={weather} />
                    </FavoriteCardWrap>
                )
            })}
        </FavoriteWrapper>
    )
}