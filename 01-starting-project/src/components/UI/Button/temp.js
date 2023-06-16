import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const clickHandler = () => {
        console.log('Clicked!');
    };
    
    return (
        <Div>
          <h2>You're logged in!</h2>
          <p>Welcome to your user profile!</p>
          <button onclick={clickHandler}>Click me!</button>
        </Div>
    );
}

