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
      onCancel={() => {
        setIsVisible(false);
      }}
      title="Search Selection List"
      footer={[
        <Button type="primary" onClick={() => setIsVisible(false)} key="exit">
          Done
        </Button>
      ]}
    >
      <List
        itemLayout="horizontal"
        dataSource={places}
        onClick={e => {
          const { lat, lng } = e.target.dataset;
          setCenter({ lat: Number(lat), lng: Number(lng) });
        }}
        renderItem={place => {
          const { id, formatted_address } = place;
          const { lat, lng } = place.geometry.location;
          return (
            <List.Item key={id} data-lat={lat()} data-lng={lng()}>
              {formatted_address}
            </List.Item>
          );
        }}
      />
    </Modal>
  );
};

export default SelectionSearchModal;
