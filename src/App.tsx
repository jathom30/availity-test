import React from 'react'
import { NavLink, Route, Switch, useLocation } from 'react-router-dom'
import './App.scss'
import { LISPRoute, RegistrationRoute } from './Routes'

const routes = [
  {
    path: '/lisp',
    component: LISPRoute,
  },
  {
    path: '/registration',
    component: RegistrationRoute,
  },
]

function App() {
  const { pathname } = useLocation()

  return (
    <div className="App">
        <nav className="App__nav">
          <NavLink
            className={`App__nav-link ${pathname === '/lisp' ? 'App__nav-link--is-active' : ''}`}
            to="lisp"
          >
            LISP test
          </NavLink>
          <NavLink
            className={`App__nav-link ${pathname === '/registration' ? 'App__nav-link--is-active' : ''}`}
            to="registration"
          >
            Availity Registration
          </NavLink>
        </nav>
        <main className="App__main">
          <Switch>
            {routes.map(({path, component}) => (
              <Route key={path} exact path={path} component={component} />
            ))}
          </Switch>
        </main>
    </div>
  );
}

export default App;
