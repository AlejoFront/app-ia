import { FormCriteria, ListCriteria } from 'submodules/public/components';
import {useAppSelector} from 'store/hooks';
import './home.page.scss'
export const HomePage = () => {
  const {isLoading, response} = useAppSelector((store) => store.apiIA)
  return (
    <div className='app-container'>
      <section className='column-form'>
        <FormCriteria />
      </section>
      <section className='column-grid'>
          {
            isLoading 
            ? <>Cargando...</>
            : response.length > 0
            && <ListCriteria data={response} />
          }
      </section>
    </div>
  )
}

export default HomePage
