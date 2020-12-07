import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navigation/Navigation';
import Footer from './components/layout/footer/Footer';
import Home from './components/home/Home';
import Routes from './components/routing/Routes';
import About from './components/layout/footer/About';
import FAQ from './components/layout/footer/Faq';
import Summary from './components/summary/Summary';

import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Faq" component={FAQ} />
            <Route exact path="/Summary" component={Summary} />

            <Route component={Routes} />
          </Switch>
          <Footer />
        </>
      </Router>
    </Provider>
  );
};

export default App;
