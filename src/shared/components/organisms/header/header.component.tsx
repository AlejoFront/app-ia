import { Dispatch, FC, SetStateAction } from 'react';
import {IconBars, IconArrowBack} from 'shared/assets';
import {Image} from 'shared/components';
import { useUserPreferences } from 'shared/context/userPreferences.context';

interface Iprops {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<Iprops> = ({setIsShow, isShow}) => {

  const {translate} = useUserPreferences();
  return (
    <header className='header'>
        <Image 
          figureClassName='header__figure header__figure--bars'
          className='header__img header__img--bars'
          alt='icon-bars'
          src={IconBars}
          onClick={() => setIsShow(!isShow)}
        />
      <Image
        figureClassName='header__figure'
        className='header__img'
        captionClassName='header__figcaption'
        alt='icon-row-back'
        src={IconArrowBack} 
        caption={translate('public.pages.assistant.header.title')}
      />
    </header>
  )
}

export default Header