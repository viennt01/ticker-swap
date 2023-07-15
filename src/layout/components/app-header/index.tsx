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
  Menu,
  Drawer,
} from 'antd';
import style from './index.module.scss';
import {
  HomeOutlined,
  ContainerOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
  LogoutOutlined,
  LoginOutlined,
  ContactsOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  CreditCardOutlined,
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activePath, setActivePath] = useState('/');

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
    setShowMobileMenu(false);
    localStorage.clear();
    router.push('/login');
  };
  const handleLogin = () => {
    setShowMobileMenu(false);
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
    const pathname = router.pathname;
    setActivePath(pathname);
  }, [router]);
  useEffect(() => {
    setIdUser(appLocalStorage.get('idUser'));
  }, [idUser, router]);
  const menuItemAuthorized = [
    {
      key: '/',
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Trang chủ
          <HomeOutlined />
        </div>
      ),
    },
    {
      key: '/my-ticket',
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Quản lý đơn
          <ContainerOutlined />
        </div>
      ),
    },
    {
      key: '/my-ticket-buyer',
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Đơn của bạn đã mua
          <ContainerOutlined />
        </div>
      ),
    },
    {
      key: '/cart',
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Đơn hàng
          <ShoppingCartOutlined />
        </div>
      ),
    },
    {
      key: '/information',
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Tài khoản
          <UserOutlined />
        </div>
      ),
    },
  ];
  const menuItemAdmin = [
    {
      key: '/admin',
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Admin
          <DesktopOutlined />
        </div>
      ),
    },
  ];
  const menuItemNoLogin = [
    {
      key: '/login',
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Đăng nhập
          <LoginOutlined />
        </div>
      ),
    },
    {
      key: '/register',
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Đăng ký
          <ContactsOutlined />
        </div>
      ),
    },
  ];

  const handleMenu = () => {
    if (role === '2') {
      return menuItemAuthorized;
    } else if (role === '1') {
      return menuItemAdmin;
    } else {
      return menuItemNoLogin;
    }
  };

  const handleClickMenu: MenuProps['onClick'] = (e) => {
    switch (e.key) {
      case '#': {
        break;
      }
      default: {
        router.push(e.key);
        setShowMobileMenu(false);
      }
    }
  };
  return (
    <Header className={style.appHeader}>
      <Col span={24} className={style.headerFirst}>
        <div className={style.logo}>
          <Image
            preview={false}
            style={{ cursor: 'pointer', width: '75px', height: '53px' }}
            src="/images/logo.png"
            onClick={() => handleHome()}
            alt="logo"
          />
        </div>
        <div className={style.menu}>
          <div style={{ display: 'flex' }}>
            <div style={{ display: role === '1' ? 'none' : 'block' }}>
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
            </div>
            <div style={{ display: role === '2' ? 'block' : 'none' }}>
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
                Quản lý đơn bán
              </Button>
            </div>
            <div style={{ display: role === '2' ? 'block' : 'none' }}>
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
                Quản lý đơn mua
              </Button>
            </div>
            <div style={{ display: role === '2' ? 'block' : 'none' }}>
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
            </div>
            {idUser ? (
              <>
                {role === '2' ? (
                  <div style={{ display: role === '2' ? 'block' : 'none' }}>
                    <Button
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#E8CA2B',
                        border: 'none',
                      }}
                      onClick={() => router.push('/draw-money-payments')}
                    >
                      <CreditCardOutlined />
                      Rút tiền
                    </Button>
                  </div>
                ) : (
                  <div>
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
                  </div>
                )}

                <div style={{ backgroundColor: '#E8CA2B' }}>
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
                </div>
              </>
            ) : (
              <>
                <div>
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
                </div>
                <div style={{ backgroundColor: '#E8CA2B' }}>
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
                </div>
              </>
            )}
          </div>
        </div>
        <MenuFoldOutlined
          className={style.menuButton}
          onClick={() => setShowMobileMenu(true)}
        />
        <Drawer
          className={style.mobileMenuWrapper}
          title={
            <div className={style.mobileMenuTitle}>
              <Image
                preview={false}
                style={{ cursor: 'pointer', width: '75px', height: '40px' }}
                src="/images/logo.png"
                onClick={() => handleHome()}
                alt="logo"
              />
            </div>
          }
          closeIcon={null}
          placement="right"
          zIndex={99999}
          onClose={() => setShowMobileMenu(false)}
          open={showMobileMenu}
        >
          <Row
            style={{
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Col flex={1}>
              <Menu
                className={style.mobileMenu}
                mode="vertical"
                selectedKeys={[activePath]}
                items={handleMenu()}
                onClick={handleClickMenu}
              />
            </Col>
            <Col
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {idUser ? (
                <Button
                  className={style.logoutButton}
                  onClick={handleLogout}
                  style={{ backgroundColor: '#FF5757' }}
                >
                  Đăng xuất
                </Button>
              ) : (
                <>
                  <Button
                    className={style.loginButton}
                    onClick={handleLogin}
                    style={{ backgroundColor: '#2F80ED' }}
                  >
                    Đăng nhập
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Drawer>
      </Col>

      <div className={style.headerSecond}>
        <div className={style.search}>
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
        </div>
        <div className={style.buttonPost}>
          <Button
            size="large"
            style={{
              border: '1px solid',
              borderRadius: '8px solid',
              backgroundColor: '#E8CA2B',
            }}
            onClick={handleChangePagePost}
          >
            <CalendarOutlined />
            <div className={style.nameButton}>ĐĂNG TIN</div>
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
