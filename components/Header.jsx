import LogoKasa from '@assets/LOGO.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <Link to='/'><img className='Logo' src={LogoKasa} alt="Logo de Kasa" /></Link>
                <nav>
                    <Link to='/'>Accueil</Link>
                    <Link to='/about'>A propos</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;