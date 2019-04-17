import React, { useState } from 'react';
import {
  Drawer,
  Form,
  Icon,
  Input,
  Select,
  Checkbox,
  Button,
  DatePicker
} from 'antd';
import styled from 'styled-components';
import {
  counties,
  lgtConditionChoices,
  weatherChoices,
  days
} from './choicesData';
const { MonthPicker, RangePicker } = DatePicker;

const Option = Select.Option;
const CustomDrawer = styled(Drawer)`
  line-height: 1;
  .ant-col {
    margin: 0;
  }
`;
const SearchDrawer = ({ form, setIsVisible, isVisible }) => {
  const { getFieldDecorator } = form;
  const [moreOptionsToggled, setMoreOptionsToggled] = useState(false);
  const [isWorkzone, setIsWorkzone] = useState(false);
  const [county, setCounty] = useState();
  const selectChange = value => {
    setCounty(value);
    console.log(county);
  };
  const handleSubmit = () => {};
  return (
    <CustomDrawer
      title="Advance Search"
      closable={true}
      visible={isVisible}
      onClose={() => setIsVisible(false)}
    >
      <Form onSubmit={handleSubmit} className="advanced-search-form">
        <Form.Item label="Select County">
          {getFieldDecorator('county', {
            rules: [{ required: true, message: 'Please select a county!' }]
          })(
            <Select
              showSearch
              placeholder="Select a County"
              onChange={selectChange}
            >
              {counties.map(county => {
                return (
                  <Option key={county} value={county.toUpperCase()}>
                    {county}
                  </Option>
                );
              })}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('toggle-more', {})(
            <Checkbox
              onChange={e => {
                setMoreOptionsToggled(e.target.checked);
                console.log(e.target.checked);
              }}
            >
              Toggle More Options
            </Checkbox>
          )}
        </Form.Item>
        {moreOptionsToggled ? (
          <>
            <Form.Item label="Select Month">
              {getFieldDecorator('month-picker', {
                rules: [{ type: 'object', required: false }]
              })(<MonthPicker />)}
            </Form.Item>
            <Form.Item label="Select Day">
              {getFieldDecorator('day-picker', {
                rules: [{ required: false, message: '' }]
              })(
                <Select showSearch placeholder="Select a Day">
                  {days.map(day => {
                    return <Option value={day.toUpperCase()}>{day}</Option>;
                  })}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Select Weather Condition">
              {getFieldDecorator('weather-picker', {
                rules: [{ required: false, message: '' }]
              })(
                <Select showSearch placeholder="Select Condition">
                  {weatherChoices.map(weather => {
                    return (
                      <Option key={weather} value={weather.toUpperCase()}>
                        {weather}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Select LGT Condition">
              {getFieldDecorator('lgt-condition-picker', {
                rules: [{ required: false, message: '' }]
              })(
                <Select showSearch placeholder="Select Condition">
                  {lgtConditionChoices.map(lgt => {
                    return (
                      <Option key={lgt} value={lgt.toUpperCase()}>
                        {lgt}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('work-zone', {})(
                <Checkbox
                  onChange={e => {
                    setIsWorkzone(e.target.checked);
                  }}
                >
                  Workzone?
                </Checkbox>
              )}
            </Form.Item>
          </>
        ) : null}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    </CustomDrawer>
  );
};
const WrappedSearchDrawerForm = Form.create({ name: 'advance-search-form' })(
  SearchDrawer
);

export default WrappedSearchDrawerForm;
