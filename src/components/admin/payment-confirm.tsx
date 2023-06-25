import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { AllPayment, getListPaymentConfirm } from './fetcher';
import { formatDateTime } from '@/utils/format';

export default function CONFIRM_PAYMENT() {
  // const [notiApi, contextHolder] = notification.useNotification();

  const [data, setData] = useState<AllPayment[]>([]);
  const columns: ColumnsType<AllPayment> = [
    {
      title: 'Mã người dùng',
      dataIndex: 'userId',
      key: 'userId',
      align: 'center',
    },
    {
      title: 'Số tiền nộp',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
    },
    {
      title: 'Mã giao dịch',
      dataIndex: 'keyPayment',
      key: 'keyPayment',
      align: 'center',
    },
    {
      title: 'Thời gian',
      dataIndex: 'created',
      key: 'created',
      align: 'center',
      render: (value) => {
        return (
          <div>
            {formatDateTime(new Date(value || '').getTime() as unknown as Date)}
          </div>
        );
      },
    },
    {
      title: 'Trạng thái giao dịch',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (value) =>
        value === 'Chờ xử lí' ? (
          <Tag color="warning">{value}</Tag>
        ) : (
          <Tag color="#87d068">{value}</Tag>
        ),
    },
  ];

  const fetchDataListTicket = () => {
    getListPaymentConfirm()
      .then((res) => {
        console.log(res);
        setData(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchDataListTicket();
  }, []);
  return (
    <>
      {/* {contextHolder} */}
      <Table columns={columns} dataSource={data} />
    </>
  );
}
