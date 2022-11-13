import {Route} from 'react-router-dom'

//components
import {SearchBar} from './components/SearchBar/SearchBar.jsx'
import {Information} from './components/Information/Information.jsx'
import {Create} from './components/Create/Create.jsx'




function App() { 
  return (
    <div className="App">
      <h1>Henry Food </h1>
      <Route path={'/1'} component={SearchBar}/>
      <Route path={'information'} component={Information}/>
      <Route path={'/CreateRecipe'} component={Create}/>

    </div>
  );
}

export default App;
  