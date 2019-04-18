import { useState } from 'react';
import uuidv4 from 'uuidv4';
export default () => {
  const [markers, setMarkers] = useState([]);
  const [activeMarker, setActiveMarker] = useState({});
  const setInitialMarkers = markers => {
    return setMarkers(
      markers.map(mark => {
        return {
          draggable: false,
          id: uuidv4(),
          position: {
            lat: mark['LATITUDE'],
            lng: mark['LONGITUD']
          },
          county: mark['COUNTY'],
          twayID: mark['TWAY_ID'],
          twayID2:
            mark['TWAY_ID2'] !== 'NO SECOND STREET' ? mark['TWAY_ID2'] : null,
          year: mark['YEAR'],
          month: mark['MONTH'],
          day: mark['DAY'],
          dayWeek: mark['DAY_WEEK'],
          lgtCond: mark['LGT_COND'],
          weather: mark['WEATHER'],
          wrkZone: mark['WRK_ZONE'],
          fatals: mark['FATALS'],
          peds: mark['PEDS'],
          manColl: mark['ANGLED'],
          funcSys: mark['ARTERY'],
          typInt: mark['TYP_INT']
        };
      })
    );
  }; //setInitialMarkers

  return {
    //functions
    setMarkers,
    setInitialMarkers,
    setActiveMarker,
    //state
    markers,
    activeMarker
  };
};
