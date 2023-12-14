import React from 'react';
import ReactDOM from 'react-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import Crud from './components/Crud';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className="m-5 text-3xl font-bold">CRUD App</h1>
      <Crud />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
