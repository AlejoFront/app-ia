import { FC } from 'react';
import './list-criteria.component.scss';

interface Iprops {
    data: any[]
}

export const ListCriteria: FC<Iprops> = ({data}) => {
    const cards = [1, 2, 3, 4, 5];
    return (
        <section className='criteria-container'>
            {data.map(({name,expected_result}, index) => (
                <article className='card' key={index}>
                    <div className='card-header'>
                        <h3>{name}</h3>
                    </div>
                    <div className='card-body'>
                        <p>{expected_result}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default ListCriteria