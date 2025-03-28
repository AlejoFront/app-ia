import {FC, ReactNode} from 'react';
import { Header, Nav } from 'shared/components';
import { useUserPreferences } from 'shared/context/userPreferences.context';
import './layout.component.scss'

interface Iprops {
  children: ReactNode
}

export const Layout: FC<Iprops> = ({children}) => {
  const { translate } = useUserPreferences();
  return (
    <div className='app__container'>
      <Header />
      <Nav />
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