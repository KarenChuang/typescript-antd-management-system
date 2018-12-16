import * as React from 'react';
import { StyledLayout, Logo, TriggerIcon } from './Styles'

import {
  Layout, Menu, Icon,
} from 'antd';

const {
  Header, Content, Sider,
} = Layout;
// const SubMenu = Menu.SubMenu;

class LayoutContainer extends React.Component {
    state = {
      collapsed: false,
    };

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    
    onCollapse = (collapsed: boolean) => {
      // console.log(collapsed);
      this.setState({ collapsed });
    }
    render() {
      return (
          <StyledLayout>
            <Sider
              trigger={null}
              collapsible={true}
              collapsed={this.state.collapsed}
            >
              <Logo />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
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
                Content
              </Content>
            </StyledLayout>
          </StyledLayout>
      );
    }
}
  
export default LayoutContainer;
  