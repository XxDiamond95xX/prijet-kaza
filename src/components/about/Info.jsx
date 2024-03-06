import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

function Info() {
    const [isFiabilityVisible, setIsFiabilityVisible] = useState(false);
    const [isRespectVisible, setIsRespectVisible] = useState(false);
    const [isServiceVisible, setIsServiceVisible] = useState(false);
    const [isSecurityVisible, setIsSecurityVisible] = useState(false);

    const toggleFiabilityVisibility = () => {
        setIsFiabilityVisible(!isFiabilityVisible);
    };

    const toggleRespectVisibility = () => {
        setIsRespectVisible(!isRespectVisible);
    };

    const toggleServiceVisibility = () => {
        setIsServiceVisible(!isServiceVisible);
    };

    const toggleSecurityVisibility = () => {
        setIsSecurityVisible(!isSecurityVisible);
    };
    return (
        <>
            <div className="Info">
                <div className="Info_title" onClick={toggleFiabilityVisibility}>
                    Fiabilité
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={isFiabilityVisible ? 'rotate180' : 'rotate0'}
                    />
                </div>
                <div className={`Info_title_p ${isFiabilityVisible ? 'visible' : 'hidden'}`}>
                    Les annonces postées sur kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et<br />
                    toutes les informations sont réguliereement vérifiées par nos équipes.
                </div>
            </div>
            <div className="Info">
                <div className="Info_title" onClick={toggleRespectVisibility}>
                    Respect
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={isRespectVisible ? 'rotate180' : 'rotate0'}
                    />
                </div>
                <div className={`Info_title_p ${isRespectVisible ? 'visible' : 'hidden'}`}>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de<br />
                    perturbation du voisinage entraînera une exclusion de notre plateforme.
                </div>
            </div>
            <div className="Info">
                <div className="Info_title" onClick={toggleServiceVisibility}>
                    Service
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={isServiceVisible ? 'rotate180' : 'rotate0'}
                    />
                </div>
                <div className={`Info_title_p ${isServiceVisible ? 'visible' : 'hidden'}`}>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de<br />
                    perturbation du voisinage entraînera une exclusion de notre plateforme.
                </div>
            </div>
            <div className="Info">
                <div className="Info_title" onClick={toggleSecurityVisibility}>
                    Sécurité
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={isSecurityVisible ? 'rotate180' : 'rotate0'}
                    />
                </div>
                <div className={`Info_title_p ${isSecurityVisible ? 'visible' : 'hidden'}`}>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement<br />
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au<br />
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons<br />
                    également des ateliers sur la sécurité domestique pour nos hôtes.
                </div>
            </div>
        </>
    );
}

export default Info;