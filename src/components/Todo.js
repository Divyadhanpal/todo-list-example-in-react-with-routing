import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Todo = ({id, index, text, done, priority,startDate, onDoneHandler, onDeleteHandler}) => {

  const todoStyle = {
    'border': '1px solid #808080',
    padding: '25px',
    'margin-top': '20px',
    'border-radius':'10px',
    background: '#fff',
    width: '30%',
    margin: '0 auto',
    marginTop: '20px'
  }

  return (
    <div className={`todo ${done ? 'is-done' : ''}`}
      style={todoStyle}>
      <h4 style={{ textDecoration: done ? 'line-through' : 'none' }}>
        <Link to={`/todos/${id}`}>{text}</Link>
      </h4>
      <ul><li className="font-bold">Priority:</li><li class="pl10">{priority}</li></ul>
      
  <ul><li className="font-bold">TaskDate:</li><li class="pl10">{startDate}</li></ul>
      <div>
        <label style={{ color: done ? '#006400' : '#000000' }}>
          {done ? 'Completed' : 'Mark as completed'}
          <input type="checkbox" class="todoinput"
            checked={done}
            onChange={event => onDoneHandler(index, event)} />
        </label>
        <button onClick={() => onDeleteHandler(index)} className="Deletebtn">Delete</button>
      </div>
    </div>
  )
};

Todo.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool,
  priority: PropTypes.string,
  onDoneHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired
}

Todo.defaultProps = {
  priority: 'Mid',
  
}

export default Todo