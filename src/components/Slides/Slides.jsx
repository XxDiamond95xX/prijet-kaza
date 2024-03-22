// Slides.jsx

const Slides = ({ pictures }) => {
    return (
        <div>
            {pictures.map((image, index) => (
                <img key={index} src={image} alt={`image-${index}`} />
            ))}
        </div>
    );
};

export default Slides;
