import { ListCriteria } from 'submodules/public/components';
import {Input, Button, } from 'shared/components';
import {useUserPreferences} from 'shared/context/userPreferences.context';
import {IconPlus, } from 'shared/assets/icons';
import './assistant.component.scss';

export const AssistantComponent = () => {
    const {translate} = useUserPreferences();
  return (
    <section className='form__container'>
        <div className='group-form'>
            <Input  
                label={translate('public.pages.assistant.body.firstLabel')}
                isTextArea={true}
                className='form__input form__input--textarea'
            />
        </div>
        <div className='group-form group-form--criteria'>
            <Input  
                label={translate('public.pages.assistant.body.secondLabel')}
                className='form__input'
            />
            <Button 
                className='form__button'
                iconSrc={IconPlus}
            />
        </div>
        <ListCriteria data={[]} />
        <div className='group_form'>
            <Button className='btn__generate' label={translate('public.pages.assistant.body.button')} />
        </div>
    </section>
  )
}

export default AssistantComponent