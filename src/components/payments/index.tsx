import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Card,
  Image,
  Button,
  notification,
  Steps,
  theme,
  message,
  InputNumber,
  Form,
} from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RequestPayment } from './fetcher';
import { appLocalStorage } from '@/utils/localstorage';

export default function PaymentPage() {
  const { Title, Text } = Typography;
  const router = useRouter();
  const [idUser, setIdUser] = useState<any>();
  const [notiApi, contextHolder] = notification.useNotification();
  const [codeTransaction, setCodeTransaction] = useState<string>('');

  const onFinishPrice = (values: any) => {
    const dataRequestPayment = {
      userId: idUser,
      price: values.Price,
    };
    RequestPayment(dataRequestPayment)
      .then((res) => {
        console.log(res);
        if (res.message === 'Thành Công') {
          setCodeTransaction(res.data);
          next();
          return;
        }
        notiApi.error({
          message: '',
          description: 'Yêu cầu nộp tiền thất bại',
          placement: 'topRight',
          duration: 3,
        });
      })
      .catch(() => {
        notiApi.error({
          message: '',
          description: 'Yêu cầu nộp tiền thất bại',
          placement: 'topRight',
          duration: 3,
        });
      });
  };
  const steps = [
    {
      title: 'Nhập số tiền bạn muốn nạp',
    },
    {
      title: 'Nộp tiền',
    },
    {
      title: 'Hoàn thành',
    },
  ];
  useEffect(() => {
    setIdUser(appLocalStorage.get('idUser'));
  }, [idUser, router]);

  const changePageHome = () => {
    router.push('/');
  };
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      {contextHolder}
      <Row>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Breadcrumb
            separator="->"
            items={[
              {
                title: <a onClick={changePageHome}>Trang chủ</a>,
              },
              {
                title: 'Nộp tiền',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={3}>Nộp tiền vào tài khoản</Title>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Form name="nest-messages" onFinish={onFinishPrice}>
            <Card>
              <Steps current={current} items={items} />
              <div style={contentStyle}>
                {steps[current].title === 'Nhập số tiền bạn muốn nạp' ? (
                  <>
                    <Form.Item
                      name={'Price'}
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập giá vé!!',
                        },
                      ]}
                    >
                      <InputNumber
                        size="large"
                        placeholder="Gía vé"
                        style={{ width: '200px', margin: '32px' }}
                        min={1}
                        formatter={(value) =>
                          `${value} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }
                      />
                    </Form.Item>
                  </>
                ) : steps[current].title === 'Nộp tiền' ? (
                  <>
                    <Row gutter={36} style={{ margin: '24px' }}>
                      <Col span={12}>
                        <Image src="/images/qr-code.jpg" alt="qr-code" />
                      </Col>
                      <Col span={12}>
                        <Row>
                          <Col span={24}>
                            <Title level={4}>Nộp tiền vào tài khoản</Title>
                          </Col>
                          <Col span={24}>
                            <Text strong>Số tài khoản: </Text>
                            <Text>9704 2292 5725 0766</Text>
                          </Col>
                          <Col span={24}>
                            <Text strong>Chủ tài khoản: </Text>
                            <Text>NGUYEN THANH VIEN</Text>
                          </Col>
                          <Col span={24}>
                            <Text strong>Nội dung chuyển khoản: </Text>
                            <Text>{codeTransaction}</Text>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </>
                ) : (
                  <>
                    <Title level={4} style={{ margin: '32px' }}>
                      Quí khách vui lòng chờ trong ít phút
                    </Title>
                  </>
                )}
              </div>
              <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: '66px', display: 'inline-block' }}
                    >
                      Next
                    </Button>
                  </Form.Item>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() =>
                      message.success('Vui lòng đợi tròng vòng vài phút!')
                    }
                  >
                    Done
                  </Button>
                )}
                {current > 0 && (
                  <Button onClick={() => prev()}>Previous</Button>
                )}
              </div>
            </Card>
          </Form>
        </Col>
      </Row>
    </>
  );
}
