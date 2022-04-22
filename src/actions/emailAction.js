import axios from "axios";
import { arrayDifference } from "../utils/helperFunctions";
import { GET_EMAILS,GET_EMAIl_CONTENT,GET_READ_EMAILS,DELETE_READ_MAIL } from "./types";

export const getAllEmails = () => (dispatch) => {
  return axios
    .get(`https://flipkart-email-mock.vercel.app/`)
    .then((result) => {
      console.log(`getAllEmails resultrrr`, result);
      dispatch({ type: GET_EMAILS, payload: result.data.list });
    //   return result.data.data;
    })
    .catch((err) => {
      console.log(`getAllEmails error`, err);
      return false;
    });
};
export const getEmailContent = (id,subject,date) => (dispatch) => {
  return axios
    .get(`https://flipkart-email-mock.now.sh/?id=${id}`)
    .then((result) => {
      let data= {...result?.data, ...{"subject":subject}}
    let  letnewData= {...data, ...{"date": date}}
      console.log(`getEmailContent resultrrr`, data);
      dispatch({ type: GET_EMAIl_CONTENT, payload: letnewData});
    //   return result.data.data;
    })
    .catch((err) => {
      console.log(`getEmailContent error`, err);
      return false;
    });
};
export const readMail = (data) => (dispatch) => {
  dispatch({ type: GET_READ_EMAILS, payload: data});
};
export const updateUnReadMail = (id) => (dispatch) => {

  dispatch({ type: DELETE_READ_MAIL, payload: id});

};
export const favEmail = () => (dispatch) => {
  
};
export const clearEmailContent = () => (dispatch) => {
    dispatch({ type: GET_EMAIl_CONTENT, payload: false });
};
