import { useState } from 'react';
import {prom} from 'shared';
import {useLazyGetDataQuery} from 'store/slices';
import './form-criteria.component.scss';

export const FormCriteria = () => {
  const [getDataQuery] = useLazyGetDataQuery();
  const [apiKey, setApiKey] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [cda, setCda] = useState<string>('');
  const [listCda, setListCda] = useState<string[]>([]);
  const handleAddCda = () => {
    if (cda) {
      setListCda([...listCda, cda]);
      setCda('');
    }
  };

  const handleSearch = () => {
    const body = {
      contents: [
        {
          parts: [{text: `${prom} ${description} ${listCda}`}]
        }
      ]
    }
    getDataQuery({key: apiKey, body})
  }

  const isValidForm = (): boolean => {
    return apiKey !== '' && description !== '' && listCda.length > 0;
  }

  return (
    <div className='form-criteria'>
      <div className='form-criteria__group'>
        <label className='form-criteria__label' htmlFor='api-key'>
          ApiKey
        </label>
        <input
          className='form-criteria__input'
          type='text'
          value={apiKey}
          id='api-key'
          onChange={(e) => setApiKey(e.target.value)}
          required
        />
      </div>

      <div className='form-criteria__group'>
        <label className='form-criteria__label' htmlFor='description'>
          Descripción
        </label>
        <textarea
          name='description'
          className='form-criteria__textarea'
          value={description}
          id='description'
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <div className='form-criteria__group'>
        <label className='form-criteria__label' htmlFor='criteria'>
          Agregar criterio de aceptación
        </label>
        <div className='form-criteria__group__add'>
          <textarea
            name='criteria'
            className='form-criteria__textarea form-criteria__textarea--criteria'
            id='criteria'
            value={cda}
            onChange={(e) => setCda(e.target.value)}
            placeholder='criterio de aceptación'
          ></textarea>
          <button
            className='form-criteria__btn form-criteria__btn--add'
            type='button'
            onClick={handleAddCda}
          >
            +
          </button>
        </div>
      </div>

      <div className='form-criteria__group'>
        <ul className='form-criteria__list'>
          {listCda.map((item, index) => (
            <li key={index} className='form-criteria__list-item'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button 
        type='button' onClick={() => handleSearch()}
        disabled={!isValidForm()}
        className='form-criteria__btn form-criteria__btn--submit'>
        Enviar
      </button>
    </div>
  );
};

export default FormCriteria;
