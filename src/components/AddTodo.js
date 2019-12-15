import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.defaultState = {
      text: '',
      priority: 'please select',
      startDate: new Date()
      
    }
    
    this.state = this.defaultState;
  }
 
  handleChange = date => {
    this.setState({
      startDate: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    });
  };
  onChangeHandler = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    });
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onAddTodoHandler(this.state);
    this.setState(this.defaultState);
  }

  render() {
    const { text, priority , startDate} = this.state;
    return (
      <div class="todoform">
      <form onSubmit={this.onSubmitHandler}>
        <ul>
        <li><input name="text" className="todoinputfield" required placeholder="Task Name*"
               value={text}
               onChange={this.onChangeHandler} />
        </li>
         <li>
           <select name="priority" required className="select-css"
                value={priority}
                onChange={this.onChangeHandler}>
          <option value=''>Task Priority</option>
          <option value={'High'}>High</option>
          <option value={'Mid'}>Mid</option>
          <option value={'Low'}>Low</option>
        </select>
        </li>
         <li>
         <DatePicker name="startDate" value={startDate} placeholderText="selectDate"
         autoComplete="off" className="dateinputfield" dateFormat="DD/MM/YYYY"
  selected={this.state.date}
  onSelect={this.handleSelect} //when day is clicked
  onChange={this.handleChange} //only when value has changed
/>
        </li>
        <li>
        <button className="Addtaskbtn">Add Task</button>
        </li>
        </ul>
      </form>
      </div>
    )
  }
}

export default AddTodo