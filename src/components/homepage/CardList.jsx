import Card from './Card';
import locationData from '../../location.json'

const CardList = () => {
  return (
    <div className="card_list">
      {locationData.map(item => (
        <Card cardInfo={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardList;