import React from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        marginBottom: '.5rem',
        borderRadius: '4px'
    },
    checkbox: {
        marginRight: '.7rem'
    }
};

function TodoItem({todo, index, onChange}) {
    const { removeTodo } = React.useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }

    return (
        <li style = { styles.li }>
            <span className = { classes.join(' ') }>
                <input 
                    type = 'checkbox' 
                    style = { styles.checkbox } 
                    onChange = { () => onChange(todo.id) } 
                    checked = {todo.completed && 'checked'}
                />
                <strong>{ index + 1 }</strong>
                &nbsp;
                { todo.title }
            </span>
            <button className='rm-btn' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TodoItem;