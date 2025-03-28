import {IconBars, IconStart} from 'shared/assets';
import {useUserPreferences} from 'shared/context/userPreferences.context';
import {Button} from 'shared/components';

export const Nav = () => {
  const {translate} = useUserPreferences();
  return (
    <nav className='nav'>
      <section className='nav__bar'>
        <figcaption className='nav__bar__figure'>
          <img src={IconBars} alt="icon-bars" className='nav__bar__img' />
        </figcaption>
      </section>
      <section className='nav__items'>
        <Button 
          className='nav__link'
          iconSrc={IconStart}
          label={translate('public.pages.assistant.nav.firstBtn')}
        />
      </section>
    </nav>
  )
}

export default Nav