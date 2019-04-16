import React, { useState, useEffect, useContext } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { markerData } from './data/index';
import { useMarker } from './UseHooks/index';
const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_IS_DEV === 'true'
        ? ''
        : process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%'
        }}
        className="containerElement"
      />
    ),
    mapElement: <div style={{ height: '100%' }} className="mapElement" />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const {
    //functions
    setMarkers,
    setInitialMarkers,
    //state
    markers
  } = useMarker();
  useEffect(() => {
    setInitialMarkers(markerData);
  }, []);
  return (
    <GoogleMap
      defaultZoom={4}
      onClick={e => {
        console.log(e.latLng.lat(), e.latLng.lng());
      }}
      defaultCenter={{ lat: 36.93, lng: -119.953 }}
    >
      {markers.map(mark => {
        return <Marker key={mark.id} position={mark.position} />;
      })}
    </GoogleMap>
  );
});
export default MapComponent;
