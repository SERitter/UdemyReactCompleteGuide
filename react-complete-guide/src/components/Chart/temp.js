import React from 'react';

import Card from './Card.js';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>Todos</h1>
            
            <Card content={<p>Please note: Below are just the most important todos - feel free to add more.</p>}/>
            
            <ul>
              <li className="todo">
                <Card content={<div><h2>Learn React</h2><p>Learn React fundamentals & explore core concepts</p></div>} />
              </li>
              <li className="todo">
                <Card content={<div><h2>Practice React</h2><p>Apply your knowledge & build demo projects</p></div>} />
              </li>
            </ul>
        </div>
    );
}