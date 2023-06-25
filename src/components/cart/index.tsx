import { formatCurrency } from '@/utils/format';
import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Card,
  List,
  Image,
  Spin,
  Button,
  notification,
  Input,
} from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  DataTicket,
  buyTicket,
  deleteItemCart,
  getListTicketByCart,
} from './fetcher';
import { appLocalStorage } from '@/utils/localstorage';
import { STATUS_CODE } from '@/constant/error-code';
import { DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
export default function CartPage() {
  const { Title, Text } = Typography;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataTicket[]>([]);
  const [idUser, setIdUser] = useState<any>();
  const [notiApi, contextHolder] = notification.useNotification();
  const { TextArea } = Input;
  const fetchData = () => {
    const dataCart = {
      id: Number(idUser),
    };
    getListTicketByCart(dataCart)
      .then((res) => {
        if (res.message === STATUS_CODE.SUCCESS) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log('err', err);
        setLoading(false);
      });
  };
  const remove = (ticketId: number) => {
    const dataCart = {
      userId: Number(idUser),
      ticketId,
    };
    deleteItemCart(dataCart)
      .then((res) => {
        if (res.message === 'Thành công') {
          notiApi.success({
            message: '',
            description: 'Xoá thành công',
            placement: 'topRight',
            duration: 3,
          });
          fetchData();
          return;
        }
        notiApi.error({
          message: '',
          description: 'Xoá thất bại',
          placement: 'topRight',
          duration: 3,
        });
      })
      .catch(() => {
        notiApi.error({
          message: '',
          description: 'Xoá thất bại',
          placement: 'topRight',
          duration: 3,
        });
      });
  };
  useEffect(() => {
    fetchData();
    setIdUser(appLocalStorage.get('idUser'));
  }, [idUser, router]);

  const changePageHome = () => {
    router.push('/');
  };
  const dataTransaction = [
    {
      id: 1,
      avatarUrl:
        'https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Atm-512.png',
      name: 'Chuyển khoản qua ngân hàng',
    },
  ];
  const handleBuyTicket = () => {
    const dataTicket = {
      id: Number(idUser),
    };
    buyTicket(dataTicket)
      .then((res) => {
        console.log(res);
        if (res.message === 'Thành công') {
          notiApi.success({
            message: '',
            description: 'Mua thành công',
            placement: 'topRight',
            duration: 3,
          });
          fetchData();
          router.push('/my-ticket-buyer');
          return;
        }
        notiApi.error({
          message: '',
          description: 'Mua thất bại',
          placement: 'topRight',
          duration: 3,
        });
      })
      .catch(() => {
        notiApi.error({
          message: '',
          description: 'Vui lòng nạp thêm tiền',
          placement: 'topRight',
          duration: 3,
        });
        router.push('/payments');
      });
  };
  function calculateTotalPrice(data: any) {
    let totalPrice = 0;

    for (let i = 0; i < data.length; i++) {
      totalPrice += data[i].price;
    }

    return totalPrice;
  }

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
                title: 'Đơn hàng',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={3}>Xác nhận đơn hàng</Title>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            {loading ? (
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Spin />
              </div>
            ) : (
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.ticketId}>
                    <List.Item.Meta
                      avatar={
                        <Image
                          alt="image"
                          width={132}
                          height={100}
                          src={`data:image/png;base64,${item.images}`}
                        />
                      }
                      title={<a href="https://ant.design">{item.ticketName}</a>}
                      description={
                        <Text strong type="danger">
                          {formatCurrency(item.price)}
                        </Text>
                      }
                    />

                    <Button
                      danger
                      size="large"
                      style={{ margin: 'auto', display: 'block' }}
                      icon={<DeleteOutlined />}
                      onClick={() => remove(item.ticketId)}
                    />
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={5}>Phương thức thanh toán</Title>
            <List
              dataSource={dataTransaction}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={
                      <Image
                        preview={false}
                        alt="image"
                        width={50}
                        height={50}
                        src={item.avatarUrl}
                      />
                    }
                    title={<a href="https://ant.design">{item.name}</a>}
                  />
                  <CheckCircleOutlined twoToneColor="#52c41a" />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={5} style={{ marginBottom: '16px' }}>
              Thông tin thanh toán
            </Title>
            <Row gutter={32} style={{ marginBottom: '32px' }}>
              <Col span={20}>Số tiền</Col>
              <Col span={4}>
                <Text strong type="danger">
                  {formatCurrency(calculateTotalPrice(data))}
                </Text>
              </Col>
            </Row>
            <hr style={{ width: '30%' }} />
            <Row gutter={32} style={{ marginBottom: '32px' }}>
              <Col span={20}>Tổng thanh toán</Col>
              <Col span={4}>
                <Text strong type="danger">
                  {formatCurrency(calculateTotalPrice(data))}
                </Text>
              </Col>
            </Row>
            <Title level={5} style={{ marginBottom: '16px' }}>
              Ghi chú
            </Title>
            <TextArea placeholder="Nhập ghi chú cho người bán" rows={4} />
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Text
              style={{
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Bằng việc bấm Đặt hàng, bạn đã đọc, hiểu rõ và đồng ý với Chính
              sách mua hàng của TickSwap
            </Text>
            <Row gutter={32} style={{ margin: '32px' }}>
              <Col span={8}>
                <Row>
                  <Col span={24}>Tổng cộng</Col>
                  <Col span={24}>
                    <Text strong type="danger">
                      {formatCurrency(calculateTotalPrice(data))}
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col
                span={14}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  style={{
                    height: '40px',
                    width: '60%',
                    color: '#fff',
                    backgroundColor: '#E8CA2B',
                    boxShadow:
                      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                  }}
                  onClick={() => {
                    return handleBuyTicket();
                  }}
                >
                  Mua ngay
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
