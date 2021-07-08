import './App.css';
import {Switch,Route} from 'react-router-dom'
import ContactList from "./components/ContactList"
import Add from './components/Add';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Button} from 'semantic-ui-react'
import { toggleFalse } from './redux/action/contact';

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
        <h1>Mern app </h1>

        <Button inverted color='blue' onClick={()=>dispatch(toggleFalse())}>
        <Link  to ={'/add'}>Add Contact</Link>
    </Button>

    <Button>
        <Link  to ={'/'}>Contact List</Link>
    </Button>
      
      <Switch>
        <Route  exact path="/" component={ContactList}/>
        <Route  path={['/add','/edit/:id']} component={Add}/>

      </Switch>
    </div>
  );
}

export default App;
