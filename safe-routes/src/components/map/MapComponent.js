/* eslint-disable no-undef */
import React, { useState, useEffect, useContext, useRef } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { useMarker, usePlacesMarker } from './UseHooks/index';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import { markerData, placesData as mockPlacesData } from './data/index';
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';
import {
  SearchAddressInput,
  SelectionSearchModal,
  onPlacesChanged
} from './PlacesSearchBox/index';
import { notification } from 'antd';
import { centerMarkerLabel } from './helper-functions';
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
  //Map
  const mapRef = useRef(null);
  const [center, setCenter] = useState({ lat: 36.93, lng: -119.953 });
  const [zoom, setZoom] = useState(4);
  //Search
  const searchBoxRef = useRef(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [placesData, setPlacesData] = useState([]);
  const {
    //functions
    setMarkers,
    setInitialMarkers,
    //state
    markers
  } = useMarker();
  const {
    placeMarkers,
    setPlaceMarkers,
    setupPlaceMarkers
  } = usePlacesMarker();

  useEffect(() => {
    setInitialMarkers(markerData);
    //Just for styling and testing purposes
    setPlacesData(mockPlacesData);
  }, []);

  useEffect(() => {
    mapRef.current.panTo(center);
  }, [center]);

  return (
    <GoogleMap
      ref={ref => (mapRef.current = ref)}
      defaultZoom={zoom}
      zoom={zoom}
      onClick={e => {
        console.log(e.latLng.lat(), e.latLng.lng());
      }}
      defaultCenter={center}
    >
      <SearchBox
        ref={ref => (searchBoxRef.current = ref)}
        controlPosition={google.maps.ControlPosition.TOP_CENTER}
        onPlacesChanged={() => {
          const markers = setupPlaceMarkers(searchBoxRef.current.getPlaces());
          if (markers.length <= 0) {
            notification.error({
              message: 'Sorry your search input is invalid, please try again!'
            });
          } else if (markers.length === 1) {
            const { lat, lng } = markers[0].position;
            setZoom(7);
            setPlaceMarkers(markers);
            setCenter({ lat, lng });
          } else {
            setZoom(3);
            setPlaceMarkers(markers);
          }
        }}
      >
        <SearchAddressInput />
      </SearchBox>
      {/* <SelectionSearchModal
        isVisible={searchModalOpen}
        setIsVisible={setSearchModalOpen}
        places={placesData}
        setCenter={setCenter}
        setZoom={setZoom}
      /> */}
      {placeMarkers.map(mark => {
        return (
          <MarkerWithLabel
            key={mark.id}
            position={mark.position}
            labelStyle={mark.labelStyle}
            labelAnchor={
              new google.maps.Point(
                centerMarkerLabel(mark.formatted_address.length),
                20
              )
            }
          >
            <div>{mark.formatted_address}</div>
          </MarkerWithLabel>
        );
      })}

      {markers.map(mark => {
        return <Marker key={mark.id} position={mark.position} />;
      })}
    </GoogleMap>
  );
});
export default MapComponent;
