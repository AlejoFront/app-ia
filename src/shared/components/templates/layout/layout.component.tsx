import {FC, ReactNode, useState} from 'react';
import { Header, Nav } from 'shared/components';
import { useUserPreferences } from 'shared/context/userPreferences.context';
import './layout.component.scss'

interface Iprops {
  children: ReactNode
}

export const Layout: FC<Iprops> = ({children}) => {
  const [isShow, setIsShow] = useState(false);
  const { translate } = useUserPreferences();
  return (
    <div className={`app__container ${isShow ? 'app__container--show' : ''}`}>
      <Header isShow={isShow} setIsShow={setIsShow} />
      <Nav isShow={isShow} />
      <section className='body'>
        <h3 className='body__title'>{translate('public.pages.assistant.body.title')}</h3>
        <article className='body__article'>
          {translate('public.pages.assistant.body.description')}
        </article>
        {children}
      </section>
    </div>
  )
}

export default Layout