import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Col,
  Row,
  Typography,
  Image,
  Spin,
} from 'antd';
import {
  FireOutlined,
  PhoneOutlined,
  MessageOutlined,
  StarOutlined,
  StarFilled,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { ROUTERS } from '@/constant/router';
import { DataTicket, login } from './fetcher';
import { formatCurrency, formatDateTime } from '@/utils/format';
import style from './index.module.scss';

export default function DetailTickerFilmPage() {
  const [data, setData] = useState<DataTicket>();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const { Title, Text } = Typography;
  const { id } = router.query;

  const changePageHome = () => {
    router.push(ROUTERS.HOME);
  };
  // const handleChangePageTransaction = (id: string) => {
  //   router.push(ROUTERS.TRANSACTION(id));
  // };
  const checkSave = true;
  const fetchData = () => {
    login(id as unknown as number)
      .then((res) => {
        if (res.status) {
          setData(res.data);
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
  }, [router]);
  return (
    <>
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
                  <Carousel>
                    {data?.images.map((image) => (
                      <div
                        key={image.imageId}
                        className={style.contentContainer}
                      >
                        <Image
                          src={`data:image/png;base64,${image.imageData}`}
                          alt="ve pts"
                          height={350}
                          width={'auto'}
                        />
                      </div>
                    ))}
                  </Carousel>
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
                          data?.timeUse || ''
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
                        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                        size={64}
                      />
                    </Col>

                    <Col span={18}>
                      <Title level={5}>Thanh Vien</Title>
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
                        // onClick={() => handleChangePageTransaction('1')}
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
                      >
                        <Row>
                          <Col
                            span={16}
                            style={{
                              display: 'flex',
                              left: '0px',
                            }}
                          >
                            <PhoneOutlined
                              style={{ marginRight: '8px', color: '#000' }}
                            />{' '}
                            <Text strong style={{ color: '#fff' }}>
                              091473099
                            </Text>
                          </Col>
                          <Col span={8}>
                            <Text strong style={{ color: '#fff' }}>
                              Bấm để hiện số
                            </Text>
                          </Col>
                        </Row>
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
                      >
                        <Row>
                          <Col
                            span={12}
                            style={{
                              display: 'flex',
                              left: '0px',
                            }}
                          >
                            <MessageOutlined
                              style={{
                                marginRight: '8px',
                                color: '#000',
                              }}
                            />
                          </Col>
                          <Col span={12}>
                            <Text strong style={{ color: '#2BE876' }}>
                              CHAT VỚI NGƯỜI BÁN
                            </Text>
                          </Col>
                        </Row>
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
