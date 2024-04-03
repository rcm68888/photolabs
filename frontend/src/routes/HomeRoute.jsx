import React, {useReducer, useState} from 'react';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import FavBadge from 'components/FavBadge';
import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const stateObject = photos.reduce((result, _, index) => {
    result[index + 1] = false;
    return result;
  }, {});
  console.log(stateObject);

  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case "FAVOURITE":
      return {...state, [action.id]: action.payload}
      default:
        return state;
    }
  },stateObject);

  const isFavPhotoExist = Object.values(state).includes(true);
  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      </TopNavigation>
      <PhotoList photos={props.photos} dispatch={dispatch} state={state} modalDispatch={props.modalDispatch} modalState={props.modalState}/>
    </div>
  );
};

export default HomeRoute;