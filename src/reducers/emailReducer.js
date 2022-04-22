import { readMail } from "../actions/emailAction";
import { GET_EMAILS,GET_EMAIl_CONTENT,GET_READ_EMAILS,DELETE_READ_MAIL } from "../actions/types";
import { arrayDifference } from "../utils/helperFunctions";

const initialState = {
  all:false,
  activeEmailContent: false,
  readMail: [],
  unRead: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMAILS:
     
      return {
        ...state,
        all: action.payload,
        unRead:   arrayDifference(action.payload,state.readMail) 

      };
      case GET_EMAIl_CONTENT:
        return {
          ...state,
          activeEmailContent: action.payload,
        };

        case GET_READ_EMAILS:
          let newReadMail = state.readMail;
        return {
          ...state,
          readMail: [...newReadMail, action.payload],
        };

        case DELETE_READ_MAIL:
          let array= state.unRead
          state.unRead.forEach((item,key)=>{
            if(action.payload==item.id){
               array.splice(key, 1);
            }
          })
        return {
          ...state,
          unRead: array
        };
    default:
      return state;
  }
}
