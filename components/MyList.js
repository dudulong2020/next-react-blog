import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import servicePath from '../config/apiUrl';
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/components/mylist.css'

import Link from 'next/link';

const MyList = (props) => {

  const [mylist, setMylist] = useState(props.data);
  // const [mylist, setMylist] = useState([]);

  // const [mylist, setMylist] = useState(props.listdata);

  console.log("props:", props)

  // useEffect(() => {
  //   setMylist(list.data)
  // })

  // useEffect(() => {
  //   const fetchData = async (context) => {
  //     const id = context.query.id
  //     console.log('context.query.id:', id)
  //     const result = await axios(servicePath.getArticleListById + id).then(
  //       (res) => {
  //         // setNavArray(res.data.data)
  //         return res.data.data
  //       }
  //     )

  //     setMylist(result)
  //   }
  //   fetchData()
  // }, [])

  return (
    <List
      itemLayout="vertical"
      dataSource={mylist}
      // dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <div className="list-title">
            <Link href={{ pathname: '/detail', query: { id: item.id } }}>
              {item.title}
            </Link>
          </div>
          <div className="list-icon">
            <span><CalendarOutlined />{item.addTime}</span>
            <span><FolderOutlined />{item.type_id}</span>
            <span><FireOutlined />{item.view_count}</span>
          </div>
          <div className="list-context">{item.content}</div>
        </List.Item>
      )}
    />

  )

}


// MyList.getInitialProps = async (context) => {
//   console.log('MyList.context:', context)

//   let id = context.query.id
//   const promise = new Promise((resolve) => {
//     axios(servicePath.getArticleListById + id).then(
//       (res) => resolve(res.data)
//     )
//   })
//   return await promise
// }

export default MyList

