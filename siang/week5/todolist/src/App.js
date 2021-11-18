import './App.css';
import { Fragment } from 'react';
import TodoList from './components/TodoList';
import ReduxCounter from './redux';

function App() {
  return (
    <Fragment>
      {/* <TodoList /> */}
      <ReduxCounter />
    </Fragment>  
  );
}

export default App;
