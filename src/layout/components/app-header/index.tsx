import React, { useEffect, useMemo, useState } from 'react';
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
  BellOutlined,
  CalendarOutlined,
  LogoutOutlined,
  LoginOutlined,
  ContactsOutlined,
  DesktopOutlined,
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
  const [role, setRole] = useState<string>('');

  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  const treeData = data.map((data) => {
    return {
      value: data.ticketName,
      title: (
        <Text onClick={() => changePage(`/ticker-film/${data.id}`)}>
          {data.ticketName}
        </Text>
      ),
    };
  });

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
  useMemo(() => {
    fetchDataListTicket();
  }, [idUser]);
  useEffect(() => {
    setRole(appLocalStorage.get('role'));
    // fetchDataListTicket();
  }, [idUser, router]);
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
  const handleChangePageMyTicket = () => {
    router.push('/my-ticket');
  };
  const handleChangePageAdmin = () => {
    router.push('/admin');
  };
  const handleChangePageMyTicketBuy = () => {
    router.push('/my-ticket-buyer');
  };
  const handleChangePageCart = () => {
    router.push('/cart');
  };
  const handleChangePageInformation = () => {
    router.push('/information');
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
    {
      key: '2',
      label: (
        <div onClick={handleChangePageInformation}>
          <UserOutlined style={{ fontSize: '16px', marginRight: '8px' }} />
          <Text>Thông tin cá nhân</Text>
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
                    onClick={() => handleChangePageMyTicket()}
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
                    onClick={() => handleChangePageMyTicketBuy()}
                  >
                    <ContainerOutlined />
                    Đơn của bạn đã mua
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
                    onClick={() => handleChangePageCart()}
                  >
                    <ShoppingCartOutlined />
                    Đơn hàng
                  </Button>
                </Col>
                {idUser ? (
                  <>
                    {role === '2' ? (
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
                    ) : (
                      <Col span={4}>
                        <Button
                          style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#E8CA2B',
                            border: 'none',
                          }}
                          onClick={() => handleChangePageAdmin()}
                        >
                          <DesktopOutlined />
                          Admin
                        </Button>
                      </Col>
                    )}

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
                placeholder="Tìm kiếm trên TicketSwap"
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
