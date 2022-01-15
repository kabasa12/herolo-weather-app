import { useEffect, useState } from 'react'
import { ImageComp } from '../imageComp/ImageComp'
import { formatDate } from '../utills/utils'
import {
    BigDiv, CurrentDateDiv, MinMaxWrapperDiv, SmallDiv,
    TempDiv, TempWrapperDiv, WeatherDescDiv, WeatherDescWrapDiv, WeatherWrapper
} from './weatherComp.style'
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


export const WeatherComp = ({ data }: any) => {
    const [currentDay, setCurrentDay] = useState('');
    const [currDate, setCurrDate] = useState('');
    const [temp, setTemp] = useState(0);

    useEffect(() => {
        let newDate = new Date(data.Date);

        setCurrentDay(days[newDate.getDay()])
        setCurrDate(formatDate(newDate))
        setTemp(Math.round((data.Temperature.Minimum.Value + data.Temperature.Maximum.Value) / 2))
    }, [data])



    return (
        <WeatherWrapper className='weatherWrap'>
            <BigDiv className='bigDiv'>
                <TempWrapperDiv className='tempWrap' city={data.city}>
                    <TempDiv className='temp'>
                        <p className='temp'>
                            {temp}&deg;
                        </p>
                        <p className='deg'>
                            {data.Temperature.Minimum.Unit}
                        </p>
                    </TempDiv>
                    <MinMaxWrapperDiv className='minMaxWrap' city={data.City}>
                        <p className='minMax'>
                            {Math.round(data.Temperature.Maximum.Value)}&deg;/{Math.round(data.Temperature.Minimum.Value)}&deg;
                        </p>
                    </MinMaxWrapperDiv>
                </TempWrapperDiv>
                <ImageComp className='imageWrap' alt={data.Day.IconPhrase} icon={data.Day.Icon} />
                <div style={{ width: '30%', height: '100%', display: data.City ? 'none' : 'flex' }} />
            </BigDiv>
            <SmallDiv className='smallDiv'>
                <WeatherDescWrapDiv className='weatherDescWrap' city={data.City}>
                    <WeatherDescDiv className='weatherDesc'>
                        {data.Day.IconPhrase}
                    </WeatherDescDiv>
                </WeatherDescWrapDiv>
                <CurrentDateDiv className='currentDate' city={data.City}>
                    {currDate} {currentDay}
                </CurrentDateDiv>

            </SmallDiv>
        </WeatherWrapper>
    )
}