import { FC } from 'react';
import './list-criteria.component.scss';
import { IconTrash } from 'shared/assets/icons';
import { Button } from 'shared/components';

interface Iprops {
    data: any[];
    remove: (id: number) => void;
}

export const ListCriteria: FC<Iprops> = ({data, remove}) => {
    return (
        <ul className='group__list'>
            {
                data.map((value, i) => (
                    <li className='group__item' key={i}>
                        <span>{value}</span>
                        <Button className='icon-trash' iconSrc={IconTrash} onClick={() => remove(i)} />
                    </li>
                ))
            }
        </ul>
    )
}

export default ListCriteria