import {IconArrowBack} from 'shared/assets';
import { useUserPreferences } from 'shared/context/userPreferences.context';


export const Header = () => {
  const {translate} = useUserPreferences();
  return (
    <header className='header'>
      <figure className='header__figure'>
        <img className='header__img' src={IconArrowBack} alt="icon-row-back" />
        <figcaption className='header__figcaption'>
          {translate('public.pages.assistant.header.title')}
        </figcaption>
      </figure>
    </header>
  )
}

export default Header