import React from 'react';
import { Card, Col, Row, Typography, Image } from 'antd';
import { useRouter } from 'next/router';

export default function Category() {
  const router = useRouter();

  const handleChangePage = (id: string) => {
    router.push(id);
  };

  return (
    <div style={{ marginBottom: '64px', cursor: 'pointer' }}>
      <Card
        style={{
          width: '100%',
          borderRadius: '8px',
          boxShadow: ' 20px 20px 50px 15px grey',
        }}
      >
        <Typography.Title
          level={5}
          style={{
            marginBottom: '32px',
          }}
        >
          Khám phá danh mục
        </Typography.Title>
        <Row gutter={24}>
          <Col
            span={24}
            md={12}
            lg={6}
            onClick={() => handleChangePage('/ticker-film')}
            style={{
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '32px',
            }}
          >
            <Image
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iHz2yTD3DJi2xVGLQEhRF8xkpwqrpZbtOQ&usqp=CAU'
              }
              alt="cgv"
              preview={false}
              style={{
                borderRadius: '24px',
                marginBottom: '16px',
                display: 'block',
                height: '160px',
              }}
            />
            <Typography.Text
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Vé xem phim
            </Typography.Text>
          </Col>
          <Col
            span={24}
            md={12}
            lg={6}
            onClick={() => handleChangePage('/ticker-sport')}
            style={{
              display: 'grid',
              alignItems: 'center',
              marginBottom: '32px',
              justifyContent: 'center',
            }}
          >
            <Image
              src={
                'https://vff.org.vn/wp-content/uploads/2022/09/TICKET2-1.png'
              }
              alt="cgv"
              preview={false}
              style={{
                borderRadius: '24px',
                marginBottom: '16px',
                display: 'block',
                height: '160px',
              }}
            />
            <Typography.Text
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Vé thể thao
            </Typography.Text>
          </Col>
          <Col
            span={24}
            lg={6}
            md={12}
            onClick={() => handleChangePage('/ticker-travel')}
            style={{
              display: 'grid',
              alignItems: 'center',
              marginBottom: '32px',
              justifyContent: 'center',
            }}
          >
            <Image
              src={
                'https://sanvemaybay.vn/includes/uploads/2020/11/Kinh-nghi%E1%BB%87m-%C4%91%E1%BA%B7t-v%C3%A9-m%C3%A1y-bay-gi%C3%A1-r%E1%BA%BB.jpg'
              }
              alt="cgv"
              preview={false}
              style={{
                borderRadius: '24px',
                marginBottom: '16px',
                display: 'block',
                height: '160px',
              }}
            />
            <Typography.Text
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Vé phương tiện đi lại
            </Typography.Text>
          </Col>
          <Col
            span={24}
            md={12}
            lg={6}
            onClick={() => handleChangePage('/ticker-concert')}
            style={{
              display: 'grid',
              alignItems: 'center',
              marginBottom: '32px',
              justifyContent: 'center',
            }}
          >
            <Image
              src={
                'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/1/9/1136231/Amsterdam-7C.jpeg'
              }
              alt="cgv"
              preview={false}
              style={{
                borderRadius: '24px',
                marginBottom: '16px',
                display: 'block',
                height: '160px',
              }}
            />
            <Typography.Text
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Vé xem Concert/LiveShow
            </Typography.Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
