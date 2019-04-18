/* eslint-disable no-undef */
import React from 'react';
import { InfoWindow } from 'react-google-maps';
import { Button } from 'antd';
const MarkerInfoWindow = ({ activeMarker, setMarkerInfoWindowOpen }) => {
  const { lat, lng } = activeMarker.position;
  return (
    <InfoWindow
      position={activeMarker.position}
      onCloseClick={() => {
        setMarkerInfoWindowOpen(false);
      }}
      options={{
        pixelOffset: new google.maps.Size(0, -60),
        disableAutoPan: false
      }}
    >
      <Button>Statistics</Button>
    </InfoWindow>
  );
};

export default MarkerInfoWindow;
