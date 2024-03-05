/* eslint-disable react/prop-types */
const Card = ({cardInfo}) => {
    return (        
        <div className="card">
          <img src={cardInfo.cover} alt={cardInfo.title} className="card_list_cover" />
          <h3 className="card_list_cover_title">{cardInfo.title}</h3>
        </div>
    )
  };
  
  export default Card;