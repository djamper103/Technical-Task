import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';

function App() {
  return (
    <div className="App">
      <Routes>
          {
            routes.map(route => <Route element={route.element} path={route.path} key={route.path} />)
          }
        </Routes>
    </div>
  );
}

export default App;
