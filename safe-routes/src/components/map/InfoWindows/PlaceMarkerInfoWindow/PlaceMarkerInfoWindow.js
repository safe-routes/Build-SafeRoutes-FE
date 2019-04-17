/* eslint-disable no-undef */
import React from 'react';
import { InfoWindow } from 'react-google-maps';
import { Button } from 'antd';
const PlaceMarkerInfoWindow = ({
  activeMarker,
  setCenter,
  setZoom,
  setInfoWindowOpen
}) => {
  const { lat, lng } = activeMarker.position;
  return (
    <InfoWindow
      position={activeMarker.position}
      options={{
        pixelOffset: new google.maps.Size(0, -40),
        disableAutoPan: false
      }}
    >
      <Button
        type="primary"
        onClick={() => {
          setCenter({ lat, lng });
          setZoom(7);
          setInfoWindowOpen(false);
        }}
      >
        Go Here
      </Button>
    </InfoWindow>
  );
};

export default PlaceMarkerInfoWindow;
