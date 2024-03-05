import Card from './Card';
import locationData from 'C:/Users/Utilisateur/projet-kaza/src/location.json'

const CardList = () => {
    return (
      <div className="card_list">
        {locationData.map(item => (
          <Card  cardInfo={item} key={item.id} />     
        ))}
      </div>
    );
  };
  
  export default CardList;