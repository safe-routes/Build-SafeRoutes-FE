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
import axios from 'axios';
import qs from 'qs';
const { MonthPicker, RangePicker } = DatePicker;

const Option = Select.Option;
const CustomDrawer = styled(Drawer)`
  line-height: 1;
  .ant-col {
    margin: 0;
  }
`;
const SearchDrawer = ({
  form,
  setIsVisible,
  isVisible,
  setMarkers,
  setPredictInfo
}) => {
  const { getFieldDecorator } = form;
  const [moreOptionsToggled, setMoreOptionsToggled] = useState(false);
  const [isWorkzone, setIsWorkzone] = useState(false);
  const [county, setCounty] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [weather, setWeather] = useState();
  const [lgt, setLgt] = useState();
  const monthChange = (date, dateString) => {
    setMonth(date.format('MMMM'));
  };
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      console.log();
      if (!moreOptionsToggled) {
        try {
          console.log(county.split(' ').join('%20'));
          const { data } = await axios({
            method: 'post',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: 'https://www.getsaferoutes.com/crashData.php',
            data: county.split(' ').join('%20')
          });
          console.log(data);
          setPredictInfo({
            county,
            prediction: data.prediction
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        const bodyData = {};
        if (weather) {
          bodyData.weather = weather;
        }
        if (month) {
          bodyData.month = month;
        }
        if (day) {
          bodyData.day = day;
        }
        if (lgt) {
          bodyData.lgt = lgt;
        }
        if (isWorkzone === true || isWorkzone === false) {
          const value = isWorkzone ? 1 : 0;
          bodyData.isWorkZone = value;
        }
        try {
          const prepend = `${county}&${qs.stringify(bodyData)}`;
          console.log(prepend);
          const { data } = await axios({
            method: 'post',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: 'https://www.getsaferoutes.com/crashData.php',
            data: prepend,
            timeout: 1000 * 10
          });
          setPredictInfo({
            county,
            ...data
          });
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      } // else
      console.log(county);
      const { data: markersData } = await axios({
        method: 'get',
        baseURL: `https://saferoutes-4-12.herokuapp.com/api/accidents/${county}`
      });
      setMarkers(markersData);
      console.log(markersData);
    });
  };

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
              onChange={setCounty}
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
                rules: [
                  {
                    type: 'object',
                    required: moreOptionsToggled ? true : false
                  }
                ]
              })(<MonthPicker onChange={monthChange} />)}
            </Form.Item>
            <Form.Item label="Select Day">
              {getFieldDecorator('day-picker', {
                rules: [
                  { required: moreOptionsToggled ? true : false, message: '' }
                ]
              })(
                <Select showSearch placeholder="Select a Day" onChange={setDay}>
                  {days.map(day => {
                    return (
                      <Option value={day.toUpperCase()} key={day}>
                        {day}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Select Weather Condition">
              {getFieldDecorator('weather-picker', {
                rules: [
                  { required: moreOptionsToggled ? true : false, message: '' }
                ]
              })(
                <Select
                  showSearch
                  placeholder="Select Condition"
                  onChange={setWeather}
                >
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
                rules: [
                  { required: moreOptionsToggled ? true : false, message: '' }
                ]
              })(
                <Select
                  showSearch
                  placeholder="Select Condition"
                  onChange={setLgt}
                >
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
