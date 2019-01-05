import * as React from 'react';
import { List, Card } from 'antd';

const data: Array<{ title: string }> = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

class PageList extends React.Component {
  renderListItem = (item: { title: string }) => (
  <List.Item>
    <Card title={item.title}>Card content</Card>
  </List.Item>
  )

  render() {
    return (
      <div>
        <List
            grid={{
              gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
            }}
            dataSource={data}
            renderItem={this.renderListItem}
          />
      </div>
    );
  }
}

export default PageList;
