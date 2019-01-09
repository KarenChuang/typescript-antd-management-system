import * as React from 'react';
import { List, message } from 'antd';

const listData: Array<{ id: number ,title: string }> = [
  {
    id: 1,
    title: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 2,
    title: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 3,
    title: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 4,
    title: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 5,
    title: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 6,
    title: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
];

interface IStates {
  listData: Array<{ id: number ,title: string }>,
  showHeader: boolean
}
class PageList extends React.Component<{}, IStates> {
  constructor(props: {}) {
    super(props)
    this.state = {
      listData,
      showHeader: false
    }
  }
  
  renderListItem = (item: { id: number, title: string }, index: number) => (
    <List.Item key={item.id}
      actions={[
        <a onClick={this.deleteItem.bind(this, item.id)} key={item.id}>delete</a>,
        <a key={item.id}>more</a>]}>
      {item.title}
    </List.Item>
  )

  deleteItem(id: number, e: MouseEvent) {
    this.setState({
      listData: this.state.listData.filter(item => item.id !== id)
    })
    message.success(`ID： ${id} has been deleted!`)
  }

  render() {
    return (
      <div>
      <List
          header={this.state.showHeader && <div>Header</div>}
          footer={<div>Footer</div>}
          bordered={true}
          dataSource={this.state.listData}
          renderItem={this.renderListItem}
        />
      </div>
    );
  }
}

export default PageList;
