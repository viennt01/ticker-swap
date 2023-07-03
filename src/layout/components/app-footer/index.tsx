import React from 'react';
import {
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Col, Layout, Row, Typography, QRCode, Image } from 'antd';
import style from './index.module.scss';

const { Text } = Typography;
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className={style.appFooterWrapper}>
      <Row gutter={14} style={{ width: '100%' }}>
        {/* Tải ứng dụng TicketSwap */}
        <Col span={24} lg={6} className={style.download}>
          <Text strong style={{ display: 'block' }}>
            Tải ứng dụng TicketSwap
          </Text>
          <Row style={{ marginTop: '16px' }}>
            <Col span={16}>
              <QRCode
                errorLevel="H"
                value="https://www.facebook.com/profile.php?id=100092463981969"
                icon="/images/logo.png"
              />
            </Col>
            <Col span={8}>
              <Row style={{ padding: '4px' }}>
                <Col span={24}>
                  <Image
                    preview={false}
                    width={40}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
                    alt="logo app store"
                  />
                </Col>
              </Row>
              <Row style={{ padding: '4px' }}>
                <Col span={24}>
                  <Image
                    preview={false}
                    width={40}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/2048px-Huawei_AppGallery.svg.png"
                    alt="logo app huawei"
                  />
                </Col>
              </Row>
              <Row style={{ padding: '4px 0 0 4px' }}>
                <Col span={24}>
                  <Image
                    preview={false}
                    width={40}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Google_Play_2016_icon.svg/918px-Google_Play_2016_icon.svg.png"
                    alt="logo app ch layed"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {/* Hỗ trợ khách hàng */}
        <Col span={24} lg={6} className={style.customer}>
          <Text
            strong
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            Hỗ trợ khách hàng
          </Text>
          <div>
            <Row
              style={{
                marginTop: '16px',
              }}
            >
              <Col span={24}>
                <Text
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Trung tâm trợ giúp
                </Text>
              </Col>
            </Row>
            <Row style={{ marginTop: '8px', display: 'block' }}>
              <Col span={24}>
                <Text
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  An toàn mua bán
                </Text>
              </Col>
            </Row>
            <Row style={{ marginTop: '8px', display: 'block' }}>
              <Col span={24}>
                <Text
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Quy định cần biết
                </Text>
              </Col>
            </Row>
            <Row style={{ marginTop: '8px', display: 'block' }}>
              <Col span={24}>
                <Text
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Quy chế quyền riêng tư
                </Text>
              </Col>
            </Row>
            <Row style={{ marginTop: '8px', display: 'block' }}>
              <Col span={24}>
                <Text
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Liên hệ hỗ trợ
                </Text>
              </Col>
            </Row>
          </div>
        </Col>
        {/* Về TicketSwap */}
        <Col span={24} lg={6} className={style.about}>
          <Text
            strong
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            Về TicketSwap
          </Text>
          <Row style={{ marginTop: '16px' }}>
            <Col span={24}>
              <Text
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Giới thiệu
              </Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Tuyển dụng
              </Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Truyền thông
              </Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Blog
              </Text>
            </Col>
          </Row>
        </Col>
        {/* Liên kết */}
        <Col span={24} lg={6} className={style.link}>
          <Text
            strong
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            Liên hệ
          </Text>
          <div className={style.icon}>
            <a href="https://www.facebook.com/profile.php?id=100092463981969">
              <YoutubeOutlined style={{ fontSize: '50px' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092463981969">
              <FacebookOutlined style={{ fontSize: '50px' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092463981969">
              <LinkedinOutlined style={{ fontSize: '50px' }} />
            </a>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
