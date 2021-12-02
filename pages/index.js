import React from "react";
import Head from 'next/head';
import { Button, Row, Col,Breadcrumb } from 'antd';
// import Header from '../components/Header';
import '../static/style/pages/index.css';
import Author from '../components/Author';
import Advert from '../components/Advert'

import MyList from '../components/MyList';

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
export default Home;