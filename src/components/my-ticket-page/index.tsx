import { formatCurrency } from '@/utils/format';
import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Card,
  List,
  Image,
  Spin,
} from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DataTicket, getListMyTicket } from './fetcher';
import { appLocalStorage } from '@/utils/localstorage';
export default function MyTicketPage() {
  const { Title, Text } = Typography;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataTicket[]>([]);
  const [idUser, setIdUser] = useState<any>();

  const fetchData = () => {
    console.log(idUser);

    getListMyTicket(idUser)
      .then((res) => {
        if (res.status) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log('err', err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
    setIdUser(appLocalStorage.get('idUser'));
  }, [idUser, router]);

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
                title: 'Quản lý đơn',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={3}>Danh sách vé của bạn</Title>
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
                      avatar={
                        <Image
                          alt="image"
                          width={272}
                          height={200}
                          src={`data:image/png;base64,${item.avatar}`}
                        />
                      }
                      title={<a href="https://ant.design">{item.ticketName}</a>}
                      description={item.status}
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
