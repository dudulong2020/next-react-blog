import React from "react";
import Head from 'next/head';
import { Button, Row, Col, Breadcrumb } from 'antd';
// import Header from '../components/Header';
import '../static/style/pages/index.css';
import Author from '../components/Author';
import Advert from '../components/Advert'

import MyList from '../components/MyList';

import axios from 'axios';

const Home = () => (
  <div>
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <MyList />
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
      </Col>
    </Row>
  </div>
)


Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res) => {
        console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Home;


