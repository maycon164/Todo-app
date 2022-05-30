import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './components/App';
import './Index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
)
