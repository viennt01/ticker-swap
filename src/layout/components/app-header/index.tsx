import React, { useState } from 'react';
import { Col, Layout, Row, Image, Button, TreeSelect, Typography } from 'antd';
import style from './index.module.scss';
import {
  HomeOutlined,
  ContainerOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  CommentOutlined,
  BellOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
const { Text } = Typography;
const treeData = [
  {
    value: 'Lật mặt',
    title: <Text style={{ width: '100%' }}>Lật mặt</Text>,
  },
  {
    value: 'Nhà bà nữ',
    title: 'Nhà bà nữ',
  },
  {
    value: 'Nghề siêu dễ',
    title: 'Nghề siêu dễ',
  },
  {
    value: 'Mắt biếc',
    title: 'Mắt biếc',
  },
];
const AppHeader = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <Header className={style.appHeader}>
      <Row>
        <Col span={24} className={style.headerFirst}>
          <Row>
            <Col span={4} className={style.logo}>
              <Image
                preview={false}
                style={{ cursor: 'pointer', width: '75px', height: '53px' }}
                src="/images/logo.png"
                // onClick={() => router.push(ROUTERS.HOME)}
                alt="logo"
              />
            </Col>
            <Col span={20} className={style.menu}>
              <Row>
                <Col span={4}>
                  <Button
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#E8CA2B',
                      border: 'none',
                    }}
                  >
                    <HomeOutlined />
                    Trang chủ
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#E8CA2B',
                      border: 'none',
                    }}
                  >
                    <ContainerOutlined />
                    Quản lý đơn
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#E8CA2B',
                      border: 'none',
                    }}
                  >
                    <ShoppingCartOutlined />
                    Đơn hàng
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#E8CA2B',
                      border: 'none',
                    }}
                  >
                    <CommentOutlined />
                    Chat
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#E8CA2B',
                      border: 'none',
                    }}
                  >
                    <BellOutlined />
                    Thông báo
                  </Button>
                </Col>
                <Col span={4} style={{ backgroundColor: '#E8CA2B' }}>
                  <Button
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#E8CA2B',
                      border: 'none',
                    }}
                  >
                    <UserOutlined />
                    Tài khoản
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24} className={style.headerSecond}>
          <Row>
            <Col span={20}>
              <TreeSelect
                showSearch
                style={{
                  width: '100%',
                  border: '1px solid',
                  borderRadius: '9px',
                }}
                value={value}
                placeholder="Tìm kiếm trên TickSwap"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
                treeData={treeData}
                size="large"
              />
            </Col>
            <Col span={4}>
              <Button
                size="large"
                style={{
                  border: '1px solid',
                  borderRadius: '8px solid',
                  backgroundColor: '#E8CA2B',
                  marginLeft: '32px',
                }}
              >
                <CalendarOutlined />
                ĐĂNG TIN
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
