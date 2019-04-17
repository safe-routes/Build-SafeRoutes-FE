/* eslint-disable no-undef */
import React, { useState, useEffect, useContext, useRef } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { markerData, placesData as mockPlacesData } from './data/index';
import { useMarker } from './UseHooks/index';
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';
import {
  SearchAddressInput,
  SelectionSearchModal
} from './PlacesSearchBox/index';
import { notification } from 'antd';
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
  const searchBoxRef = useRef(null);
  const mapRef = useRef(null);
  const [bounds, setBounds] = useState(null);
  const [center, setCenter] = useState({ lat: 36.93, lng: -119.953 });
  const [searchModalOpen, setSearchModalOpen] = useState(true);
  const [placesData, setPlacesData] = useState([]);
  const [zoom, setZoom] = useState(4);
  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    console.log(places);
    if (places.length === 0) {
      notification.error({
        message: 'No places could be found with that search input'
      });
    } else if (places.length === 1) {
      const { lat, lng } = places[0].geometry.location;
      setCenter({ lat: lat(), lng: lng() });
    } else {
      setPlacesData(places);
      setSearchModalOpen(true);
    }
  };

  useEffect(() => {
    setInitialMarkers(markerData);
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
        bounds={bounds}
        controlPosition={google.maps.ControlPosition.TOP_CENTER}
        onPlacesChanged={onPlacesChanged}
      >
        <SearchAddressInput />
      </SearchBox>
      <SelectionSearchModal
        isVisible={searchModalOpen}
        setIsVisible={setSearchModalOpen}
        places={placesData}
        setCenter={setCenter}
        setZoom={setZoom}
      />
      {markers.map(mark => {
        return <Marker key={mark.id} position={mark.position} />;
      })}
    </GoogleMap>
  );
});
export default MapComponent;
