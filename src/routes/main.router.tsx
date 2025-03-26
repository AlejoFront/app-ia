import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routerList } from './routes';
import { ProtectedRoute } from './protected.router';

interface IProps {
    isAuthenticated: boolean;
}

export const MainRouter: FC<IProps> = ({ isAuthenticated }) => {
 const getRoutes = (isAuthenticated: boolean) => {
    const routeList = isAuthenticated ? routerList.private : routerList.public;

    return routeList.map(({ to, Component }, index) => (
      <Route
        key={index}
        path={to}
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} type={isAuthenticated ? 'private' : 'public'}>
            <Suspense fallback="Cargando página...">
              <Component />
            </Suspense>
          </ProtectedRoute>
        }
      />
    ));
  };

  return (
    <Routes>
      {getRoutes(isAuthenticated)}
      <Route path="*" element={<h2>No  página no encontrada</h2>} />
    </Routes>
  );
}

export default MainRouter