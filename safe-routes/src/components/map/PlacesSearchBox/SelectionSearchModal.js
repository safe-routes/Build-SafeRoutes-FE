import React from 'react';
import { Modal, Button, List, Card } from 'antd';
import styled from 'styled-components';
const SelectionSearchModal = ({
  isVisible,
  setIsVisible,
  setCenter,
  places
}) => {
  return (
    <Modal
      visible={isVisible}
      title="Search Selection List"
      footer={[
        <Button type="danger" onClick={() => setIsVisible(false)} key="exit">
          Exit
        </Button>
      ]}
    >
      <List
        itemLayout="horizontal"
        dataSource={places}
        onClick={e => {
          // setIsVisible(false);
          console.log(e.target);
          const { lat, lng } = e.target.dataset;
          //   setIsVisible(false);
          setCenter({ lat: Number(lat), lng: Number(lng) });
        }}
        renderItem={place => {
          const { id, formatted_address } = place;
          const { lat, lng } = place.geometry.location;
          return (
            <PlaceListItem
              key={id}
              style={{ background: 'lightblue' }}
              data-lat={lat}
              data-lng={lng}
            >
              {formatted_address}
            </PlaceListItem>
          );
        }}
      />
    </Modal>
  );
};

const PlaceListItem = styled(List.Item)`
  &.ant-list-item:hover {
    background: 'lightblue';
  }
`;
export default SelectionSearchModal;
