import CardList from '../cardList/CardList';
import './Gallery.css'

function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery_container">
                <CardList />
            </div>
        </div>
    );
}

export default Gallery;