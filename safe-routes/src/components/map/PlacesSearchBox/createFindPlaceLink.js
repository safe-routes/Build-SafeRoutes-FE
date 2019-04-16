export default searchText => {
  return `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?\
key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}\
&input=${searchText}\
&fields=geometry,formatted_address\
&inputtype=textquery`;
};
