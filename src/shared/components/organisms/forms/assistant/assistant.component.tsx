import { ListCriteria, Resumen } from 'submodules/public/components';
import { useForm } from 'shared/hooks';
import {prom} from 'shared';
import { Input, Button, } from 'shared/components';
import { useUserPreferences } from 'shared/context/userPreferences.context';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {addCriteria,removeCriteria, useLazyGetDataQuery} from 'store/slices'
import { IconPlus, } from 'shared/assets/icons';
import './assistant.component.scss';

export const AssistantComponent = () => {
    const [getDataQuery] = useLazyGetDataQuery();
    const dispatch = useAppDispatch();
    const { 
            apiKey, 
            request: { criteriaList },
            response
        } = useAppSelector((store) => store.apiIA);
    const { values, register, resetField } = useForm();
    const { translate } = useUserPreferences();
 
    const addCriteriaList = () => {
        dispatch(addCriteria(values.criteria));
        resetField('criteria');
    }

    const removeCriteriaList = (id: number) => {
        dispatch(removeCriteria(id));
    }

    const handleClick = () => {
        const body = {
            contents: [
                {
                  parts: [{text: `${prom} ${values.description} ${criteriaList.join(", ")}`}]
                }
              ]
        }
        getDataQuery({key: apiKey, body});
    }

    return (
        <section className='form__container'>
            <div className='group-form'>
                <Input
                    {...register("description", { required: true })}
                    label={translate('public.pages.assistant.body.firstLabel')}
                    isTextArea={true}
                    className='form__input form__input--textarea'
                />
            </div>
            <div className='group-form group-form--criteria'>
                <Input
                    {...register("criteria", { required: true })}
                    label={translate('public.pages.assistant.body.secondLabel')}
                    className='form__input'
                />
                <Button
                    className='form__button'
                    iconSrc={IconPlus}
                    onClick={() => addCriteriaList()}
                />
            </div>
            <ListCriteria data={criteriaList} remove={removeCriteriaList} />
            <div className='group_form'>
                <Button 
                    className='btn__generate' 
                    label={translate('public.pages.assistant.body.button')} 
                    onClick={() => handleClick()}
                />
            </div>
            <Resumen resumen={response} />
        </section>
    )
}

export default AssistantComponent