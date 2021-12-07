import React, { useState, useEffect } from 'react';
import { Row, Col, Menu } from 'antd';
import { YoutubeOutlined, AppstoreOutlined, SmileOutlined } from '@ant-design/icons';
import '../static/style/components/Header.css';

// import '../components/iconfont';

// import { createFromIconfontCN } from '@ant-design/icons';

// const IconFont = createFromIconfontCN({
//   scriptUrl: [
//     '//at.alicdn.com/t/font_2995397_9v73irj2b2m.js',
//   ],
// });


import Icon from '../components/icon'

const RouterIcon = ({ type }) => {
  return (
    // 必须加上 anticon 的样式，否则 menu 无法处理
    <svg class="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
};

import Link from 'next/link'
import axios from 'axios';
import Router from 'next/router';

// import getConfig from 'next-server/config';
// const { linkPrefix } = getConfig().publicRuntimeConfig;



const Header = () => {
  const [navArray, setNavArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://127.0.0.1:7001/default/getTypeInfo').then(
        (res) => {
          // setNavArray(res.data.data)
          return res.data.data
        }
      )

      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    console.log("e:",e)
    if (e.key == "99") {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }


  return (
    <div className='header'>
      <Row type="flex" justify='center'>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className='header-logo'>
            技术博客123456
        </span>
          <span className='header-txt'>
            Single Shared Layout with Custom App
        </span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>

          <Menu
            mode="horizontal"
            onClick={handleClick}
          >
            <Menu.Item key="home">
              {/* <IconFont type="icon-home" /> 首页  */}
              <Icon className="icon-home" /> 首页 
            </Menu.Item>

            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.id}>
                    {/* <IconFont type={"icon-" + item.icon} /> {item.typeName} */}
                    <Icon className={"icon-" +item.icon} /> {item.typeName}
                  </Menu.Item>
                )
              })
            }

            {/* <Menu.Item key="home" icon={<RouterIcon type='home' />}> 首页
            </Menu.Item>

            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.Id} icon={<RouterIcon type={item.icon} />}> {item.typeName}
                  </Menu.Item>
                )
              })
            } */}

            {/* <Menu.Item key="video" icon={<YoutubeOutlined />}>
            <Link href="/list">
              <a>视频222</a>
            </Link>
          </Menu.Item> */}

            {/* Link内需要a标签，不然爬虫识别不了，不用a可以加passHref，提高爬虫识别率
          <Menu.Item key="detail" icon={<SmileOutlined />}>
            <Link href="/detail" passHref as={`${linkPrefix}/detail`}>
              详情
            </Link> 
            <Link href="/detail">
              <a>详情333</a>
            </Link>
          </Menu.Item> */}
          </Menu>
        </Col>
      </Row>

    </div>
  )
}




export default Header 