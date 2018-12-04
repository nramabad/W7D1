import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo} from './actions/todo_actions';
import {receiveTodos} from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  window.store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(
    <h1>Todo list is working</h1>, root
  );
});