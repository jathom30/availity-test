import React from 'react'
import { NavLink, Route, Switch, useLocation } from 'react-router-dom'
import './App.scss'
import { HomeRoute, LISPRoute, RegistrationRoute } from './Routes'

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

const availityLogo = 'data:image/png;base64,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'

function App() {
  const { pathname } = useLocation()

  return (
    <div className="App">
        <nav className="App__nav">
          <NavLink to="/">
            <AvailityLogo />
          </NavLink>
          <span className="App__label">Take home assignments</span>
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
            <Route component={HomeRoute} />
          </Switch>
        </main>
    </div>
  );
}

export default App;

const AvailityLogo = () => (
  <svg className="AvailityLogo" viewBox="0 0 623.5 192">
    <defs>
      <linearGradient id="availityGradient" gradientUnits="userSpaceOnUse" x1="0" y1="96.0015" x2="205.7945" y2="96.0015">
          <stop offset="0" style={{ stopColor: '#f26927' }}></stop>
          <stop offset="0.1623" style={{ stopColor: '#f37626' }}></stop>
          <stop offset="0.4881" style={{ stopColor: '#f69723' }}></stop>
          <stop offset="0.9437" style={{ stopColor: '#fccc10' }}></stop>
          <stop offset="1" style={{ stopColor: '#fdd309' }}></stop>
      </linearGradient>
    </defs>
    <path d="M609.6,87.7c0-3.8,3.1-7,6.9-7c3.8,0,6.9,3.1,6.9,7c0,3.8-3.1,6.9-6.9,6.9C612.7,94.7,609.6,91.6,609.6,87.7 M622.4,87.7c0-3.5-2.5-6-5.9-6c-3.4,0-5.9,2.5-5.9,6c0,3.5,2.5,6,5.9,6C619.9,93.7,622.4,91.2,622.4,87.7 M614,83.5h2.7 c1.7,0,2.6,1.1,2.6,2.4c0,1.2-0.8,2-2.2,2.2c0.4,0.3,0.6,0.6,1,1.1l2,2.8h-1.5l-2-3c-0.4-0.6-0.7-0.8-1.3-0.8v3.8H614V83.5z M616.1,87.2c0.9,0,2-0.1,2-1.3c0-0.8-0.4-1.3-1.6-1.3h-1.2v2.6H616.1z M305.6,139.3h-11.3c-1,0-1.8-0.8-2-1.7l-4.9-19.2h-24.6 l-4.9,19.2c-0.2,0.9-1.1,1.7-2,1.7h-11.3c-1.1,0-1.9-0.7-1.9-1.7c0-0.1,0.1-0.3,0.1-0.5l17.5-63.2c2.6-9.4,10.3-10.3,14.9-10.3 c4.6,0,12.3,0.9,14.9,10.3l17.5,63.2c0,0.2,0.1,0.4,0.1,0.5C307.5,138.5,306.6,139.3,305.6,139.3 M276.7,77 c-0.3-1.2-0.6-1.6-1.7-1.6c-1.1,0-1.4,0.4-1.7,1.6l-7.7,29.9h18.8L276.7,77z M360.4,84c0-0.9-0.8-1.6-1.7-1.6H348 c-1,0-1.9,0.7-2.3,2l-10.3,42.2c-0.4,1.9-1.2,2.5-2,2.5c-0.9,0-1.6-0.6-2-2.5l-10.3-42.2c-0.3-1.3-1.2-2-2.1-2h-10.7 c-1,0-1.7,0.7-1.7,1.6c0,0.2,0,0.5,0.1,0.7l13.5,45.9c2.1,7.5,7.8,9.5,13.2,9.5c5.4,0,11.2-2,13.4-9.5l13.5-45.9 C360.4,84.5,360.4,84.2,360.4,84 M409.5,139.3h-9.1c-1.2,0-2.1-0.9-2.1-2v-1.6c-4.9,2.8-9.9,4.4-15.1,4.4c-8.9,0-18.5-3.2-18.5-16.8 v-0.4c0-11.5,7.5-17.4,26.1-17.4h6.7v-4.4c0-6.5-3.1-8.2-9.4-8.2c-6.8,0-13.9,0.4-17.4,0.8h-0.5c-1.1,0-1.9-0.3-1.9-1.7v-6.5 c0-1.1,0.6-1.8,2-2.1c4.3-0.8,10.5-1.6,17.8-1.6c15.2,0,23.5,6.3,23.5,19.2v36.3C411.6,138.3,410.7,139.3,409.5,139.3 M397.5,114.3 h-6.7c-9.7,0-11.9,2.9-11.9,8.6v0.4c0,4.9,2.4,6.3,7.7,6.3c3.9,0,7.8-1.2,10.9-2.8V114.3z M439.7,72.8v-8.9c0-1.1-1-2-2.1-2h-10.4 c-1.2,0-2.3,0.9-2.3,2v8.9c0,1.1,1.1,2,2.3,2h10.4C438.8,74.8,439.7,73.9,439.7,72.8 M439.4,137.1V84.4c0-1.1-1-2-2.1-2h-9.8 c-1.2,0-2.1,0.9-2.1,2v52.7c0,1.1,1,2.1,2.1,2.1h9.8C438.5,139.3,439.4,138.3,439.4,137.1 M467.7,137.1V64.6c0-1.1-0.9-2-2-2h-9.9 c-1.2,0-2.1,0.9-2.1,2v72.6c0,1.1,1,2.1,2.1,2.1h9.9C466.9,139.3,467.7,138.3,467.7,137.1 M496.4,72.8v-8.9c0-1.1-1-2-2.1-2h-10.4 c-1.2,0-2.3,0.9-2.3,2v8.9c0,1.1,1.1,2,2.3,2h10.4C495.4,74.8,496.4,73.9,496.4,72.8 M496.1,137.1V84.4c0-1.1-1-2-2.1-2h-9.8 c-1.2,0-2.1,0.9-2.1,2v52.7c0,1.1,1,2.1,2.1,2.1h9.8C495.1,139.3,496.1,138.3,496.1,137.1 M540.4,129.7h-5.7c-3.8,0-4.2-0.6-4.2-5.6 V92.4h9.6c1.2,0,2.1-0.9,2.1-2v-6c0-1.1-1-2-2.1-2h-9.6V69.1c0-1-0.7-1.5-1.7-1.5h-0.4l-9.6,1.6c-1.2,0.2-2.1,0.9-2.1,2v11.2h0H507 c-1.2,0-2.1,0.9-2.1,2v6c0,1.1,1,2,2.1,2h9.6h0V124c0,13.5,4.6,16,16.6,16c2.4,0,4.7-0.3,7.3-0.7c1.4-0.2,2-0.8,2-1.8v-6.3 C542.6,130.2,541.8,129.7,540.4,129.7 M602.1,84.1c0-0.9-0.9-1.7-1.9-1.7h-10.9c-1.1,0-1.9,0.8-2.1,1.7l-11.5,43.4h-0.3h-0.5h-0.1 c-0.6,0-1.1-0.5-1.5-2.2l-10.8-41c-0.2-0.9-1.1-1.8-2-1.8h-10.8c-1.4,0-2,0.6-2,1.6c0,0.2,0,0.4,0.1,0.7l14,46.2 c2.4,7.6,6.2,8.4,9.3,8.4h1.6l-0.9,3c-1.5,5.2-3.9,6.5-8.4,6.5c-3,0-9.1-0.5-12.1-0.6h-0.2c-1.2,0-2.1,0.7-2.1,1.8v6.4 c0,1,1.1,1.4,2.2,1.7c2.5,0.7,7.8,1.3,11.3,1.3c14.5,0,18.5-4.8,21.8-15.8L602,84.7C602.1,84.5,602.1,84.3,602.1,84.1"></path>
    <path fill="url(#availityGradient)" d="M164.2,63c-7.1,0-13.6,3.5-18.5,9.8l-10.4,13.7l-13.8,18.3l0,0l-11.9,15.7l-0.2,0.4 c-2.4,4.1-2.6,8.6-0.5,12.1c2.1,3.6,6,5.6,10.8,5.6h31.4c4.8,0,8.7-2.1,10.8-5.6c2.1-3.6,1.9-8-0.5-12.1l-0.2-0.4l-14.5-19.2 l-8.7,11.6l8.9,11.8H124l5.9-7.8l0,0l19.3-25.6l0,0l7.6-10c2.2-2.9,4.7-4.3,7.4-4.3h13.8c6.3,0,10.9,1.8,12.8,5.1 c1.9,3.2,1.1,8.2-2,13.6l-42.7,73.9c-3.1,5.4-7.1,8.5-10.8,8.5c-3.7,0-7.6-3.1-10.8-8.5L82.3,96.1l-9.1,12.1l39.4,68.3 c5.7,9.9,14,15.5,22.9,15.5c8.8,0,17.2-5.6,22.9-15.5l42.7-73.9c5.7-9.9,6.4-19.9,2-27.6c-4.4-7.7-13.5-12.1-24.9-12.1H164.2z M47.5,15.5L4.9,89.4c-3.2,5.5-4.8,11-4.9,16.2v0.6c0,3.9,1,7.5,2.9,10.8c4.4,7.6,13.5,12.1,24.9,12.1h13.8c7.1,0,13.6-3.5,18.5-9.8 l10.4-13.7l13.8-18.3v0l11.9-15.7l0.2-0.4c2.4-4.1,2.6-8.6,0.5-12.1c-2.1-3.6-6-5.6-10.8-5.6H54.7c-4.8,0-8.7,2.1-10.8,5.6 c-2.1,3.6-1.9,8,0.5,12.2l0.2,0.4l14.6,19.2L68,79.1L59,67.3h22.7l-5.9,7.8h0l-19.3,25.6l0,0l-7.6,10c-2.2,2.8-4.7,4.3-7.4,4.3H27.7 c-6.2,0-10.9-1.9-12.8-5.1c-1.9-3.2-1.1-8.2,2-13.6l42.7-73.9c3.1-5.4,7.1-8.5,10.8-8.5c3.7,0,7.6,3.1,10.8,8.5l42.4,73.4l9.2-12.1 L93.3,15.5C87.6,5.7,79.2,0,70.4,0C61.6,0,53.2,5.7,47.5,15.5"></path>
  </svg>
)