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
import { API_MESSAGE } from '@/constant/message';
import { headers } from '@/fetcher/utils';
import { useState } from 'react';
const initialValues: LoginData = {
  username: '',
  password: '',
};

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [notiApi, contextHolder] = notification.useNotification();
  const { Text, Title, Link } = Typography;

  const onFinish = (values: LoginData) => {
    appLocalStorage.set(LOCAL_STORAGE_KEYS.TOKEN, '123');
    router.push('/');
    return;
    setIsLoading(true);
    const data = {
      username: values.username,
      password: values.password,
    };
    login(data)
      .then((res) => {
        if (res.status) {
          headers.setToken(res.data.accessToken);
          appLocalStorage.set(LOCAL_STORAGE_KEYS.TOKEN, res.data.accessToken);
          router.push(ROUTERS.HOME);
          setIsLoading(false);
          return;
        } else {
          notiApi.error({
            message: '',
            description: res.message,
            placement: 'topRight',
            duration: 3,
          });
          setIsLoading(false);
          return;
        }
      })
      .catch((err) => {
        const res = JSON.parse(err.message);
        if (!res.error_code) {
          notiApi.error({
            message: '',
            description: res.message,
            placement: 'topRight',
            duration: 3,
          });
          setIsLoading(false);
          return;
        } else {
          notiApi.error({
            message: '',
            description: API_MESSAGE.ERROR,
            placement: 'topRight',
            duration: 3,
          });
          setIsLoading(false);
        }
      });
  };

  const handleChangePage = () => {
    router.push('/login');
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
                title: 'Đăng ký',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ height: '620px', width: '545px' }}>
            <Row style={{ marginBottom: '24px' }}>
              <Col span={16}>
                <Row>
                  <Col span={24}>
                    <Title level={3}>Đăng ký</Title>
                  </Col>
                  <Col span={24}>
                    <Text>Tạo tài khoản TickSwap ngay</Text>
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
                    name="username"
                    rules={[
                      { required: true, message: 'Vui lòng nhập tên của bạn!' },
                    ]}
                  >
                    <Input size="large" placeholder="Nhập tên của bạn" />
                  </Form.Item>

                  <Form.Item
                    name="numberPhone"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập số điện thoại của bạn!',
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
                        message: 'Vui lòng nhập mật khẩu của bạn!',
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
                      Đăng ký
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
                  // padding: '0px 16px',
                }}
              >
                Bằng việc Đăng ký, bạn đã đồng ý
                <Link
                  href="https://ant.design"
                  target="_blank"
                  style={{
                    margin: '0 4px',
                  }}
                >
                  Điều khoản sử dụng
                </Link>{' '}
                của TickSwap
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
                  Đăng nhập
                </Link>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
