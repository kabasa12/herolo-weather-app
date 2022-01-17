import LoaderGif from '../../assets/images/loader.gif'
import { StyledLoader } from './loader.style'

export const Loader = () => {
    return (
        <StyledLoader>
            <img src={LoaderGif} alt="LoaderGif" />
        </StyledLoader>
    )
}