import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Form,
  Input,
  Button,
  Select,
  Card,
  InputNumber,
  DatePicker,
  notification,
} from 'antd';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { appLocalStorage } from '@/utils/localstorage';

export default function PostTicketPage() {
  const [isPersonal, setIsPersonal] = useState(true);
  const router = useRouter();
  const { Title, Text } = Typography;
  const [loading, setLoading] = useState(false);
  const [idUser, setIdUser] = useState<any>();
  const changePageHome = () => {
    router.push('/');
  };
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  // const getBase64 = (file: any): Promise<string> =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });

  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState('');
  // const [previewTitle, setPreviewTitle] = useState('');
  // const [fileList, setFileList] = useState<UploadFile[]>([]);

  // const handleCancel = () => setPreviewOpen(false);
  const [notiApi, contextHolder] = notification.useNotification();
  const [dataImage, setDataImage] = useState<any>('');

  // const handlePreview = async (file: UploadFile) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj as any);
  //   }

  //   setPreviewImage(file.url || (file.preview as string));
  //   setPreviewOpen(true);
  //   setPreviewTitle(
  //     file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
  //   );
  // };

  // const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
  //   setFileList(newFileList);

  // const uploadButton = (
  //   <div>
  //     <PlusOutlined />
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );

  const onFinish = (values: any) => {
    setLoading(true);
    const dataTimeUse = `${values.ticket.TimeUse['$y']}-${
      values.ticket.TimeUse['$M'] + 1
    }-${values.ticket.TimeUse['$D']}T${values.ticket.TimeUse['$H']}:${
      values.ticket.TimeUse['$m']
    }:${values.ticket.TimeUse['$s']}.${values.ticket.TimeUse['$ms']}`;
    const formdata = new FormData();
    formdata.append('TicketName', values.ticket.TicketName);
    formdata.append('TicketCode', values.ticket.TicketName);
    formdata.append('Description', values.ticket.Description);
    formdata.append('ImageAvatar', dataImage);
    formdata.append('Quantity', values.ticket.Quantity);
    formdata.append('Files', dataImage);
    formdata.append('Price', values.ticket.Price);
    formdata.append('AddressUse', values.ticket.AddressBuy);
    formdata.append('ExpiationDate', dataTimeUse);
    formdata.append('TimeUse', dataTimeUse);
    formdata.append('EndPoint', values.ticket.TicketName);
    formdata.append('StartPoint', values.ticket.TicketName);
    formdata.append('AddressBuy', values.ticket.AddressBuy);
    formdata.append('TimeBuy', dataTimeUse);
    formdata.append('UserId', idUser);
    formdata.append('TicketTypeId', values.ticket.TicketTypeId);

    fetch('http://ticketswap.somee.com/api/Ticket/AddTicket', {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then(() => {
        notiApi.success({
          message: '',
          description: 'Thêm vé thành công',
          placement: 'topRight',
          duration: 3,
        });
        router.push('/');
        setLoading(false);
        return;
      })
      .catch(() => {
        notiApi.error({
          message: '',
          description: 'Thêm vé thất bại',
          placement: 'topRight',
          duration: 3,
        });
        setLoading(false);
      });
  };
  const { Option } = Select;
  const handleCheckPersonal = (check: boolean) => {
    if (check === isPersonal) {
      return;
    }
    setIsPersonal(!isPersonal);
  };
  useEffect(() => {
    setIdUser(appLocalStorage.get('idUser'));
  }, [router]);
  // if (!idUser) {
  //   router.push('/login');
  // }
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setDataImage(file);
    }
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
                title: 'Thanh toán',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Title level={3}>Thêm vé</Title>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card>
            <Row>
              <Col span={8}>
                <Row>
                  <Col span={24} style={{ marginBottom: '16px' }}>
                    <Title level={3} style={{ marginBottom: '16px' }}>
                      Hình ảnh của sản phẩm
                    </Title>
                    <Text>Xem thêm về Quy định đăng tin của TickSwap</Text>
                  </Col>
                  <Col span={24}>
                    {/* <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload> */}
                    <input type="file" onChange={handleChangeFile} />

                    {/* <Modal
                      open={previewOpen}
                      title={previewTitle}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <img
                        alt="example"
                        style={{ width: '100%' }}
                        src={previewImage}
                      />
                    </Modal> */}
                  </Col>
                </Row>
              </Col>

              <Col span={16}>
                <Form {...layout} name="nest-messages" onFinish={onFinish}>
                  <Form.Item
                    name={['ticket', 'TicketTypeId']}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn loại vé!!',
                      },
                    ]}
                  >
                    <Select placeholder="Danh mục đăng tin" size="large">
                      <Option value="1">Vé xem phim</Option>
                      <Option value="2">Vé xem thể thao</Option>
                      <Option value="3">Vé phương tiện đi lại</Option>
                      <Option value="4">Vé xem concert/Liveshow</Option>
                    </Select>
                  </Form.Item>

                  <Title level={3} style={{ marginBottom: '16px' }}>
                    Thông tin chi tiết
                  </Title>

                  <Form.Item
                    name={['ticket', 'TicketName']}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tên tiêu đề!!',
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Tiêu đề" />
                  </Form.Item>
                  <Row>
                    <Col span={6}>
                      <Form.Item
                        name={['ticket', 'Quantity']}
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập số lượng vé!!',
                          },
                        ]}
                      >
                        <InputNumber
                          size="large"
                          placeholder="Số lượng vé"
                          style={{ width: '110px' }}
                          min={1}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        name={['ticket', 'Price']}
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập giá vé!!',
                          },
                        ]}
                      >
                        <InputNumber
                          size="large"
                          placeholder="Gía /1vé"
                          style={{ width: '110px' }}
                          min={0}
                          formatter={(value) =>
                            `${value} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={['ticket', 'AddressBuy']}
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập địa điểm!',
                          },
                        ]}
                      >
                        <Input size="large" placeholder="Địa điểm" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    name={['ticket', 'TimeUse']}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn thời gian!',
                      },
                    ]}
                  >
                    <DatePicker showTime placeholder="Thời gian" />
                  </Form.Item>
                  <Form.Item name={['ticket', 'Description']}>
                    <Input.TextArea
                      size="large"
                      placeholder="Mô tả chi tiết"
                      style={{ minHeight: '150px' }}
                    />
                  </Form.Item>

                  <Title level={3} style={{ marginBottom: '16px' }}>
                    Về người bán
                  </Title>
                  <Text>Bạn là</Text>
                  <Row style={{ margin: '8px 0 16px 0' }}>
                    <Col span={3}>
                      <Button
                        style={{
                          backgroundColor: isPersonal ? '#E8B32B' : '#D9D9D9',
                        }}
                        onClick={() => handleCheckPersonal(true)}
                      >
                        Cá nhân
                      </Button>
                    </Col>
                    <Col span={4}>
                      <Button
                        style={{
                          backgroundColor: isPersonal ? '#D9D9D9' : '#E8B32B',
                        }}
                        onClick={() => handleCheckPersonal(false)}
                      >
                        Bán chuyên
                      </Button>
                    </Col>
                  </Row>
                  <Form.Item name={['user', 'introduction']}>
                    <Input.TextArea
                      size="large"
                      placeholder="Mô tả chi tiết"
                      style={{ minHeight: '100px' }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      loading={loading}
                      htmlType="submit"
                      style={{
                        backgroundColor: '#E8B32B',
                        width: '100%',
                      }}
                      size="large"
                    >
                      Đăng tin
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
