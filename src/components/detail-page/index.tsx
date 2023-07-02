import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Typography,
  Image,
  Spin,
  notification,
} from 'antd';
import { FireOutlined, StarOutlined, StarFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { ROUTERS } from '@/constant/router';
import {
  DataTicket,
  DataUser,
  buyTicket,
  getTicket,
  getDataDetailTicket,
} from './fetcher';
import { formatCurrency, formatDateTime } from '@/utils/format';
import style from './index.module.scss';
import { appLocalStorage } from '@/utils/localstorage';
import { STATUS_CODE } from '@/constant/error-code';

export default function DetailTickerFilmPage() {
  const [data, setData] = useState<DataTicket>();
  const [dataUser, setDataUser] = useState<DataUser>();
  const [idUser, setIdUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const [notiApi, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { Title, Text } = Typography;
  const { id } = router.query;

  const changePageHome = () => {
    router.push(ROUTERS.HOME);
  };
  const checkSave = true;
  const fetchData = () => {
    const dataTicketGet = {
      id: id as unknown as number,
    };
    getDataDetailTicket(dataTicketGet)
      .then((res) => {
        if (res.message === STATUS_CODE.SUCCESS) {
          fetchDataUser();
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log('err', err);
        setLoading(false);
      });
  };
  const fetchDataUser = () => {
    getTicket(data?.userId as unknown as string)
      .then((res) => {
        if (res.message === STATUS_CODE.SUCCESS) {
          setDataUser(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log('err', err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
    setIdUser(appLocalStorage.get('idUser'));
  }, [router, loading]);
  const handleBuyTicket = (id: any) => {
    setIsLoading(true);
    const data = {
      ticketId: id,
      userId: Number(idUser),
    };
    console.log(data);

    buyTicket(data)
      .then((res) => {
        if (res.message === 'Thành công') {
          notiApi.success({
            message: '',
            description: 'Mua thành công',
            placement: 'topRight',
            duration: 3,
          });
          router.push('/cart');
          setIsLoading(false);
        }
        notiApi.error({
          message: '',
          description: 'Mua thất bại',
          placement: 'topRight',
          duration: 3,
        });
        setIsLoading(false);
      })
      .catch(() => {
        notiApi.error({
          message: '',
          description: 'Mua thất bại',
          placement: 'topRight',
          duration: 3,
        });
        setIsLoading(false);
      });
  };
  return (
    <>
      {contextHolder}
      <Row>
        <Col span={24} style={{ marginBottom: '16px' }}>
          <Breadcrumb
            separator="->"
            items={[
              {
                title: <a onClick={changePageHome}>Trang chủ</a>,
              },
              {
                title: id,
              },
            ]}
          />
        </Col>
      </Row>
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
        <Row gutter={32}>
          <Col span={24} lg={16} style={{ marginBottom: '24px' }}>
            <Row>
              <Col span={24} style={{ marginBottom: '24px' }}>
                <Card style={{ height: '400px', backgroundColor: '#F5F5F5' }}>
                  <div className={style.contentContainer}>
                    <Image
                      src={`data:image/png;base64,${data?.avatar}`}
                      alt="ve pts"
                      height={350}
                      width={'auto'}
                    />
                  </div>
                </Card>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={21} style={{ marginBottom: '24px' }}>
                    <Title level={5}>{data?.ticketName}</Title>
                    <Text type="danger" strong>
                      {formatCurrency(data?.price || 0)}
                    </Text>
                  </Col>
                  <Col span={1} style={{ display: 'flex', right: '0px' }}>
                    <Button
                      danger
                      style={{
                        borderRadius: '16px',
                      }}
                    >
                      Lưu tin {checkSave ? <StarOutlined /> : <StarFilled />}
                    </Button>
                  </Col>
                  <Col span={18}>
                    <Text>{data?.description}</Text>
                  </Col>
                  <Col
                    span={18}
                    style={{
                      marginTop: '16px',
                    }}
                  >
                    <Text strong>Địa chỉ: </Text>{' '}
                    <Text>{data?.addressBuy}</Text>
                  </Col>
                  <Col
                    span={18}
                    style={{
                      marginTop: '16px',
                    }}
                  >
                    <Text strong>Thời gian: </Text>{' '}
                    <Text>
                      {formatDateTime(
                        new Date(
                          data?.created || ''
                        ).getTime() as unknown as Date
                      )}
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24} lg={8}>
            <Card>
              <Row>
                <Col span={24} style={{ marginBottom: '32px' }}>
                  <Row>
                    <Col span={6}>
                      <Avatar
                        src={`data:image/png;base64,${dataUser?.image}`}
                        size={64}
                      />
                    </Col>

                    <Col span={18}>
                      <Title level={5}>{dataUser?.fulName}</Title>
                      <Badge
                        status="processing"
                        text="Hoạt động 10 phút trước"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={24} style={{ marginBottom: '32px' }}>
                  <Row>
                    <Col span={11}>
                      <Row>
                        <Col
                          span={24}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '8px',
                          }}
                        >
                          Bán chuyên
                        </Col>
                        <Col
                          span={24}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <FireOutlined />
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      span={2}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '0px',
                          height: '100%',
                          border: '1px inset',
                          float: 'left',
                        }}
                      ></div>
                    </Col>
                    <Col span={11}>
                      <Row>
                        <Col
                          span={24}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          Phản hồi chat
                        </Col>
                        <Col
                          span={24}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Text strong>Thỉnh thoảng</Text>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col span={24} style={{ marginBottom: '32px' }}>
                  <Row>
                    <Col
                      span={24}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '26px',
                      }}
                    >
                      <Button
                        type="primary"
                        loading={isLoading}
                        style={{
                          height: '40px',
                          width: '80%',
                          fontSize: '18px',
                          color: '#fff',
                          backgroundColor: '#FC0404',
                          boxShadow:
                            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                        }}
                        htmlType="submit"
                        onClick={() => {
                          return handleBuyTicket(data?.id);
                        }}
                      >
                        Mua ngay
                      </Button>
                    </Col>
                    <Col
                      span={24}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '26px',
                      }}
                    >
                      <Button
                        type="primary"
                        style={{
                          height: '40px',
                          width: '80%',
                          fontSize: '18px',
                          color: '#fff',
                          backgroundColor: '#2BE876',
                          boxShadow:
                            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                        }}
                        htmlType="submit"
                        href={`tel:${dataUser?.phoneNumber}`}
                      >
                        <Text strong style={{ color: '#fff' }}>
                          BẤM ĐỂ GỌI
                        </Text>
                      </Button>
                    </Col>
                    <Col
                      span={24}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '26px',
                      }}
                    >
                      <Button
                        type="primary"
                        style={{
                          height: '40px',
                          width: '80%',
                          fontSize: '18px',
                          color: '#2BE876',
                          backgroundColor: '#fff',
                          boxShadow:
                            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                        }}
                        htmlType="submit"
                        href={`https://zalo.me/${dataUser?.phoneNumber}`}
                      >
                        <Text strong style={{ color: '#2BE876' }}>
                          CHAT VỚI NGƯỜI BÁN
                        </Text>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}
