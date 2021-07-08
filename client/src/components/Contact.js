import React from 'react'
import { Button, Card,  } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import {deletecontact, getonecontact, toggleTrue} from '../redux/action/contact' 
import {Link} from 'react-router-dom'

const Contact = ({contact}) => {
   
  const dispatch = useDispatch()
  return (
        <div>
            <Card>
      <Card.Content>
       
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>
          <strong>{contact.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button inverted color='green' onClick={()=>{dispatch(getonecontact(contact._id));dispatch(toggleTrue())}}>
            <Link to ={`/edit/${contact._id}`} >Edit</Link>
          </Button>
          <Button inverted color='red'   onClick={()=>dispatch(deletecontact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
        </div>
    )
}

export default Contact
