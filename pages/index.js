import React, { useState, useEffect } from "react";
import axios from 'axios';
import servicePath from '../config/apiUrl';
import Head from 'next/head';
import { Button, Row, Col, Breadcrumb } from 'antd';
// import Header from '../components/Header';
import '../static/style/pages/index.css';
import Author from '../components/Author';
import Advert from '../components/Advert'

import myContextContext from '../components/createContext'; //公共组件
import MyList from '../components/MyList';



const Home = (list, { match }) => {
  console.log("list:", list, )
  console.log("match:", match, )


  return (<div>
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >

        <MyList data={list.data} />
        {/* <MyList /> */}


      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
      </Col>
    </Row>
  </div>)
}




Home.getInitialProps = async (context) => {
  console.log('远程获取数据结果:', context)
  const promise = new Promise((resolve) => {
    // const id = context.query.id || 
    // console.log('context.query.id:', context.query.id)
    // axios(servicePath.getArticleListById + id).then(
    //   (res) => {
    //     console.log('远程获取数据结果:', res.data.data)
    //     resolve(res.data)
    //   }
    // )
    axios(servicePath.getArticleList).then(
      (res) => {
        console.log('远程获取数据结果:', res.data.data)
        resolve(res.data)
      }
    )
    
  })

  return await promise
}

export default Home;


