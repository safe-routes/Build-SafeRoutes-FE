import { useState } from 'react';

export default () => {
  const [markers, setMarkers] = useState([]);

  return {
    //functions
    setMarkers,
    //state
    markers
  };
};
