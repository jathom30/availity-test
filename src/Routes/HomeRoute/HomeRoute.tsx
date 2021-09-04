import { AvailityLogo } from 'Components'
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './HomeRoute.scss'

export const HomeRoute = () => {
  const qAndAs = [
    {
      q: 'Tell me about your proudest professional achievement.  It can also be a personal or school project.',
      a: 'My proudest professional achievement is a creative generator I was tasked with on an early political portal my team was building. It became a selling point for the app and has become a staple in all portals we’ve built since. The current iteration is built in React with TypeScript and heavily uses a canvas library called Konva.js. More recently I added Recoil.js to manage the complex state of the app. The purpose of the app is to create five advertisements of specific sizes simultaneously. The customer can fully customize each ad or use a template offered by us and only update what they feel is necessary.',
    },
    {
      q: 'Tell me about something you have read recently that you would recommend and why. (Can be a Github Repo, Article, Blog, Book, etc)',
      a: 'I can’t say I’ve read anything lately tech related, however, I do regularly listen to a frontend podcast called “Shop Talk Show” which talks about various new pieces of tech in the industry. Somewhat recently there happened to be an episode that discussed, among other things, tabs in the browser. It happened to be the case that I was currently building a Tabs component for our component library around the same time and I was able to learn from their mistakes and missteps to create, what I think to be, a well thought out and sturdy set of Tab components.',
    },
    {
      q: 'How would you explain to your grandmother what Availity does?',
      a: 'I would explain to my grandmother that Availity makes it easier for healthcare professions to interface with healthcare providers so your doctor can focus on you and not have to worry that your insurance claim wont get approved.',
    },
    {
      q: 'Coding exercise: You are tasked to write a checker that validates the parentheses of a LISP code.  Write a program (in Java or JavaScript) which takes in a string as an input and returns true if all the parentheses in the string are properly closed and nested.',
      a: <Link className="HomeRoute__link" to="/lisp">LISP Test</Link>,
    },
    {
      q: 'Coding exercise from a frontend perspective: Healthcare providers request to be part of the Availity system.  Using a modern JavaScript framework (React preferred, or Vue or Angular), create a registration user interface so healthcare providers can electronically join Availity.',
      a: <Link className="HomeRoute__link" to="registration">Availity Registration</Link>,
    },
  ]

  return (
    <div className="HomeRoute">
      <div className="HomeRoute__container">
        <div className="HomeRoute__logo">
          <AvailityLogo />
        </div>
        <h1 className="HomeRoute__title">Availity's Frontend Homework Assignment</h1>
        <p className="HomeRoute__body-copy">
          We highly recommend that you use one of the free source code management platforms (GitHub, GitLab or BitBucket) when storing your code.  Once you are ready for us to look at your answers, <strong>send us the link</strong> to your code. If you have any questions about the homework, please do not hesitate to ask.
        </p>
        <p className="HomeRoute__label">Questions:</p>
        <div className="HomeRoute__body">
          {qAndAs.map(({q, a}, i) => <QuestionAndAnswer key={i} question={q} answer={a} number={i + 1} />)}
        </div>
        <p className="HomeRoute__body-copy">
          Again, please let us know if you have any questions. Thanks!
        </p>
        <p className="HomeRoute__body-copy">
          -Availity Team
        </p>
      </div>
    </div>
  )
}

const QuestionAndAnswer: React.FC<{
  question: string
  answer: ReactNode
  number: number
}> = ({ question, answer, number }) => {
  return (
    <div className="QuestionAndAnswer">
      <span className="QuestionAndAnswer__q"><strong>{number}.</strong> {question}</span>
      <span className="QuestionAndAnswer__a">{answer}</span>
    </div>
  )
}