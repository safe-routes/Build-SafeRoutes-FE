export default (
  searchBoxRef,
  notification,
  setCenter,
  setPlacesData,
  setSearchModalOpen,
  setZoom
) => {
  const places = searchBoxRef.current.getPlaces();
  // console.log(places);
  setZoom(7);
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
