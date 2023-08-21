import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
const onClick = ({ key }) => {
//   message.info(`Click on item ${key}`);
};
const items = [
  {
    label: 'News',
    key: '1',
  },
  {
    label: 'Testimonials',
    key: '2',
  },
  {
    label: 'Blog',
    key: '3',
  },
  {
    label: 'Videos',
    key: '4',
  },
  {
    label: 'Media Kit',
    key: '5',
  },
];
const Resources = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()} className='hover:text-indigo-700'>
      <Space>
        Resources
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Resources;