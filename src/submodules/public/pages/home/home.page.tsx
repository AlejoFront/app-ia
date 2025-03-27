import { FormCriteria, ListCriteria } from 'submodules/public/components';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from 'store/hooks';
import { Button, Input } from 'shared/components';
import {useUserPreferences} from 'shared/context/userPreferences.context';
import './home.page.scss';
export const HomePage = () => {
  const navigate = useNavigate();
  const {translate} = useUserPreferences();
  const {isLoading, response} = useAppSelector((store) => store.apiIA);

  const handleSingIn = () => {
    navigate('/assistant')
  }

  return (
    <div className='app-container'>
      <section className='app-container__api-key'>
        <h3 
          className='app-container__title' >{translate('public.pages.home.title')}</h3>
        <Input 
          placeholder={translate('public.pages.home.placeholder')} 
          className='app-container__input'
        />
        <Button 
          label={translate('public.pages.home.button')} 
          type='button'
          className='app-container__btn-enter'
          onClick={() => handleSingIn()}
        />
      </section>
    </div>
  )
}

export default HomePage
