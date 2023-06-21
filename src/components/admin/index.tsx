import React from 'react';
import { Tabs, TabsProps } from 'antd';
import ORDER from './order';
import USER from './user';
import PRODUCT from './product';
export default function AdminPage() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tất cả vé`,
      children: <ORDER />,
    },
    {
      key: '2',
      label: `Vé đã bán`,
      children: <PRODUCT />,
    },
    {
      key: '3',
      label: `Người dùng`,
      children: <USER />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
}
