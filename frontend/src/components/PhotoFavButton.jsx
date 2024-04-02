import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);
  const handleClick = useCallback(()=>{
    setSelected(!selected);
  })
  return (
    <div className="photo-list__fav-icon">
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div> 
    </div>
  );
}

export default PhotoFavButton;