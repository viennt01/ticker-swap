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
import { LoginData } from './fetcher';
import { ChangeEvent, useState } from 'react';
const initialValues = {
  UserName: '',
  Password: '',
  PhoneNumber: '',
  FulName: '',
  Address: '',
};

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [notiApi, contextHolder] = notification.useNotification();
  const { Text, Title, Link } = Typography;
  const [dataImage, setDataImage] = useState<any>('');
  const onFinish = (values: LoginData) => {
    if (dataImage.size / 1024 / 1024 > 5) {
      notiApi.error({
        message: '',
        description: 'Vui lòng chọn ảnh có dung lượng nhỏ hơn 5MB',
        placement: 'topRight',
        duration: 3,
      });
      return;
    }
    const formdata = new FormData();
    formdata.append('File', dataImage);
    formdata.append('UserName', values.UserName);
    formdata.append('Password', values.Password);
    formdata.append('PhoneNumber', values.PhoneNumber);
    formdata.append('FulName', values.FulName);
    formdata.append('Address', values.Address);

    fetch('http://ticketswap.somee.com/api/User/Register', {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((res) => {
        console.log(res);

        if (res === '{"data":true,"status":true,"message":"Success"}') {
          notiApi.success({
            message: '',
            description: 'Đăng ký thành công',
            placement: 'topRight',
            duration: 3,
          });
          setIsLoading(false);
          router.push('/');
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setDataImage(file);
    }
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
                    <Text>Tạo tài khoản TickSwap ngay</Text>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Title italic level={3}>
                  coinmap
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
                    name="FulName"
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
                    name="PhoneNumber"
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
                    name="Address"
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
                    name="File"
                    // valuePropName="fileList"
                    // getValueFromEvent={normFile}
                    rules={[
                      { required: true, message: 'Please upload a file' },
                    ]}
                  >
                    <input type="file" onChange={handleChange} />
                  </Form.Item>
                  {/* <img src={imagePreview} alt="Thumb" /> */}
                  <Form.Item
                    name="UserName"
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
                    name="Password"
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
