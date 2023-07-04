import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataTicket, getListTicket } from './fetcher';
import { formatDateTime } from '@/utils/format';

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
      align: 'center',
    },
    {
      title: 'Ngày đăng',
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
