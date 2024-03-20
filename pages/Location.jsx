import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import locationData from "../location.json";
import InfoSection from "../components/locationPage/InfoSection";
import Slideshow from "../components/locationPage/Slideshow";


function Location() {
    const navigate = useNavigate();
    const { id } = useParams();
    const locationFilter = locationData.filter((objet) => objet.id === id);
    const location = locationFilter[0];

    useEffect(() => {
        if (locationFilter.length === 0) {
            navigate('*')
        }
    }, [locationFilter, navigate]);



    return (
        <>
            {location && (
                <>
                    <Slideshow location={location} />
                    <InfoSection location={location} />
                </>
            )}
        </>
    );
}

export default Location;