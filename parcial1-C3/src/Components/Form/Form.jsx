import { useState } from 'react';
import Card from '../Cards/Card';

import './Form.css';

const Form = () => {
  const caribbeanBeachTitle = 'Playa Paradisíaca en el Caribe';
  const caribbeanBeachDescription =
    'Descubre el paraíso en nuestra playa caribeña, donde las aguas turquesas acarician suavemente la arena blanca. Sumérgete en la belleza natural, relájate bajo el cálido sol tropical y deja que la brisa del mar acaricie tu rostro. Experimenta la serenidad y la maravilla de este rincón celestial.';

  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    cantidadPersonas: '',
    lugar: 'San Andres',
    montoTotal: '',
  });
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.nombre.length < 3 ||
      formData.edad < 0 ||
      isNaN(formData.edad) ||
      formData.edad > 120 ||
      formData.cantidadPersonas <= 0 ||
      !['San Andres', 'Los Roques', 'Margarita', 'Cancun'].includes(
        formData.lugar
      )
    ) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    const dias = 4 * 30;
    const montoTotal = dias * 20 * formData.cantidadPersonas;

    setFormData({
      ...formData,
      montoTotal,
    });

    setIsValid(true);
  };
  const handleClean = () => {
    setFormData({
      nombre: '',
      edad: '',
      cantidadPersonas: '',
      lugar: 'San Andres',
      montoTotal: '',
    });
    setIsValid(false);
  };

  return (
    <div className='form-container'>
      <h1 className='title-form'>Formulario de Reservación de Vacaciones</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='nombre'>Nombre:</label>
          <input
            type='text'
            id='nombre'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
            onBlur={() => setError('')}
          />
        </div>
        <div className='form-field'>
          <label htmlFor='edad'>Edad:</label>
          <input
            type='number'
            id='edad'
            name='edad'
            value={formData.edad}
            onChange={handleChange}
            onBlur={() => setError('')}
          />
        </div>
        <div className='form-field'>
          <label htmlFor='cantidadPersonas'>Cantidad de Personas:</label>
          <input
            type='number'
            id='cantidadPersonas'
            name='cantidadPersonas'
            value={formData.cantidadPersonas}
            onChange={handleChange}
            onBlur={() => setError('')}
          />
        </div>
        <div className='form-field'>
          <label htmlFor='lugar'>Lugar:</label>
          <select
            id='lugar'
            name='lugar'
            value={formData.lugar}
            onChange={handleChange}
          >
            <option value='San Andres'>San Andres</option>
            <option value='Los Roques'>Los Roques</option>
            <option value='Margarita'>Margarita</option>
            <option value='Cancun'>Cancun</option>
          </select>
        </div>
        {error && <p className='error-message'>{error}</p>}
        <br />
        <button type='submit'>Submit</button>
      </form>

      {isValid && (
        <>
          <div className='result'>
            <div className='result-container'>
              <h2>Información correcta:</h2>
              <p>Nombre: {formData.nombre}</p>
              <p>Edad: {formData.edad}</p>
              <p>Cantidad de Personas: {formData.cantidadPersonas}</p>
              <p>Lugar: {formData.lugar}</p>
              <p>Monto Total: {formData.montoTotal}</p>
              <br />
              <button
                type='button'
                onClick={handleClean}
                className='submit-button'
              >
                Limpiar Campos
              </button>
            </div>
            <Card
              imageUrl='data:image/jpeg;base64,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'
              title={caribbeanBeachTitle}
              description={caribbeanBeachDescription}
              formData={formData}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
