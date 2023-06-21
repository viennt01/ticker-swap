import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataUser, getListUser } from './fetcher';

export default function USER() {
  // const [notiApi, contextHolder] = notification.useNotification();

  const [data, setData] = useState<DataUser[]>([]);
  const columns: ColumnsType<DataUser> = [
    {
      title: 'Tên người dùng',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Role',
      dataIndex: 'roleId',
      key: 'roleId',
    },
    {
      title: 'Trạng thái người dùng',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const fetchDataListTicket = () => {
    getListUser()
      .then((res) => {
        console.log(res);
        setData(res.data.filter((data) => data.status === 1));
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
