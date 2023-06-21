import React, { useEffect, useState } from 'react';
import {
  Col,
  Layout,
  Row,
  Image,
  Button,
  TreeSelect,
  Typography,
  Dropdown,
} from 'antd';
import style from './index.module.scss';
import {
  HomeOutlined,
  ContainerOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  CommentOutlined,
  BellOutlined,
  CalendarOutlined,
  LogoutOutlined,
  LoginOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { appLocalStorage } from '@/utils/localstorage';
import { DataTicket, getListTicket } from './fetcher';

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>();
  const [idUser, setIdUser] = useState<string>();
  const [data, setData] = useState<DataTicket[]>([]);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  const treeData = [
    data.map((data) => {
      return {
        value: data.ticketId,
        title: (
          <Text onClick={() => changePage(`/ticker-film/${data.ticketId}`)}>
            {data.ticketName}
          </Text>
        ),
      };
    }),
  ];
  const changePage = (id: string) => {
    router.push(id);
  };
  const fetchDataListTicket = () => {
    getListTicket()
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchDataListTicket();
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };
  const handleLogin = () => {
    router.push('/login');
  };
  const handleRegister = () => {
    router.push('/register');
  };

  const handleHome = () => {
    router.push('/');
  };
  const handleChangePagePost = () => {
    router.push('/post-ticket');
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={handleLogout}>
          <LogoutOutlined
            style={{ fontSize: '16px', color: 'red', marginRight: '8px' }}
          />{' '}
          <Text type="danger">Đăng xuất</Text>
        </div>
      ),
    },
  ];
  useEffect(() => {
    setIdUser(appLocalStorage.get('idUser'));
  }, [idUser, router]);

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
                onClick={() => handleHome()}
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
                    onClick={() => handleHome()}
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
                {idUser ? (
                  <>
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
                      <Dropdown menu={{ items }} placement="bottomRight" arrow>
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
                      </Dropdown>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col span={4}>
                      <Button
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#E8CA2B',
                          border: 'none',
                        }}
                        onClick={handleLogin}
                      >
                        <LoginOutlined />
                        Đăng Nhập
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
                        onClick={handleRegister}
                      >
                        <ContactsOutlined />
                        Đăng ký
                      </Button>
                    </Col>
                  </>
                )}
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
                onClick={handleChangePagePost}
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
