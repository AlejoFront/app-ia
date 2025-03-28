import { FC } from 'react';
import './list-criteria.component.scss';
import { IconTrash } from 'shared/assets/icons';
import { Button } from 'shared/components';

interface Iprops {
    data: any[]
}

export const ListCriteria: FC<Iprops> = ({data}) => {

    return (
        <ul className='group__list'>
            {
                data.map(() => (
                    <li className='group__item'>
                        <span>Mostrar la respuesta de la operacion processRuntFile</span>
                        <Button className='icon-trash' iconSrc={IconTrash} />
                    </li>
                ))
            }
        </ul>
    )
}

export default ListCriteria