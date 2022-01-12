import { useEffect, useState } from 'react'
import { InputComp } from '../inputs/InputComp'
import { formatDate } from '../utills/utils'
import { MidFontDiv, SmallFontDiv, TempDiv, WeatherWrapper } from './weatherComp.style'
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


export const WeatherComp = ({ data }: any) => {
    const [currentDay, setCurrentDay] = useState('');
    const [currDate, setCurrDate] = useState('');
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
        setCurrDate(formatDate(newDate))
        setTemp(Math.round((data.Temperature.Minimum.Value + data.Temperature.Maximum.Value) / 2))
        setWeatherIcon(`https://developer.accuweather.com/sites/default/files/${padNum(data.Day.Icon)}-s.png`)
    }, [data])



    return (
        <WeatherWrapper>
            <div style={{
                backgroundColor: 'red',
                width: '30%',
                height: '100%',
                marginInline: '1.5%',
                flexDirection: 'column'
            }}>
                <div style={{
                    height: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'blue',
                    display: 'flex',
                    fontSize: '20px'
                }}>
                    {temp} &deg;
                    <p style={{
                        fontSize: '12px',
                        alignItems: 'flex-end',
                        display: 'contents'
                    }}>
                        {data.Temperature.Minimum.Unit}
                    </p>
                </div>
                <div style={{ height: '50%', justifyContent: 'flex-end', fontSize: '12px' }}>
                    {data.Day.IconPhrase}
                </div>
            </div>
            <div style={{ backgroundColor: 'yellow', width: '30%', height: '100%', marginInline: '1.5%' }}>

            </div>
            <div style={{ backgroundColor: 'green', width: '30%', height: '100%', marginInline: '1.5%' }}>

            </div>


            {/* <TempDiv className='weather-tmp'>
                {temp} &deg;{data.Temperature.Minimum.Unit}
            </TempDiv>
            <SmallFontDiv className='minMax-tmp'>
                {Math.round(data.Temperature.Maximum.Value)}&deg;/{Math.round(data.Temperature.Minimum.Value)}&deg;
            </SmallFontDiv>
            <MidFontDiv className='weather-descyy'>
                {data.Day.IconPhrase}
            </MidFontDiv>
            <MidFontDiv className='weather-day'>
                {currDate} {currentDay}
            </MidFontDiv>
            <img className='weather-img'
                src={weatherIcon}
                alt={data.Day.IconPhrase} /> */}
        </WeatherWrapper>
    )
}