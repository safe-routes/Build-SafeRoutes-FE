import { useState } from 'react';
import uuidv4 from 'uuidv4';
export default () => {
  const [markers, setMarkers] = useState([]);
  const [activeMarker, setActiveMarker] = useState({});
  const setInitialMarkers = markers => {
    return setMarkers(
      markers.map(mark => {
        return {
          draggable: false,
          id: uuidv4(),
          position: {
            lat: mark['LATITUDE'],
            lng: mark['LONGITUD']
          }
        };
      })
    );
  }; //setInitialMarkers

  return {
    //functions
    setMarkers,
    setInitialMarkers,
    setActiveMarker,
    //state
    markers,
    activeMarker
  };
};
