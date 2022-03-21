import { Fragment, lazy, Suspense } from "react";

import {
  Routes,
  Route
} from "react-router-dom";

//import './App.css';

import { GlobalStyle } from './globalTheme';

import Loading from './components/loading';

const LoadAdminRouter = lazy(() => import('./routes/loadAdminRouter'));
const Landing = lazy(() => import('./routes/landing'));
const Page = lazy(() => import('./routes/page'));

const App = () => {
  return (
    <Fragment>
    <GlobalStyle />
      <Suspense fallback={<Loading />} >
        <Routes>
          <Route exact path='/*' element={ <Landing /> } />
          <Route exact path='/:slag/*' element={ <Page />} />
          <Route exact path='/my-dash/*' element={<LoadAdminRouter />} />
        </Routes>
      </Suspense> 
    </Fragment>  
)};

export default App;
