import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Card,
  Avatar,
  Spin,
  Button,
} from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DataInformation, getDataInformation } from './fetcher';
import { appLocalStorage } from '@/utils/localstorage';
import { STATUS_CODE } from '@/constant/error-code';
import { UserOutlined } from '@ant-design/icons';
import { formatCurrency } from '@/utils/format';
export default function InformationPage() {
  const { Title, Text } = Typography;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataInformation>();
  const [idUser, setIdUser] = useState<any>();
  const fetchData = () => {
    getDataInformation(idUser)
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

  useEffect(() => {
    fetchData();
    setIdUser(appLocalStorage.get('idUser'));
  }, [idUser, router, loading]);

  const changePageHome = () => {
    router.push('/');
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
                title: 'Thông tin cá nhân',
              },
            ]}
          />
        </Col>
        <Col span={24} style={{ marginBottom: '8px' }}>
          <Card
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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
              <Row>
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Title level={3}>Thông tin cá nhân</Title>
                </Col>
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <Avatar size={120} icon={<UserOutlined />} />
                </Col>
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <Text strong>{data?.fulName}</Text>
                </Col>{' '}
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <Text strong>{data?.phoneNumber}</Text>
                </Col>{' '}
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <Text strong>{data?.bankingName}:</Text>
                  <Text strong>{data?.accountBankingNumber}</Text>
                </Col>
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <Text strong>Số dư: </Text>
                  <Text
                    type="danger"
                    style={{
                      marginLeft: '4px',
                    }}
                  >
                    {formatCurrency(data?.money || 0)}
                  </Text>
                </Col>
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    onClick={() => {
                      router.push('/payments');
                    }}
                  >
                    Nộp tiền
                  </Button>
                </Col>
              </Row>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}
