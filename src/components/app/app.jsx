import React from 'react';
import {Switch, Route} from 'react-router-dom';
import BasketScreen from '../basket-screen/basket-screen';
import {AppRoute} from '../../const';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.BASKET}>
        <BasketScreen />
      </Route>

      <Route exact path={AppRoute.BASKET}>
        <BasketScreen />
      </Route>
    </Switch>
  );
};

export default App;
