import { formatCurrency, formatDateTime } from '@/utils/format';
import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Card,
  List,
  Spin,
  QRCode,
} from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DataTicket, getListMyTicketBuyer } from './fetcher';
import { appLocalStorage } from '@/utils/localstorage';
export default function MyTicketBuyerPage() {
  const { Title, Text } = Typography;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataTicket[]>([]);
  const [idUser, setIdUser] = useState<any>();

  const fetchData = async () => {
    const dataSend = {
      id: Number(idUser),
    };
    await getListMyTicketBuyer(dataSend)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('err', err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
    setIdUser(appLocalStorage.get('idUser'));
  }, [idUser, router, loading]);

  const changePageHome = () => {
    router.push('/');
  };

  return (
    <>
      <Row>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Breadcrumb
            separator="->"
            items={[
              {
                title: <a onClick={changePageHome}>Trang chủ</a>,
              },
              {
                title: 'Đơn hàng',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={3}>Danh sách vé của bạn đã mua</Title>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            {loading ? (
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Spin />
              </div>
            ) : (
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.ticketId}>
                    <List.Item.Meta
                      avatar={<QRCode value={item.ticketCode} />}
                      title={item.ticketName}
                      description={formatDateTime(
                        new Date(item.timeUse).getTime() as unknown as Date
                      )}
                    />
                    <Text strong type="danger">
                      {formatCurrency(item.price)}
                    </Text>
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}
