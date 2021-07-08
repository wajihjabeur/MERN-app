import {React,useEffect,useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useSelector,useDispatch } from 'react-redux'
import {editcontact, postcontact} from '../redux/action/contact'
import {Link} from 'react-router-dom'
const Add = () => {
    const dispatch = useDispatch()

   
    const [user, setUser] = useState({name:"",email:"",phone:""})
    const userReducer = useSelector(state => state.contactReducer.user)
    const edit = useSelector(state => state.contactReducer.edit)
    useEffect(() => {
       edit? setUser(userReducer):setUser({name:"",email:"",phone:""})
        
    }, [edit,userReducer])

    const handlechange=(e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handlecontact=()=>{
        if (!edit) {dispatch(postcontact(user))}
        else {dispatch(editcontact(userReducer._id,user))}
        
    }
    return (
        <div>

            
           <Form>
    <Form.Field>
      <label>name</label>
      <input  value={user.name}placeholder='name' name='name' onChange={handlechange}/>
    </Form.Field>
    <Form.Field>
      <label>email</label>
      <input  value={user.email} placeholder='email' name='email' onChange ={handlechange}/>
    </Form.Field>
    <Form.Field>
      <label>phone</label>
      <input  value={user.phone} placeholder='phone' name='phone' onChange ={handlechange}/>
    </Form.Field>
    <Link to='/' >
    <Button type='submit' onClick={handlecontact}>{edit?'edit':'save'}</Button>
    </Link>
  </Form>
        </div>
    )
}

export default Add
