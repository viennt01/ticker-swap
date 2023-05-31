import { Breadcrumb, Col, Row, Typography, Avatar } from 'antd';
import Card from 'antd/es/card/Card';
import { useRouter } from 'next/router';
import React from 'react';

export default function TransactionPage() {
  const router = useRouter();
  const { Title } = Typography;
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
                title: 'Thanh toán',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={3}>Xác nhận đơn hàng</Title>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Row>
              <Col span={2}>
                <Avatar
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  size={64}
                />
              </Col>

              <Col span={18}>
                <Title level={5}>Thanh Vien</Title>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
