import { NavLink } from 'react-router-dom'
import { HeaderNav } from './appHeader.style'
export const AppHeader = () => {
    return (
        <HeaderNav>
            <h1>
                Yaniv Weather App
            </h1>
            <div className='link-container'>
                <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'inactiveLink')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'inactiveLink')} to="/favorite">Favorites</NavLink>
            </div>

        </HeaderNav>
    )
}