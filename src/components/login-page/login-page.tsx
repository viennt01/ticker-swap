import { LOCAL_STORAGE_KEYS } from '@/constant/localstorage';
import { ROUTERS } from '@/constant/router';
import { appLocalStorage } from '@/utils/localstorage';
import { useRouter } from 'next/router';
import {
  Button,
  Form,
  Input,
  notification,
  Card,
  Row,
  Col,
  Typography,
  Breadcrumb,
} from 'antd';
import {
  FacebookOutlined,
  GoogleOutlined,
  AppleOutlined,
} from '@ant-design/icons';
import { LoginData, login } from './fetcher';
import { useState } from 'react';
const initialValues: LoginData = {
  userName: '',
  password: '',
};

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [notiApi, contextHolder] = notification.useNotification();
  const { Text, Title, Link } = Typography;

  const onFinish = (values: LoginData) => {
    // appLocalStorage.set(LOCAL_STORAGE_KEYS.TOKEN, '123');
    // router.push('/');
    // return;
    setIsLoading(true);
    const data = {
      userName: values.userName,
      password: values.password,
    };
    console.log(data);

    login(data)
      .then((res) => {
        if (res.message === 'Success') {
          console.log(res);

          appLocalStorage.set(LOCAL_STORAGE_KEYS.TOKEN, res.data.roleId);
          appLocalStorage.set(LOCAL_STORAGE_KEYS.USER_ID, res.data.userId);
          router.push(ROUTERS.HOME);
          setIsLoading(false);
          return;
        } else {
          notiApi.error({
            message: '',
            description: 'Đăng nhập không thành công',
            placement: 'topRight',
            duration: 3,
          });
          setIsLoading(false);
          return;
        }
      })
      .catch(() => {
        notiApi.error({
          message: '',
          description: 'Đăng nhập không thành công',
          placement: 'topRight',
          duration: 3,
        });
        setIsLoading(false);
      });
  };

  const handleChangePage = () => {
    router.push('/register');
  };

  const changePageHome = () => {
    router.push('/');
  };

  return (
    <>
      {contextHolder}
      <Row>
        <Col span={24} style={{ marginBottom: '24px' }}>
          <Breadcrumb
            separator="->"
            items={[
              {
                title: <a onClick={changePageHome}>Trang chủ</a>,
              },
              {
                title: 'Đăng nhập',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ height: '580px', width: '545px' }}>
            <Row style={{ marginBottom: '24px' }}>
              <Col span={16}>
                <Row>
                  <Col span={24}>
                    <Title level={3}>Đăng nhập</Title>
                  </Col>
                  <Col span={24}>
                    <Text>Chào bạn quay lại</Text>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Title italic level={3}>
                  TicketSwap
                </Title>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ padding: '32px' }}>
                <Form
                  wrapperCol={{ span: 24 }}
                  initialValues={initialValues}
                  onFinish={onFinish}
                  requiredMark={false}
                  autoComplete="off"
                >
                  <Form.Item
                    name="userName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your userName!',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Nhập mật khẩu của bạn"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      loading={isLoading}
                      type="primary"
                      style={{
                        height: '40px',
                        width: '100%',
                        fontSize: '18px',
                        color: '#000',
                        backgroundColor: '#E8CA2B',
                        boxShadow:
                          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                      }}
                      htmlType="submit"
                    >
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col
                span={24}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '16px',
                }}
              >
                <Link href="https://ant.design" target="_blank">
                  Bạn quên mật khẩu?
                </Link>
              </Col>
              <Col
                span={24}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '8px',
                }}
              >
                <Text>Hoặc sử dụng</Text>
              </Col>
              <Col
                span={24}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '16px',
                }}
              >
                <FacebookOutlined style={{ fontSize: '30px', margin: '8px' }} />
                <GoogleOutlined style={{ fontSize: '30px', margin: '8px' }} />
                <AppleOutlined style={{ fontSize: '30px', margin: '8px' }} />
              </Col>
              <Col
                span={24}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    marginRight: '4px',
                  }}
                >
                  Bạn chưa có tài khoản?
                </Text>{' '}
                <Link onClick={handleChangePage} target="_blank">
                  Đăng ký ngay
                </Link>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
