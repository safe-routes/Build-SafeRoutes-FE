import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

const Nav = props => {
  const [current, setCurrent] = useState('home');
  const logOut = () => {
    localStorage.clear();
    props.history.push('/');
  };

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={e => handleClick(e)}
      mode="horizontal"
      selectedKeys={[current]}
      defaultSelectedKeys={['home']}
    >
      <Menu.Item
        key="home"
        onClick={() => props.history.push('/account-landing')}
      >
        <Icon type="home" />
        Home
      </Menu.Item>
      <Menu.Item key="account" onClick={() => props.history.push('/account')}>
        <Icon type="setting" />
        Account
      </Menu.Item>
      <Menu.Item key="map" onClick={() => props.history.push('/map')}>
        <Icon type="dashboard" /> Map
      </Menu.Item>
      <Menu.Item key="groups" onClick={() => props.history.push('/groups')}>
        <Icon type="team" /> Groups
      </Menu.Item>
      {localStorage.getItem('token') ? (
        <Menu.Item onClick={() => logOut()}>
          <Icon type="poweroff" /> Log Out
        </Menu.Item>
      ) : (
        ''
      )}
    </Menu>
  );
};

export default withRouter(Nav);
