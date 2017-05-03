import React, { Component } from 'react';
import { Header, Item } from 'semantic-ui-react';

import Todo from './Todo';
import { stringToUrl } from './util';

const todoList = [
  {completed: false, dueBy: new Date('2017-05-05'), doneOn: null, name: 'Simple POC', description: 'finish POC of todo list with redux.' },
  {completed: false, dueBy: new Date('2017-05-08'), doneOn: null, name: 'Azure POC', description: 'finish POC of todo list with redux on azure.' },
  {completed: true,  dueBy: new Date('2017-04-30'), doneOn: new Date('2017-04-30'), name: 'Pesty Cat', description: 'pet Lula' },
];

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.markAsDone = this.markAsDone.bind(this);
    }

    markAsDone(event, i) {
        // console.log(this, event);

        // const todo = todoList[i];
        // console.log(todo);

        // todo.completed = true;
        // todo.doneOn = new Date();
        // this.forceUpdate();
    }

    render() {
        let counter = -1;
        const todos = todoList.map(i => {
            let index = ++counter;

            return (
                <Todo 
                    key={index} 
                    name={i.name}
                    link={stringToUrl(i.name)}
                    completed={i.completed} 
                    dueBy={i.dueBy.toDateString()} 
                    doneOn={i.doneOn ? i.doneOn.toDateString() : ''}
                    description={i.description} 
                    onDone={(event) => this.markAsDone(event, index)}
                />);
        });
    
        return (
            <div>
                <Header textAlign='center' dividing color='green' as='h2' icon='calendar' content='Todo List' />
                <Item.Group divided>
                    {todos}
                </Item.Group>
            </div>
        );
    }
}

export default TodoList;