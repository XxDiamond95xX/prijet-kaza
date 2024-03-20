import React, { useState, useEffect } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css";

function Slideshow({ location }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showArrows, setShowArrows] = useState(true);
    const [totalSlides, setTotalSlides] = useState(0);

    useEffect(() => {
        if (location && location.pictures) {
            setTotalSlides(location.pictures.length);
            if (location.pictures.length <= 1) {
                setShowArrows(false);
            } else {
                setShowArrows(true);
            }
        }
    }, [location]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
        );
    };

    return (
        <div className="slideshow-container">
            {location && location.pictures && location.pictures.length > 0 && (
                <>
                    {showArrows && (
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="prev"
                            onClick={prevSlide}
                        />
                    )}
                    <div className="slides">
                        <img
                            className="slides_img"
                            src={location.pictures[currentSlide]}
                            alt={`Slide ${currentSlide + 1}`}
                        />
                        <div className="counter">
                            {currentSlide + 1}/{totalSlides}
                        </div>
                    </div>
                    {showArrows && (
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="next"
                            onClick={nextSlide}
                        />
                    )}
                </>
            )}

        </div>
    );
}

export default Slideshow;


