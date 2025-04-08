import {FC} from 'react';
import { useUserPreferences } from 'shared/context/userPreferences.context';
import {CardSummary} from 'submodules/public/components';
import './summary.component.scss';
interface IProps {
  summary: any[]
}

export const Summary: FC<IProps> = ({summary}) => { 
  const {translate} = useUserPreferences();
  return (
    <div className='test-case__body'>
      <h3 className='test-case__title'>{translate('public.pages.assistant.body.summary.title')}</h3>
      {
        summary?.map((value) => (
          <CardSummary 
            key={value.id}
            value={value}
          />
        ))
      }
    </div>
  )
}

export default Summary