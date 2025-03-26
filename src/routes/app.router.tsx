import { BrowserRouter as Router } from 'react-router-dom';
import {MainRouter} from './main.router';

export const AppRouter = () => {
    /**
     * sistema de loading
     */
  return (
    <Router>
        <MainRouter isAuthenticated={false}  />
    </Router>
  )
}

export default AppRouter