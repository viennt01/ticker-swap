import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Button,
  Card,
  Select,
  Modal,
  Slider,
  Tabs,
  List,
  Space,
} from 'antd';
import {
  FilterOutlined,
  EnvironmentOutlined,
  RiseOutlined,
  FireOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import React from 'react';
import { ROUTERS } from '@/constant/router';

export default function TicketConcertPage() {
  const router = useRouter();
  const { Title, Text } = Typography;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const changePageHome = () => {
    router.push('/');
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const changePageDetail = (id: string) => {
    router.push(ROUTERS.DETAIL_TICKET_FILM(id));
  };

  const formatter = (value: number | undefined) =>
    `${String(value).replace(/(.)(?=(\d{3})+$)/g, '$1,')} đ`;

  const data = [
    {
      id: '1',
      title: `Lật mặt 6`,
      cost: '100.000',
      content:
        'Lật mặt 6 sẽ thuộc thể loại giật gân, tâm lý pha hành động, hài hước.',
    },
    {
      id: '2',
      title: `Lật mặt 7`,
      cost: '100.000',
      content:
        'Lật mặt 6 sẽ thuộc thể loại giật gân, tâm lý pha hành động, hài hước.',
    },
  ];
  const listAll = () => {
    const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );

    return (
      <>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={FireOutlined}
                  text="Bán chuyên"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={RiseOutlined}
                  text="Tin ưu tiên"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={EnvironmentOutlined}
                  text="Thành phố Hồ Chí Minh"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/9/8/980x448__1_.jpg"
                />
              }
            >
              <List.Item.Meta
                title={
                  <a onClick={() => changePageDetail(item.id)}>{item.title}</a>
                }
              />
              <Row>
                <Col span={24}>{item.content}</Col>
                <Col span={24} style={{}}>
                  {
                    <Text strong type="danger">
                      {item.cost} đ
                    </Text>
                  }
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </>
    );
  };
  return (
    <>
      <Row>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Breadcrumb
            separator="->"
            items={[
              {
                title: <a onClick={changePageHome}>Trang chủ</a>,
              },
              {
                title: 'Vé xem Concert/LiveShow',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Title level={3}>Tìm kiếm nhanh vé xem Concert/LiveShow</Title>
        </Col>
      </Row>
      <Row style={{ marginBottom: '24px' }}>
        <Col span={24}>
          <Card>
            <Button style={{ marginRight: '16px' }}>
              <FilterOutlined />
              Lọc
            </Button>
            <Select
              defaultValue="HCM"
              style={{ width: 220, marginRight: '16px' }}
              onChange={handleChange}
              options={[
                {
                  value: 'HCM',
                  label: (
                    <>
                      <EnvironmentOutlined style={{ marginRight: '8px' }} />
                      Thành phố Hồ Chí Minh
                    </>
                  ),
                },
                {
                  value: 'DN',
                  label: (
                    <>
                      <EnvironmentOutlined style={{ marginRight: '8px' }} />
                      Thành phố Đà Nẵng
                    </>
                  ),
                },
                {
                  value: 'HN',
                  label: (
                    <>
                      <EnvironmentOutlined style={{ marginRight: '8px' }} />
                      Thủ đô Hà Nội
                    </>
                  ),
                },
              ]}
            />
            <Select
              defaultValue="vtt"
              style={{ width: 220, marginRight: '16px' }}
              onChange={handleChange}
              options={[
                {
                  value: 'vxp',
                  label: <>Vé xem phim</>,
                },
                {
                  value: 'vtt',
                  label: <>Vé thể thao</>,
                },
                {
                  value: 'vdl',
                  label: <>Vé phương tiện đi lại</>,
                },
                {
                  value: 'vcl',
                  label: <>Vé xem Concert/LiveShow</>,
                },
              ]}
            />
            <Button style={{ marginRight: '16px' }} onClick={showModal}>
              Giá +
            </Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card>
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: 'Tất cả',
                  key: '1',
                  children: listAll(),
                },
                {
                  label: 'Cá nhân',
                  key: '2',
                  children: listAll(),
                },
                {
                  label: 'Bán chuyên',
                  key: '3',
                  children: listAll(),
                },
                {
                  label: 'Tin mới trước',
                  key: '4',
                  children: listAll(),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
      <Modal
        title="Giá"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Giá từ 0 đ đến 1.000.000+ đ
        <Slider
          range
          defaultValue={[0, 1000000]}
          min={0}
          max={1000000000}
          tooltip={{ formatter }}
        />
      </Modal>
    </>
  );
}
