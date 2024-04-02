import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <li  className="photo-list__item" >
      <img className="photo-list__image"  src={props.data.urls.regular} onClick={handleClick}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.data.user.profile}></img>
        <div className="photo-list__user-info">
          <p>{props.data.user.username}</p>
          <p className="photo-list__user-location">
            <span>{props.data.location.city}</span>, <span>{props.data.location.country}</span>
          </p>
        </div>
      </div>
    </li>
  )
};
export default PhotoListItem;