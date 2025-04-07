import {FC} from 'react';
import { useUserPreferences } from 'shared/context/userPreferences.context';
import {CardSummary} from 'submodules/public/components';
import './resumen.component.scss';
interface IProps {
  resumen: any[]
}

export const Resumen: FC<IProps> = ({resumen}) => { 
  const {translate} = useUserPreferences();
  return (
    <div className='test-case__body'>
      <h3 className='test-case__title'>{translate('public.pages.assistant.body.summary.title')}</h3>
      {
        resumen.map((value) => (
          <CardSummary 
            key={value.id}
            value={value}
          />
        ))
      }
    </div>
  )
}

export default Resumen