import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <table> 
        <thead>
          <tr>
            <td>Заголовок 1</td>
            <td>Заголовок 2</td>
            <td>Заголовок 3</td>
            <td>Заголовок 14</td>
          </tr>         
        </thead>
        <tfoot><tr><td>the end</td></tr></tfoot>        
        <tbody>
          <tr>
            <td>afdafaf</td>
            <td>afdasfasfd</td>
            <td>asfdafdaf</td>
            <td>asdfasfdaf</td>
          </tr>         
        </tbody>
      </table>
    </div>
  );
}

export default App;
