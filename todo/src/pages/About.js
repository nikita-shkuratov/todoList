import React from 'react';

export const About = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">react application "todo list" </h1>
        <p className="lead">Project description: This application where you can keep a list of tasks, completed tasks can be removed from the list.
    Project tools: HTML5, CSS3, SCSS, JavaScript, ES6, React, React Hooks.</p>

        <div className="social-share">
          <a
            title='Project link in git'
            href="https://github.com/nikita-shkuratov/todoList/tree/master/todo">
            <i className="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}