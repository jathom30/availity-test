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

// const availityLogo = 'data:image/png;base64,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'

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
