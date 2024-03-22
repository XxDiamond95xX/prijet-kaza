import Card from '../card/Card';
import locationData from '../../location.json'
import './CardList.css'

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