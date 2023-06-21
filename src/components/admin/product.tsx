import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataTicket, getListTicket } from './fetcher';

export default function PRODUCT() {
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
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    },
    {
      title: 'Trạng thái vé',
      dataIndex: 'status',
      key: 'status',
      render: (value) =>
        value !== 1 ? (
          <Tag color="#87d068">Đã bán</Tag>
        ) : (
          <Tag color="#f50">Còn hàng</Tag>
        ),
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
        setData(res.data.filter((data) => data.status === 0));
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
