import {FC, useState} from 'react';
import {Image, Button} from 'shared/components';
import {IconTest, IconArrowRight, IconArrowDown} from 'shared/assets';
import './resumen.component.scss';

interface IProps {
  resumen: any[]
}

export const Resumen: FC<IProps> = ({resumen}) => { 
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleSummary = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  console.log(resumen);

  return (
    <div className='test-case__body'>
      <h3 className='test-case__title'>Resumen</h3>
      {
        resumen.map((value) => (
          <section className='test-case__item' key={value.id}>
            <Image figureClassName='test-case__figure' className='test-case__img' alt='icon-test' src={IconTest} />
            <div className="test-case__group">
                <h4 className="test-case__group__title" >caso de prueba - {value.id}</h4>
                <p className="test-case__group__name" >{value.name}</p>
                <Image 
                  figureClassName='test-case__group__figure' className='test-case__group__img'
                  alt='icon-arrow-right' 
                  src={expandedId === value.id ? IconArrowDown : IconArrowRight}
                  onClick={() => toggleSummary(value.id)}
                />
                <section className={expandedId === value.id ? 'test-case__summary test-case__summary--show': 'test-case__summary'}>
                    <ul>
                      <li><b>descripción: </b>{value.description}</li>
                      <li><b>prioridad: </b>{value.priority}</li>
                      <li><b>tipo: </b> {value.type}</li>
                      <li>
                        <b>precondiciones:</b>
                        <ul>
                          {
                            value.preconditions.map((precondition:any, i:any) => (
                              <li key={i}>* {precondition}</li>
                            ))
                          }
                        </ul>
                      </li>
                      <li>
                        <b>gherkin:</b>
                        {
                          `
                          Dado que ${value.gherking.given}, 
                          Cuando ${value.gherking.when} 
                          ${value.gherking.and}
                          Entonces ${value.gherking.then}
                          `
                        }
                      </li>
                      <li>
                        <b>resultado esperado: </b>{value.expected_result}
                      </li>
                      <li>
                        <b>recomendaciones: </b>
                        <ul>
                          {
                            value.recomendations.map((recomendations:any, i:any) => (
                              <li key={i}>* {recomendations}</li>
                            ))
                          }
                        </ul>
                      </li>
                    </ul>
                </section>
            </div>
          </section>
        ))
      }
    </div>
  )
}

export default Resumen