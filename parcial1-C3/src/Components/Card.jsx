import './Card.css'; // Asegúrate de tener un archivo CSS para estilizar tu componente

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} className='card-image' />
      <div className='card-content'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
