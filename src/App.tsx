import React from 'react'
import { NavLink, Route, Switch, useLocation } from 'react-router-dom'
import './App.scss'
import { HomeRoute, LISPRoute, RegistrationRoute } from './Routes'
import { AvailityLogo } from 'Components'

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
          <NavLink className="App__logo-link" to="/">
            <AvailityLogo />
          </NavLink>
          <span className="App__label">Take home assignments</span>
          <NavLink
            className={`App__nav-link ${pathname === '/lisp' ? 'App__nav-link--is-active' : ''}`}
            to="lisp"
          >
            LISP Test
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
            <Route component={HomeRoute} />
          </Switch>
        </main>
    </div>
  );
}

export default App;
