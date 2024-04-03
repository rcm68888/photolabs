import React, {useState} from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displaymodal, setModal ] = useState(false);
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setModal={setModal} modal={displaymodal}/>
      {displaymodal && <PhotoDetailsModal setModal={setModal} modal={displaymodal} />}
    </div>
  );
};
export default App;