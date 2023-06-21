import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataTicket, getListTicket } from './fetcher';

export default function ORDER() {
  // const [notiApi, contextHolder] = notification.useNotification();

  const [data, setData] = useState<DataTicket[]>([]);
  const columns: ColumnsType<DataTicket> = [
    {
      title: 'Tên vé',
      dataIndex: 'ticketName',
      key: 'ticketName',
    },
    {
      title: 'Tổng số tiền',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Số lượng',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Trạng thái vé',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'addressBuy',
      key: 'addressBuy',
    },
  ];

  const fetchDataListTicket = () => {
    getListTicket()
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
