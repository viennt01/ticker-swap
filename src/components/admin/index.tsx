import React from 'react';
import { Tabs, TabsProps } from 'antd';
import ORDER from './order';
import USER from './user';
import PRODUCT from './product';
import ALL_PAYMENT from './all-payment';
import CONFIRM_PAYMENT from './payment-confirm';
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
    {
      key: '4',
      label: `Tất cả giao dịch`,
      children: <ALL_PAYMENT />,
    },
    {
      key: '5',
      label: `Giao dịch cần xử lý`,
      children: <CONFIRM_PAYMENT />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
}
