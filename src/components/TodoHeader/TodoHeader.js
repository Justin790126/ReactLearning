import React, {Component} from 'react';
import {TodoActions} from '../../actions/todoActions';

class TodoHeader extends Component  {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      text: '',
      editing: false,
    };
  }
  onChange(e) {
    this.setState({
      text: e.target.value, 
    });
  }
  onAdd() {
    TodoActions.addTodo(this.state.text);
    this.setState({
      text: '', 
    });
  }
  render() {
    return (
      <div>
        <h1>TodoFlux</h1>
        <div>
          <input
            value={this.state.text}
            type='text'
            placeholder="Input to do"
            onChange={this.onChange}
          />
          <button
            onClick={this.onAdd}
          >
            Send 
          </button>
        </div>
      
      </div>
    
    );
  
  }
}

export default TodoHeader;
