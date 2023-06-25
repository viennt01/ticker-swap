import React, { useEffect, useState } from 'react';
import { Button, Table, Tag, notification } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  AllPayment,
  getListPaymentConfirm,
  postPaymentConfirm,
} from './fetcher';
import { formatDateTime } from '@/utils/format';
import { CheckOutlined } from '@ant-design/icons';
export default function CONFIRM_PAYMENT() {
  const [notiApi, contextHolder] = notification.useNotification();

  const [data, setData] = useState<AllPayment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    {
      dataIndex: ['userId', 'keyPayment'],
      key: 'status',
      align: 'center',
      render: (_, keyPayment) => (
        <Button
          icon={<CheckOutlined />}
          onClick={() => handleConfirm(_, keyPayment)}
          loading={isLoading}
        ></Button>
      ),
    },
  ];

  const handleConfirm = (_: any, keyPayment: AllPayment) => {
    setIsLoading(true);
    const dataPostPayment = {
      userId: keyPayment.userId,
      keyConfirm: keyPayment.keyPayment,
    };
    postPaymentConfirm(dataPostPayment)
      .then(() => {
        notiApi.success({
          message: '',
          description: 'Thành công',
          placement: 'topRight',
          duration: 3,
        });
        fetchDataListTicket();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        notiApi.error({
          message: '',
          description: 'Thất bại',
          placement: 'topRight',
          duration: 3,
        });
        setIsLoading(false);
      });
  };
  const fetchDataListTicket = () => {
    getListPaymentConfirm()
      .then((res) => {
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
      {contextHolder}
      <Table columns={columns} dataSource={data} />
    </>
  );
}
