import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { YoutubeOutlined , AppstoreOutlined, SmileOutlined } from '@ant-design/icons';
import '../static/style/components/Header.css';

import Link from 'next/link'

// import getConfig from '../next.config';
// const { linkPrefix } = getConfig().publicRuntimeConfig;

const Header = () => (
  <div className='header'>
    <Row type="flex" justify='center'>
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className='header-logo'>
          技术博客
        </span>
        <span className='header-txt'>
        Single Shared Layout with Custom App
        </span>
      </Col>

      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        {/* <Menu mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />
              首页
          </Menu.Item>
          <Menu.Item key="video">
            <Icon type="youtube" />
              视频
          </Menu.Item>
          <Menu.Item key="life">
            <Icon type="smile" />
              生活
          </Menu.Item>
        </Menu> */}

        <Menu
          mode="horizontal"

        >
          <Menu.Item key="home" icon={<AppstoreOutlined />}>
            <Link href="/">
              <a>首页</a>
            </Link>
          </Menu.Item>

          <Menu.Item key="video" icon={<YoutubeOutlined />}>
            <Link href="/list">
              <a>视频</a>
            </Link>
          </Menu.Item>

          {/* Link内需要a标签，不然爬虫识别不了，不用a可以加passHref，提高爬虫识别率 */}
          <Menu.Item key="detail" icon={<SmileOutlined />}>
            {/* <Link href="/detail" passHref as={`${linkPrefix}/detail`}>
              详情
            </Link> */}
            <Link href="/detail">
              <a>详情</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>

  </div>
)

export default Header 