import styled, { css } from 'styled-components';

export const WeatherWrapper = styled.div<any>`
    overflow: hidden;
    box-shadow: ${p => p.current ? 'none' : '0 0 20px rgba(0, 123, 255, 0.3), 0 0px 40px rgba(108, 117, 125, 0.38)'};
    border-radius: 4px;
    text-align:center;
    background:${p => p.current ? 'transparent' : 'rgba(0,0,0,0.3)'};
    color:#fff;
    display:block;
    height:250px;
    gap: 10px;
    width:250px;
`
export const BigDiv = styled.div`
    height:75%;
    width:100%;
    display:flex;
`
export const SmallDiv = styled.div`
    height:25%;
    width:100%;
    display:flex;
`
export const TempWrapperDiv = styled.div<any>`
    max-width:${p => p.city ? '50%' : '40%'};
    width:${p => p.city ? '50%' : '40%'};
    height:100%;
    display:flex;
    align-items:center;
`
export const TempDiv = styled.div<any>`
    display:flex;
    align-items:center;
    justify-content:center;
    max-width:${p => p.city ? '100%' : '60%'};
    width:${p => p.city ? '100%' : '60%'};
    height:100%;
    & .temp{
        font-size:20px;
    }
    & .deg{
        font-size:12px;
        align-items:flex-start;
        display: contents;
    }
`
export const MinMaxWrapperDiv = styled.div<any>`
    max-width:40%;
    height:100%;
    display:${p => p.city ? 'none' : 'flex'};
    align-items:flex-end;
    & .minMax{
        font-size:10px;
    }
`
export const WeatherDescWrapDiv = styled.div<any>`
    max-width:${p => p.city ? '100%' : '70%'};
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center; 
`
export const WeatherDescDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    font-size:12px;
    height:100%;
    padding-inline-start:5px;
    max-width:fit-content;
`
export const CurrentDateDiv = styled.div<any>`
    display:${p => p.city ? 'none' : 'flex'};
    align-items:center;
    justify-content:center;
    font-size:10px;
    font-size:12px;
    height:100%;
    width:50%;
`
export const InputSearchWrap = styled.div`
    display:flex; 
    align-items:center;
    justify-content:center;
`
export const MainCardWrap = styled.div`
    height:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`
export const MainCardTempWrap = styled.div`
    height:100%;
    max-width:30%;
    display:flex;
    flex-direction:column;

    & p{
        font-size:30px;
    }
`
export const MainCardWeatherDesc = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;

    & p{
        font-size:40px;
        padding-inline-start:30px;
    }
`
export const MainCardFavWrap = styled.div`
    width:20%;
    height:100px;
    align-self:flex-start;

    & button{
        background-color:transparent;
        border:none;
        outline:none;
    }
`