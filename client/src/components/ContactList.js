import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getcontact } from '../redux/action/contact'

import Contact from "./Contact"
const ContactList = () => {

    

    const dispatch = useDispatch()
    const contact = useSelector(state => state.contactReducer.contact)
    const contactLoad = useSelector(state => state.contactReducer.contactLoad)
    console.log(contact,contactLoad)
    useEffect(() => {
       dispatch(getcontact())
        
    }, [])
    return (
        <div>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
            {contactLoad? <h2> loading </h2> : contact.map(el=> <Contact key={el._id} contact={el}/>)}
        </div>

            
        </div>
    )
}

export default ContactList
