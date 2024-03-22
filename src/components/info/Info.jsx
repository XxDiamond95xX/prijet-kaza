import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './info.css'


function Info() {
    const [infoSections, setInfoSections] = useState([
        {
            title: 'Fiabilité',
            content: 'Les annonces postées sur kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
            isVisible: false,
            toggleVisibility: () => toggleVisibility(0),
        },
        {
            title: 'Respect',
            content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
            isVisible: false,
            toggleVisibility: () => toggleVisibility(1),
        },
        {
            title: 'Service',
            content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
            isVisible: false,
            toggleVisibility: () => toggleVisibility(2),
        },
        {
            title: 'Sécurité',
            content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
            isVisible: false,
            toggleVisibility: () => toggleVisibility(3),
        },
    ]);

    const toggleVisibility = (index) => {
        const updatedSections = [...infoSections];
        updatedSections[index].isVisible = !updatedSections[index].isVisible;
        setInfoSections(updatedSections);
    };

    return (
        <>
            {infoSections.map((section, index) => (
                <div className="Info" key={index}>
                    <div className="Info_title" onClick={section.toggleVisibility}>
                        {section.title}
                        <FontAwesomeIcon
                            icon={faChevronUp}
                            className={section.isVisible ? 'rotate180' : 'rotate0'}
                        />
                    </div>
                    <div className={`Info_title_p ${section.isVisible ? 'visible' : 'hidden'}`}>
                        {section.content}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Info;
