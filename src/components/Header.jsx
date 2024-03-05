import LogoKasa from '@assets/LOGO.svg'
import { Link } from 'react-router-dom';

function Header() {
    return(
        <>
            <header>
                <img  src={LogoKasa} alt="Logo de Kasa" />
                <nav>
                    <Link to='/'>Accueil</Link>
                    <Link to='/about'>A propos</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;