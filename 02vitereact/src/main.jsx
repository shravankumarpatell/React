import React from 'react'
// import {createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  let username = "SKP"
  return (
  <>
  <h1>Custom App! Create by {username  /*This is called as the evaluated expression*/}</h1>   
  </>
  )
}

const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google' 
}

const AntoherReactElement = (
  <a href="https://google.com" target='_blank'>vist google</a>
);

let anotheruser = "   Uncle"

const ReactOriginalElement = React.createElement(
  'a', 
  { href: 'https://google.com', target: '_blank' }, 
  'Click me to visit google in original way',
  anotheruser
);
//In this format react creates the element.


/*createRoot(document.getElementById('root')).render(
  // <MyApp/>
    // MyApp()     //=> in the end this is the function, so u can call like this but this is not good practice.

    // <ReactElement/>   //=> this is the object and u can't u this way
    // ReactElement      //=> but this way there is no ouput, bcz u have created rect element, and now u have create a render for this right.

    // AntoherReactElement  //=>this AnotherReactElement is converted to the object by the rect inbuild render that's why this give the output. 

    ReactOriginalElement
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp/>
    // MyApp()     //=> in the end this is the function, so u can call like this but this is not good practice.

    // <ReactElement/>   //=> this is the object and u can't u this way
    // ReactElement      //=> but this way there is no ouput, bcz u have created rect element, and now u have create a render for this right.

    // AntoherReactElement  //=>this AnotherReactElement is converted to the object by the rect inbuild render that's why this give the output. 

    ReactOriginalElement
)
