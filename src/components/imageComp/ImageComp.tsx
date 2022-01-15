import { useEffect, useState } from 'react';
import { padNum } from '../utills/utils';
import { ImageWrapperDiv } from './image.style';

export const ImageComp = ({ alt, icon, large }: any) => {
    const [weatherIcon, setWeatherIcon] = useState('')

    useEffect(() => {
        setWeatherIcon(`https://developer.accuweather.com/sites/default/files/${padNum(icon)}-s.png`)
    }, [])

    return (
        <ImageWrapperDiv large={large}>
            <img className='weather-img' src={weatherIcon} alt={alt} />
        </ImageWrapperDiv>
    )
}