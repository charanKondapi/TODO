import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Todo from './Todo';
import TaskInfo from './TaskInfo';

import './../scss/layout.scss';

type props = {};
export default function Layout(props: props): JSX.Element {
  return (
    <div id="app">
      <Header />
      <Sidebar />
      <Todo />
      <TaskInfo />
    </div>
  );
}
