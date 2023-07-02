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
      <Row gutter={14}>
        {/* Tải ứng dụng TickSwap */}
        <Col span={6}>
          <Text strong>Tải ứng dụng TicketSwap</Text>
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
        <Col span={6}>
          <Text strong>Hỗ trợ khách hàng</Text>
          <Row style={{ marginTop: '16px' }}>
            <Col span={24}>
              <Text>Trung tâm trợ giúp</Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text>An toàn mua bán</Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text>Quy định cần biết</Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text>Quy chế quyền riêng tư</Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text>Liên hệ hỗ trợ</Text>
            </Col>
          </Row>
        </Col>
        {/* Về TickSwap */}
        <Col span={6}>
          <Text strong>Về TicketSwap</Text>
          <Row style={{ marginTop: '16px' }}>
            <Col span={24}>
              <Text>Giới thiệu</Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text>Tuyển dụng</Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text>Truyền thông</Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={24}>
              <Text>Blog</Text>
            </Col>
          </Row>
        </Col>
        {/* Liên kết */}
        <Col span={6}>
          <Text strong>Liên kết</Text>
          <Row gutter={16}>
            <Col span={8}>
              <YoutubeOutlined style={{ fontSize: '50px' }} />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <FacebookOutlined style={{ fontSize: '50px' }} />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <LinkedinOutlined style={{ fontSize: '50px' }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
