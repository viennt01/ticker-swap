import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataUser, getListUser } from './fetcher';

export default function USER() {
  // const [notiApi, contextHolder] = notification.useNotification();

  const [data, setData] = useState<DataUser[]>([]);
  const columns: ColumnsType<DataUser> = [
    {
      title: 'Tên người dùng',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Role',
      dataIndex: 'roleId',
      align: 'center',
      key: 'roleId',
      render: (value) => (value === 1 ? <div>Admin</div> : <div>User</div>),
    },
    {
      title: 'Trạng thái người dùng',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (value) =>
        value === 'Đang sử dụng' ? (
          <Tag color="#87d068">{value}</Tag>
        ) : (
          <Tag color="#f50">{value}</Tag>
        ),
    },
  ];

  const fetchDataListTicket = () => {
    getListUser()
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
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 'max-content',
        }}
      />
    </>
  );
}
