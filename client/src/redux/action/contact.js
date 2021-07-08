import { GET_CONTACT_FAIL, GET_CONTACT_LOAD, GET_CONTACT_SUCC ,DELETE_CONTACT, TOGGLE_TRUE, TOGGLE_FALSE, GET_CONTACT, POST_CONTACT, EDIT_CONTACT} from "../constante/contact"
import axios from "axios"
export const getcontact=()=>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        let result =await axios.get("/api/contact/")
        dispatch({type:GET_CONTACT_SUCC,payload:result.data.result})
        
    } catch (error) { dispatch({type:GET_CONTACT_FAIL,payload:error})
        
    }

}


export const deletecontact=(id)=>(dispatch)=>{
    
         axios.delete(`/api/contact/delete/${id}`)
        .then((res)=>dispatch(getcontact()))
        .catch((err)=>console.log(err))
}


export const toggleTrue=()=>{
    return {
        type:TOGGLE_TRUE
    }

}
export const toggleFalse=()=>{
    return {
        type:TOGGLE_FALSE
    }
    
}
export const getonecontact=(id)=>(dispatch)=>{
    axios.get(`/api/contact/${id}`)
    .then((res)=>dispatch({type:GET_CONTACT,payload:res.data.result}))
    .catch((err)=>console.log(err))

}

export const postcontact=(user)=>(dispatch)=>{
    axios.post("/api/contact/create",user)
    .then((res)=>dispatch(getcontact()))
    .catch((err)=>console.log(err))

}

export const editcontact=(id,user)=>(dispatch)=>{
    axios.put(`/api/contact/update/${id}`,user)
    .then((res)=>dispatch(getcontact()))
    .catch((err)=>console.log(err))

}


