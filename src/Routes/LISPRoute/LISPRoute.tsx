import React, { useState } from 'react'
import { lispCheck } from '../../Helpers'
import './LISPRoute.scss'

const passingLispExample = `
(print "This string has all the parentheses properly closed and nested")
`
const extraEndLispExample = `
(print "This string has an extra parenthesis on the end"))
`
const extraLispExample = `
(print ("This string has an extra parenthesis internally")
`
const orderLispExample = `
)print "This string has its parentheses out of order"(
`
const badLispExample = `
(print ("This)) string is having a hard ((time")
`

const lispTests = [passingLispExample, extraEndLispExample, extraLispExample, orderLispExample, badLispExample]

export const LISPRoute = () => {
  const [customLISP, setCustomLISP] = useState('')

  const customIsPassing = lispCheck(customLISP)
  return (
    <div className="LISPRoute">
      <h1>LISP tests</h1>
      <span className="LISPRoute__label">Sample LISP string tests</span>
      <div className="LISPRoute__tests">
        {lispTests.map((test, i) => {
          const isPassing = lispCheck(test)
          return (
            <div key={i} className={`LISPRoute__section ${isPassing ? 'LISPRoute__section--is-passing' : ''}`}>
              <span className="LISPRoute__label">
                {isPassing ? 'Passing' : 'Failing'} test
              </span>
              <code className="LISPRoute__code">
                {test}
              </code>
            </div>
          )
        })}
      </div>
      <div
        className={`LISPRoute__custom ${
          (customIsPassing && customLISP) ? 'LISPRoute__custom--is-passing' : ''
        } ${!customIsPassing ? 'LISPRoute__custom--is-failing' : ''}`}
      >
        <span className="LISPRoute__label">Insert a custom LISP string for evaluation</span>
        <textarea
          className="LISPRoute__text-area"
          value={customLISP}
          onChange={e => setCustomLISP(e.target.value)}
          placeholder="Insert custom LISP here..."
        />
        <span
          className={`LISPRoute__results ${customIsPassing ? 'LISPRoute__results--is-passing' : ''}`}
        >
          {!!customLISP && (customIsPassing ? 'PASSING' : 'FAILING')}
        </span>
      </div>
    </div>
  )
}
