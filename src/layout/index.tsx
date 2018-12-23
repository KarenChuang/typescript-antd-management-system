import * as React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StyledLayout, Logo, TriggerIcon } from './Styles'
import Dashboard from '../views/Dashboard'

import {
  Layout, Menu, Icon,
} from 'antd';

const {
  Header, Content, Sider,
} = Layout;

const routes = [
  {
    path: "/dashboard",
    exact: true,
    main: () => <Dashboard />
  },
  {
    path: "/list",
    main: () => <h2>list</h2>
  },
  {
    path: "/submit",
    main: () => <h2>submit</h2>
  }
];
class LayoutContainer extends React.Component {
  
    state = {
      collapsed: false
    };

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    
    onCollapse = (collapsed: boolean) => {
      this.setState({ collapsed });
    }

    render() {
      return (
        <Router>
          <StyledLayout>
            <Sider
              trigger={null}
              collapsible={true}
              collapsed={this.state.collapsed}
            >
              <Logo />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
                <Menu.Item key="dahboard">
                  <Link to="/dashboard">
                    <Icon type="user" />dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item key="list">
                  <Link to="/list">
                    <Icon type="video-camera" />list
                  </Link>
                </Menu.Item>
                <Menu.Item key="submit">
                  <Link to="/submit">
                    <Icon type="upload" />submit
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <StyledLayout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <TriggerIcon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                  />
              </Header>
              <Content style={{
                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
              }}
              >
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Switch>
              </Content>
            </StyledLayout>
          </StyledLayout>
        </Router>
      );
    }
}
  
export default LayoutContainer;
  