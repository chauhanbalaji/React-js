import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>
        custom app
      </h1>
    </div>
  )
}

const anotherElement  = (
  <a href='https://googel.com' target='_blank'> Visit google </a>
)

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com' , target: '_blank' 
  }, 'Click me to  visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <MyApp />
    reactElement
  // </React.StrictMode>
)
