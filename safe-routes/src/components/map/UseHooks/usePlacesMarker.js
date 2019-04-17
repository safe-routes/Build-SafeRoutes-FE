import { useState } from 'react';
export default () => {
  const [placeMarkers, setPlaceMarkers] = useState([]);
  const [activePlaceMarker, setActivePlaceMarker] = useState({});
  const labelStyle = {
    backgroundColor: '#131313',
    textAlign: 'center',
    opacity: '.8',
    fontSize: '12px',
    fontFamily: 'monospace',
    padding: '3px 6px',
    color: '#E4E4E4',
    borderRadius: '5px',
    textOverflow: 'eclipse',
    pointerEvents: 'none'
  };
  const setupPlaceMarkers = places => {
    // console.log(places);
    const newMarkers = [];
    for (let i = 0; i < places.length; i++) {
      const { formatted_address, id } = places[i];
      const { lat, lng } = places[i].geometry.location;
      newMarkers.push({
        formatted_address,
        id,
        labelStyle,
        position: {
          lat: lat(),
          lng: lng()
        }
      });
    }

    console.log(newMarkers);
    return newMarkers;
  };
  return {
    //functions
    setPlaceMarkers,
    setActivePlaceMarker,
    setupPlaceMarkers,
    //state
    placeMarkers,
    activePlaceMarker
  };
};
