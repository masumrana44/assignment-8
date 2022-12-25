import React from 'react';
import './Question.css'

const Question = () => {
    return (
       <div className='question-container'>
         <div className='question-bank'>
            <h2>Q.1-How does react work?</h2>
            <p>Ans:-React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates 
                a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the 
             browser DOM.</p>
            <h2>Q.2-What's the difference between of props and state?</h2>
            <p>Ans:-State and props are mainly different from each other because props are immutable. Props are the read-only 
            components. It is an object which stores the attribute value of a tag, and its work is similar to the HTML 
            elements.
            On the otherhand,the state is an updatable structure which is used for containing data or information about the 
             component. The state in a component can be changed over time. This change in the state over time happens as a 
              response to user action or system events. The components with the state are called Stateful components. It is a 
               crucial part of the React component that determines the component's behavior and how it will render. They are 
                also responsible for making a component interactive and dynamic.
              </p>
              <h2>How does work reactjs UseEffect? </h2>
              <p>Ans:-It allows you to perform the side effects within the function components. It does not require the methods of the component lifecycle that are available in the class components. You can say that Hooks are similar to componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods.</p>
        </div>
       </div>
    );
};

export default Question;