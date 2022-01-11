import { useEffect, useState } from 'react'
import { InputComp } from '../inputs/InputComp'
import { WeatherWrapper } from './weatherComp.style'
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


export const WeatherComp = ({ data }: any) => {
    const [currentDay, setCurrentDay] = useState('');
    const [temp, setTemp] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState('')

    const padNum = (num: number) => {
        const stringNum = num + '';
        if (stringNum.length === 1) {
            return '0' + stringNum;
        } else {
            return stringNum;
        }
    }

    useEffect(() => {
        let newDate = new Date(data.Date);
        setCurrentDay(days[newDate.getDay()])
        setTemp(Math.round((data.Temperature.Minimum.Value + data.Temperature.Maximum.Value) / 2))
        setWeatherIcon(`https://developer.accuweather.com/sites/default/files/${padNum(data.Day.Icon)}-s.png`)
    }, [data])



    return (
        <WeatherWrapper temp={temp > 15 ? '#fff' : 'brown'}>
            <div className='weather-day'>{currentDay}</div>
            <img src={weatherIcon} alt={data.Day.IconPhrase} />
            <div>{temp} &deg;{data.Temperature.Minimum.Unit}</div>
            <div>{data.Day.IconPhrase}</div>
        </WeatherWrapper>
    )
}