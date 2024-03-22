import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faStar } from "@fortawesome/free-solid-svg-icons";
import './InfoSection.css'



function InfoSection({ location }) {

    const [infoSections, setInfoSections] = useState([
        { title: "Description", isVisible: false },
        { title: "Équipements", isVisible: false },
    ]);

    const toggleVisibility = (index) => {
        const updatedSections = [...infoSections];
        updatedSections[index].isVisible = !updatedSections[index].isVisible;
        setInfoSections(updatedSections);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    icon={faStar}
                    key={i}
                    className={`star ${i <= rating ? "star-filled" : ""}`}
                />
            );
        }
        return stars;
    };

    return (
        <>
            <section className="slideshowInfo">
                <div className="slideshow_div1">
                    <h1>{location.title}</h1>
                    <p>{location.location}</p>
                    <div className="tags">
                        {location.tags.map((tag, index) => (
                            <p key={`${location.id}-${index}`}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="slideshow_div2">
                    <div className="host">
                        <p>{location.host.name}</p>
                        <img src={location.host.picture} alt={`Photo de ${location.host.name}`} />
                    </div>
                    <div className="rating">
                        {renderStars(parseInt(location.rating))}
                    </div>
                </div>
            </section>
            <div className="info-bar-container">
                <div className="info_bar centered-info-bar">
                    {infoSections.map((section, index) => (
                        <div className="bar" key={index}>
                            <div className="info_location" onClick={() => toggleVisibility(index)}>
                                {section.title}
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                    className={section.isVisible ? "rotate180" : "rotate0"}
                                />
                            </div>
                            <div className={`Info_title_p ${section.isVisible ? "visible" : "hidden"}`}>
                                {section.title === "Description" ? location.description : null}
                                {section.title === "Équipements" ? (
                                    <div className="equipment-column">
                                        {location.equipments.map((equipment, equipmentIndex) => (
                                            <p key={equipmentIndex}>{equipment}</p>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default InfoSection;
