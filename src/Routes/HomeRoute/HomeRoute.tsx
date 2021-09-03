import React from 'react'
import './HomeRoute.scss'

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
  }
]

export const HomeRoute = () => {
  return (
    <div className="HomeRoute">
      <p>This app has been created to complete Availity's Frontend Homework Assignment</p>
      <div className="HomeRoute__body">
        {qAndAs.map(({q, a}, i) => <QuestionAndAnswer key={i} question={q} answer={a} />)}
      </div>
    </div>
  )
}

const QuestionAndAnswer: React.FC<{
  question: string
  answer: string
}> = ({ question, answer }) => {
  return (
    <div className="QuestionAndAnswer">
      <span className="QuestionAndAnswer__q"><strong>Question:</strong> {question}</span>
      <span className="QuestionAndAnswer__a"><strong>Answer:</strong> {answer}</span>
    </div>
  )
}