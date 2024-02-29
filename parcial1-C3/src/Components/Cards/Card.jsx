import './Card.css'; // Asegúrate de tener un archivo CSS para estilizar tu componente

const Card = ({ imageUrl, title, description, formData }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} className='card-image' />
      <div className='card-content'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>{description}</p>
        <p>Nombre: {formData.nombre}</p>
        <p>Edad: {formData.edad}</p>
        <p>Cantidad de Personas: {formData.cantidadPersonas}</p>
        <p>Lugar: {formData.lugar}</p>
        <p>Monto Total: {formData.montoTotal}</p>
      </div>
    </div>
  );
};

export default Card;
