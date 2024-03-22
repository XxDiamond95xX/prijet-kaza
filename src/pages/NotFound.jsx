import { Link } from 'react-router-dom';
import '../components/error/error.css'

const NotFound = () => {
    return (
        <div className='error'>
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <Link to='/' className='error_Link'>Retournez sur la page d'accueil</Link>
        </div>
    );
};

export default NotFound;
