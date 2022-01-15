import { StyledInput } from './inputComp.style'
import { useSelector, useDispatch } from 'react-redux';
import { updateCity } from '../../store/weatherReducer';

export const InputComp = () => {
    const { city } = useSelector((state: any) => state.weather)
    const dispatch = useDispatch()

    const handleOnChange = (e: any) => {
        dispatch(updateCity(e.target.value))
        console.log(city)
    }

    return (
        <StyledInput value={city} onChange={handleOnChange} colored='rgba(19,13,41)' placeholder='Search... ' />
    )
}