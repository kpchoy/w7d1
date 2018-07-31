import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmitTodo(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form>
        <label>Title
          <input
            className="input"
            ref="title"
            value={this.state.title}
            onChange={this.update('title')}></input>
        </label>

        <label>Body
          <textarea
            className="input"
            ref="body"
            value={this.state.body}
            onChange={this.update('body')}></textarea>
        </label>

        <button onClick={this.handleSubmitTodo}>New Todo</button>

      </form>
    );
  }

}

export default TodoForm;
