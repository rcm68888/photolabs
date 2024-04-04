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
      case "GET_PHOTOS_BY_TOPIC":
        return {...state, topicID: action.payload}
      case "SET_TOPIC_PHOTOS":
        return {...state, topicPhotos: action.payload}
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
    Promise.all([
      fetch('/api/photos').then(res=>res.json()),
      fetch('/api/topics').then(res=>res.json())
    ])
    .then(([photos, topics])=>{
      dispatch({type:"SET_PHOTO_DATA", payload:photos});
      dispatch({type:"SET_TOPIC_DATA", payload:topics});
    })
  }, [])

  useEffect(()=>{
    if(state.topicID){
      fetch(`/api/topics/photos/${state.topicID}`)
    .then((res)=>{return res.json()})
    .then((res)=>{
      dispatch({type:"SET_PHOTOS_TOPIC", payload:res})
      dispatch({type:"SET_PHOTO_DATA", payload:res})})
    }
  }, [state.topicID]);

  return { state, dispatch }
}