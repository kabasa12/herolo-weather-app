import styled from 'styled-components';

interface WeatherProps {
    temp?: string
}

export const WeatherWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.05), 0 0px 40px rgba(108, 117, 125, 0.08);
    border-radius: 10px;
    text-align:center;
    background: ${(props: WeatherProps) => `linear-gradient(
        20deg, #007bff , #6c757d, ${props.temp}
        )`};

    & p {
        padding: 0 5px;
    }
    & div {
        margin: 10px auto 0;
    }
    & div.weather-day {
        font-size:20px;
        font-weight:700;
        padding-bottom:15px;
    }
`

