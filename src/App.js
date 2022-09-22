import { Fragment } from 'react';
import Cart from './Component/Cart/Cart';
import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
