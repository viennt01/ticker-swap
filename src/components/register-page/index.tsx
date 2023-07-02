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
const initialValues = {
  userName: '',
  password: '',
  phoneNumber: '',
  fulName: '',
  address: '',
  accountBankingNumber: '',
  bankingName: '',
};

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [notiApi, contextHolder] = notification.useNotification();
  const { Text, Title, Link } = Typography;
  const onFinish = (values: LoginData) => {
    const data = {
      userName: values.userName,
      password: values.password,
      phoneNumber: values.phoneNumber,
      fulName: values.fulName,
      address: values.address,
      accountBankingNumber: values.accountBankingNumber,
      bankingName: values.bankingName,
    };

    login(data)
      .then((res) => {
        console.log(res);

        if (res.message === 'Thành Công') {
          notiApi.success({
            message: '',
            description: 'Đăng ký thành công',
            placement: 'topRight',
            duration: 3,
          });
          setIsLoading(false);
          router.push('/login');
          return;
        }
        notiApi.error({
          message: '',
          description: 'Đăng ký thất bại',
          placement: 'topRight',
          duration: 3,
        });
        setIsLoading(false);
      })
      .catch(() => {
        notiApi.error({
          message: '',
          description: 'Đăng ký thất bại',
          placement: 'topRight',
          duration: 3,
        });
        setIsLoading(false);
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
          <Card style={{ height: '900px', width: '545px' }}>
            <Row style={{ marginBottom: '24px' }}>
              <Col span={16}>
                <Row>
                  <Col span={24}>
                    <Title level={3}>Đăng ký</Title>
                  </Col>
                  <Col span={24}>
                    <Text>Tạo tài khoản TicketSwap ngay</Text>
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
                    name="fulName"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập họ và tên của bạn!',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Nhập số họ và tên của bạn"
                    />
                  </Form.Item>

                  <Form.Item
                    name="phoneNumber"
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
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập địa chỉ của bạn!',
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Nhập địa chỉ của bạn" />
                  </Form.Item>
                  <Form.Item
                    name="bankingName"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tên ngân hàng của bạn!',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Nhập tên ngân hàng của bạn"
                    />
                  </Form.Item>
                  <Form.Item
                    name="accountBankingNumber"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập số tài khoản của bạn!',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Nhập số tài khoản của bạn"
                    />
                  </Form.Item>

                  <Form.Item
                    name="userName"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tên đăng nhập của bạn!',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Nhập tên đăng nhập của bạn"
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
