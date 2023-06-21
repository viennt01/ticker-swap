import { formatCurrency } from '@/utils/format';
import { Breadcrumb, Col, Row, Typography, Card, List, Image } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
export default function MyTicketPage() {
  const { Title, Text } = Typography;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo'
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

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
                title: 'Đơn hàng của tôi',
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
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Image alt="image" src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={'Đã bán'}
                  />
                  <Text strong type="danger">
                    {formatCurrency(1000000)}
                  </Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
