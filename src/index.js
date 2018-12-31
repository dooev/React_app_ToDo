import React from 'react'; // обязательная библиотека
import ReactDOM from 'react-dom'; // обязательная библиотека

const el = (  // создание Реакт элемента (jsx) оборачивается в " (<div>...</div>) " (если тег не один)
  <div>
    <h1>Dimasik this is React</h1>
    <h2>My Todo List</h2>
    <input placeholder='search'/>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);
ReactDOM.render(el, document.getElementById('root')); // рендерим элемент отправляя его в контейнер в index.html
