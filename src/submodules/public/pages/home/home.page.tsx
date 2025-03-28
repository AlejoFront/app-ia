import {useAppSelector} from 'store/hooks';
import { Button, Input } from 'shared/components';
import {useUserPreferences} from 'shared/context/userPreferences.context';
import {useAppDispatch} from 'store/hooks';
import {useLazyGetIsValidApiKeyQuery, clearMessageStatus} from 'store/slices';
import './home.page.scss';
import { useEffect, useState } from 'react';
export const HomePage = () => {
  
  const dispatch = useAppDispatch();
  const [apiKey, setApiKey] = useState<string>('');
  const {translate} = useUserPreferences();
  const [getIsValidApiKey] = useLazyGetIsValidApiKeyQuery();
  const {isLoading, status} = useAppSelector((store) => store.apiIA);

  const handleSingIn = () => {
    if(isLoading) return;
    getIsValidApiKey({key: apiKey})
  }

  useEffect(() => {
    if(status.code === 0 || status.code === null) return;
    setTimeout(() => {
      dispatch(clearMessageStatus());
    },5000)
    // eslint-disable-next-line
  }, [status])
  

  return (
    <div className='app-container'>
      <section className='app-container__api-key'>
        <h3 
          className='app-container__title' >{translate('public.pages.home.title')}</h3>
        <Input 
          placeholder={translate('public.pages.home.placeholder')} 
          className='app-container__input'
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          required
        />
        <Button 
          disabled={isLoading}
          label={isLoading ? translate('public.shared.loading') : translate('public.pages.home.button')} 
          type='button'
          className='app-container__btn-enter'
          onClick={() => handleSingIn()}
        />
      </section>
    </div>
  )
}

export default HomePage
