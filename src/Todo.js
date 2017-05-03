import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import { Item, Button, Icon } from 'semantic-ui-react';

const Todo = (props) => {
    const statusClass = props.completed ? 'completed-item' : '';
    const to = `/todo/${props.link}`;
    const statusAction = props.completed ?
        (<div><strong>Done:</strong> {props.doneOn}</div>)
        :
        (<div>
            <span className='dueBy'><strong>Due By:</strong> {props.dueBy}</span>
            <Button onClick={props.onDone} size='mini' icon>
                <Icon name='checkmark' />
            </Button>
        </div>);


    return (
        <Item> 
            <Item.Content>
                <Item.Header>
                <Link to={to}>{props.name}</Link>
                </Item.Header>
                <Item.Description>
                    <div className={statusClass}>{props.description}</div>
                    <br></br>
                    {statusAction}
                </Item.Description>
            </Item.Content>
        </Item>
    );
}


// Todo.propTypes = {
//     completed: PropTypes.bool.isRequired,
//     dueBy: PropTypes.Date.isRequired,
//     description: PropTypes.string.isRequired,
// }


export default Todo;