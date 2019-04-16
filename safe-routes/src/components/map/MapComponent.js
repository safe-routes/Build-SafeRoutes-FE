import React, { useState, useEffect, useContext } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

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
  return (
    <GoogleMap
      defaultZoom={6}
      onClick={e => {
        console.log(e.latLng.lat(), e.latLng.lng());
      }}
      defaultCenter={{ lat: 36.93, lng: -119.953 }}
    >
      {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />} */}
    </GoogleMap>
  );
});
export default MapComponent;
