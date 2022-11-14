import {Route} from 'react-router-dom'

import {SearchBar} from './components/SearchBar/SearchBar.jsx'
import {Information} from './components/Information/Information.jsx'
import {Create} from './components/Create/Create.jsx'
import {Home} from './components/Home/Home.jsx'



function App() { 
  return (
    <div className="App">
      <h1>Henry Food</h1>
      <Route path={'/'} component={SearchBar}/>
      <Route path={'/home'} component={Home}/>
      <Route exact path={'/information/:id'}> <Information/> </Route>
      <Route exact path={'/CreateRecipe'} component={Create}/>

    </div>
  );
}

export default App;
  