import styled from "styled-components";
import { Layout, Icon } from 'antd'

const StyledLayout = styled(Layout)`
  height: 100%;
`;

const Logo = styled.div`
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
`;

const TriggerIcon = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;

  :hover {
    color: #1890ff;
  }
`;

export { StyledLayout, Logo, TriggerIcon };