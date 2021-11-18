import { Fragment } from 'react';
import './App.css';
import HideShow from './components/HideShow';
import SearchType from './components/SearchType';
import SearchVariant from './components/SearchVariant';
import Simple from './components/Simple';

function App() {
  return (
    <Fragment>
      <Simple />
      <HideShow />
      <SearchType />
      <SearchVariant />
    </Fragment>
  )
}

export default App;
