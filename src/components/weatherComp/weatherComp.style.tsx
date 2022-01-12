import styled from 'styled-components';

export const WeatherWrapper = styled.div`
    overflow: hidden;
    /* padding: 0 0 32px; */
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.3), 0 0px 40px rgba(108, 117, 125, 0.38);
    border-radius: 4px;
    text-align:center;
    background:rgba(0,0,0,0.3);
    color:#fff;
    display:flex;
    /* display:grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    
    & .weather-tmp { 
        grid-area: 1,1,2,1;
    }
    & .minMax-tmp {
    }
    & .weather-day {
    }
    & .weather-desc {
        grid-area: 3,1,3,1;
    }
    & .weather-img {

    } */
`
export const TempDiv = styled.div`
    font-size:25px;
    font-weight:500;
`
export const SmallFontDiv = styled.div`
    font-size:10px;
`
export const MidFontDiv = styled.div`
    font-size:12px;
`