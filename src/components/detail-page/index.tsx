import React from 'react';
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

export default function DetailTickerFilmPage() {
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
      <Row gutter={32}>
        <Col span={16}>
          <Row>
            <Col span={24} style={{ marginBottom: '24px' }}>
              <Card style={{ height: '400px', backgroundColor: '#F5F5F5' }}>
                <Carousel>
                  <Image
                    src={
                      'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/ve-concert-the-virtual-trong-game-696x390.jpg?fit=700%2C20000&quality=95&ssl=1'
                    }
                    alt="ve pts"
                    height={350}
                    width={'100%'}
                  />
                  <Image
                    src={
                      'https://kenh14cdn.com/203336854389633024/2022/10/21/photo-5-16663516267631798534299.png'
                    }
                    alt="ve pts"
                    width={'100%'}
                    height={350}
                  />
                  <Image
                    src={
                      'https://cdnmedia.webthethao.vn/uploads/media/images/files/duylong/14411115771525395502.jpg'
                    }
                    alt="ve pts"
                    width={'100%'}
                    height={350}
                  />
                  <Image
                    src={
                      'https://www.cgv.vn/media/catalog/product/cache/1/small_image/600x314/a134659ca47b28f7b266e1777fbf870f/9/8/980x448__1_.jpg'
                    }
                    alt="ve pts"
                    width={'100%'}
                    height={350}
                  />
                </Carousel>
              </Card>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={21} style={{ marginBottom: '24px' }}>
                  <Title level={5}>Vé xem phim lật mặt 6</Title>
                  <Text type="danger" strong>
                    85.000 đ
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
                  <Text>
                    Hiện tại mình muốn pass lại vé xem phim Lật Mặt 6 vào ngày
                    8/3/2023 suất 10:04AM tại Gigamall Thủ Đức. Rạp 04- Hàng ghế
                    A1
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
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
                    <Badge status="processing" text="Hoạt động 10 phút trước" />
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
    </>
  );
}
