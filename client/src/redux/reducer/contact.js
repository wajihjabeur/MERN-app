import { GET_CONTACT, GET_CONTACT_FAIL, GET_CONTACT_LOAD, GET_CONTACT_SUCC, TOGGLE_FALSE, TOGGLE_TRUE } from "../constante/contact"


const initialeState={

    contact:[],
    contactLoad:false,
    error:null,
    edit:false,
    user:{}


}
export const contactReducer=(state=initialeState,{type,payload})=>{
    switch (type) {
        case GET_CONTACT_LOAD: return {...state,contactLoad:true}
        case GET_CONTACT_SUCC:  return {...state,contact:payload,contactLoad:false}
        case GET_CONTACT_FAIL:  return{...state,contactLoad:false,error:payload}
        case TOGGLE_FALSE:  return{...state,edit:false}
        case TOGGLE_TRUE:  return{...state,edit:true}
        case GET_CONTACT:  return{...state,user:payload}
            
           
    
        default: return state
           
    }

}