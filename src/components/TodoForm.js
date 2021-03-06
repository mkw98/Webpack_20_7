import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
  }

  handleChange(event) {
      this.setState({
          value: event.target.value
      });
  }

  handleSubmit(event) {
      event.preventDefault();
      this.props.add(this.state.value);
  }

  render() {
    return (
      <form className={style.TodoForm} onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <input type="text" placeholder ="New task..." value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <button type="submit" className={style.addButton}>Create new task</button>
      </form>
    );
  }
}

export default TodoForm;