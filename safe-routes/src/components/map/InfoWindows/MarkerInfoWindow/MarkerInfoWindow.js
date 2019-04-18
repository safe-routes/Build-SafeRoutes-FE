/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { InfoWindow } from 'react-google-maps';
import { Button, Card } from 'antd';

const MarkerInfoWindow = ({ activeMarker, setInfoWindowOpen }) => {
  const { lat, lng } = activeMarker.position;
  const { twayID, twayID2, county } = activeMarker;
  return (
    <InfoWindow
      position={activeMarker.position}
      onCloseClick={() => {
        setInfoWindowOpen(false);
      }}
      options={{
        pixelOffset: new google.maps.Size(0, -40),
        disableAutoPan: false
      }}
    >
      <>
        <ExitBtn
          type="danger"
          onClick={() => {
            setInfoWindowOpen(false);
          }}
        >
          Close
        </ExitBtn>
        <StyledCard
          bodyStyle={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0',
            marginTop: '32px'
          }}
        >
          <CardGrid>
            County: {county}
            <br />
            TwayID: {twayID}
            <br />
            {twayID2 ? `TwayID2: ${twayID2}` : ''}
          </CardGrid>
          <Button>Statistics</Button>
        </StyledCard>
      </>
    </InfoWindow>
  );
};
const StyledCard = styled(Card)`
  .ant-card-bordered {
    border: none;
  }
`;
const ExitBtn = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10000;
  border-top-left-radius: 0;
`;
const CardGrid = styled(Card.Grid)`
  width: 100%;
  margin: 0;
  .ant-card-grid:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
const StyledInfoWindow = styled(InfoWindow)`
  position: relative;
  margin: 0;
  min-width: 1000px;
`;
export default MarkerInfoWindow;
