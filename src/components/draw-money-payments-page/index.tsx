import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Card,
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
import { RequestDrawMoneyPayment } from './fetcher';
import { appLocalStorage } from '@/utils/localstorage';

export default function DrawMoneyPaymentsPage() {
  const { Title } = Typography;
  const router = useRouter();
  const [idUser, setIdUser] = useState<any>();
  const [notiApi, contextHolder] = notification.useNotification();

  const onFinishPrice = (values: any) => {
    const dataRequestPayment = {
      userId: idUser,
      price: values.Price,
    };
    RequestDrawMoneyPayment(dataRequestPayment)
      .then((res) => {
        console.log(res);
        if (res.message === 'Thành Công') {
          next();
          return;
        }
        notiApi.error({
          message: '',
          description: res.message,
          placement: 'topRight',
          duration: 3,
        });
      })
      .catch(() => {
        notiApi.error({
          message: '',
          description: 'Yêu cầu rút tiền thất bại',
          placement: 'topRight',
          duration: 3,
        });
      });
  };
  const steps = [
    {
      title: 'Nhập số tiền bạn muốn rút',
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
                title: 'Rút tiền',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={3}>Rút tiền</Title>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Form name="nest-messages" onFinish={onFinishPrice}>
            <Card>
              <Steps current={current} items={items} />
              <div style={contentStyle}>
                {steps[current].title === 'Nhập số tiền bạn muốn rút' ? (
                  <>
                    <Form.Item
                      name={'Price'}
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập số tiền bạn muốn rút!!',
                        },
                      ]}
                    >
                      <InputNumber
                        size="large"
                        style={{ width: '200px', margin: '32px' }}
                        min={1}
                        formatter={(value) =>
                          `${value} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }
                      />
                    </Form.Item>
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
              </div>
            </Card>
          </Form>
        </Col>
      </Row>
    </>
  );
}
