import { useEffect, useState } from 'react'
import { ButtonComp } from '../buttons/ButtonComp'
import { ImageComp } from '../imageComp/ImageComp'
import { InputComp } from '../inputs/InputComp'
import { InputSearchWrap, MainCardFavWrap, MainCardTempWrap, MainCardWeatherDesc, MainCardWrap, WeatherWrapper } from './weatherComp.style'
import { FavoriteIcon } from '../buttons/FavoriteIcon'

export const CurrentWeatherComp = ({ data }: any) => {
    const [temp, setTemp] = useState(0);
    const [favFill, setFavFill] = useState(false)

    useEffect(() => {
        setTemp(Math.round((data.Temperature.Minimum.Value + data.Temperature.Maximum.Value) / 2))
    }, [data]);

    const searchHandle = () => {
        console.log('search clicked')
    }


    return (
        <WeatherWrapper current={true}>
            <InputSearchWrap>
                <InputComp />
                <ButtonComp text={'Search'} onClick={searchHandle} />
            </InputSearchWrap>
            <MainCardWrap className='mainCardWrap'>
                <MainCardTempWrap>
                    <ImageComp alt={data.Day.IconPhrase} icon={data.Day.Icon} large={true} />
                    <div>
                        <p className='cityAndTemp'>
                            Tel Aviv {temp}&deg;
                        </p>
                    </div>
                </MainCardTempWrap>
                <MainCardWeatherDesc>
                    <p>
                        {data.Day.IconPhrase}
                    </p>
                </MainCardWeatherDesc>
                <MainCardFavWrap>
                    <button
                        onClick={() => setFavFill(!favFill)}>
                        <FavoriteIcon filled={favFill} />
                    </button>
                </MainCardFavWrap>
            </MainCardWrap>
        </WeatherWrapper>
    )

}