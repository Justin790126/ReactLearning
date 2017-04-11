import AppDispatcher from '../dispatcher/AppDispatcher';
import {ADD_TODO} from '../constants/actionTypes';
import {EventEmitter} from 'events';

const store = {
  todos: [],
  editing: false,
};

class TodoStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(ADD_TODO, cb);
  }
  removeChangeListener(cb) {
    this.removeListener(ADD_TODO, cb);
  }
  getTodos() {
    return store.todos;
  }
}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((action) => {
  switch (action.type) {
    case ADD_TODO:
    console.log('todostore dispatch');
    store.todos.push(action.payload.text);
    TodoStore.emit(ADD_TODO);
    break;
  
  default:
    return true;
  }
  return true;
});

export default TodoStore;

