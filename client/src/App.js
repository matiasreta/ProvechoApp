import {Route, Switch} from 'react-router-dom'
import {AppStyle} from './GlobalStyle/AppStyle'
import {Nav} from './components/Nav/Nav.jsx'
import {Information} from './components/Information/Information.jsx'
import {Create} from './components/Create/Create.jsx'
import {Home} from './components/Home/Home.jsx'
import {Landing} from './components/Landing/Landing.jsx'

import {BrowserRouter as Router} from 'react-router-dom'


function App() { 
  return ( <Router>
    <AppStyle>
      
      <Switch>
      <Route exact path={'/Landing'} component={Landing}/>
      <Route path={'/'} component={Nav}/>
      </Switch>     
      
      <Route path={'/home'} component={Home}/>
      <Route exact path={'/information/:id'}> <Information/> </Route>
      <Route exact path={'/createRecipe'} component={Create}/>
      
    </AppStyle>
    </Router>
  );
}

export default App;
  