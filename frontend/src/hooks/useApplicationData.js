import { useReducer, useEffect } from "react";

export default function useApplicationData (){
   const initialState = {
     photoData: [],
     topicData: []
   }

  const [state, dispatch] = useReducer((state, action)=>{
    switch (action.type) {
      case "SET_PHOTO_DATA":
        return {...state, photoData: action.payload}
      case "SET_TOPIC_DATA": 
        return {...state, topicData: action.payload};
      case "updateToFavPhotoIds":
        return {...state, [action.id]: action.payload}
      case "setPhotoSelected": 
        return {...state, modalDisplay: action.payload.modalDisplay, modalId: action.payload.modalId};
      case "onClosePhotoDetailsModal":
        return {...state, modalDisplay: action.payload.modalDisplay, modalId: action.payload.modalId};  
      default:
          return state;
    }
  },{...initialState, modalId: 0, modalDisplay: false} );

  useEffect(()=>{
    fetch('http://localhost:8001/api/photos')
    .then((res)=>{return res.json()})
    .then((res)=>{
      dispatch({type:"SET_PHOTO_DATA", payload:res})})
    .catch (error) {
      console.error('An error occurred:', error);
  }, [])

  useEffect(()=>{
    fetch('http://localhost:8001/api/topics')
    .then((res)=>{return res.json()})
    .then((res)=>{
      dispatch({type:"SET_TOPIC_DATA", payload:res})})
    .catch (error) {
      console.error('An error occurred:', error);
  }, [])

  return { state, dispatch }
}