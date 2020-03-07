import React from 'react';
import './../scss/header.scss';

type props = {};
export default function Header(props: props): JSX.Element {
  return (
    <header id="header">
      <div className="logo">
        <h1>To Do</h1>
      </div>
      <div className="search-box">
        <input type="text" />
      </div>
      <div className="header-options">
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </div>
    </header>
  );
}
