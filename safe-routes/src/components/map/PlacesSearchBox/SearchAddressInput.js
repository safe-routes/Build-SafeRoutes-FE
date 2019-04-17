import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
const SearchAddressInput = ({ setIsAdvanceSearchOpen }) => {
  return (
    <div>
      <Input type="text" placeholder="Enter an address" />
      <Button
        onClick={() => {
          setIsAdvanceSearchOpen(true);
        }}
      >
        Advance Search
      </Button>
    </div>
  );
};

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid transparent;
  width: 240px;
  height: 32px;
  margin-top: 27px;
  padding: 0 12px;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  outline: none;
  text-overflow: ellipses;
`;
export default SearchAddressInput;
