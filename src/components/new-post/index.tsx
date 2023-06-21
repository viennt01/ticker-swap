import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography, Image, Spin } from 'antd';
import { useRouter } from 'next/router';
import { DataTicket, getListTicket } from './fetcher';

export default function NewPost() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataTicket[]>([]);
  const changePage = (id: string) => {
    router.push(id);
  };
  const fetchDataListTicket = () => {
    getListTicket()
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchDataListTicket();
  }, []);
  return (
    <div style={{ marginBottom: '64px' }}>
      <Card
        style={{
          width: '100%',
          borderRadius: '8px',
          boxShadow: ' 20px 20px 50px 15px grey',
        }}
      >
        <Typography.Title
          level={5}
          style={{
            marginBottom: '32px',
          }}
        >
          Tin mới đăng
        </Typography.Title>
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
          <Row gutter={24}>
            {data
              .filter((allTicket: DataTicket) => {
                return allTicket.status === 1;
              })
              .map((data) => {
                return (
                  <Col
                    key={data.ticketId}
                    span={8}
                    style={{
                      marginBottom: '24px',
                    }}
                  >
                    <Row>
                      <Col
                        span={24}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Image
                          src={`data:image/png;base64,${data.avatar}`}
                          alt="cgv"
                          style={{
                            borderRadius: '24px',
                            marginBottom: '16px',
                            display: 'block',
                            height: '160px',
                          }}
                        />
                      </Col>
                    </Row>

                    <Typography.Text
                      onClick={() =>
                        changePage(`/ticker-film/${data.ticketId}`)
                      }
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        cursor: 'pointer',
                      }}
                    >
                      {data.ticketName}
                    </Typography.Text>
                    <Typography.Text
                      type="danger"
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {data.price} VND
                    </Typography.Text>
                  </Col>
                );
              })}
          </Row>
        )}
      </Card>
    </div>
  );
}
