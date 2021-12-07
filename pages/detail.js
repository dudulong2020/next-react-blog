import React from 'react'
import axios from 'axios';

// import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import Author from '../components/Author'
import Advert from '../components/Advert'
import Tocify from '../components/tocify.tsx'
import '../static/style/components/mylist.css'
import '../static/style/pages/detail.css'

// import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
// The default style of markdown-navbar should be imported additionally
import 'markdown-navbar/dist/navbar.css';


import { marked } from 'marked';
import hljs from 'highlight';
// import 'highlight.js/styles/monokai-sublime.css';
import 'highlight/lib/vendor/highlight.js/styles/default.css';

// import TestMarkdowm from '../public/TestMarkdowm.md'

marked.setOptions({
  renderer: new marked.Renderer(), // renderer: 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
  gfm: true,       // gfm：启动类似Github样式的Markdown,填写true或者false
  pedantic: false, // pedatic：只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
  sanitize: false, //sanitize: 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
  tables: true,    // tables： 支持Github形式的表格，必须打开gfm选项
  breaks: false,   // breaks: 支持Github换行符，必须打开gfm选项，填写true或者false
  smartLists: true,// smartLists：优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
  smartypants: false, // smartLists：优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
  // highlight: 高亮显示规则 ，这里我们将使用highlight.js来完成
  // highlight: function (code) {
  //   return hljs.highlightAuto(code).value;
  // }

});

const tocify = new Tocify()
new marked.Renderer().heading = function (text, level, raw) {
  const anchor = tocify.add(text, level);
  return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
};

const Detail = (datail) => {

  console.log("detail:", datail)

  const renderer = new marked.Renderer();



  // const renderer = new marked.Renderer();


  // let html = marked(<div>sfsfsfsf</div>)
  let html = marked(datail.content)

  // const html = marked.parse('**strong** _em_');
  return (
    <>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>{datail.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item>{datail.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">
                {datail.title}
              </div>

              <div className="list-icon center">
                <span><CalendarOutlined />{datail.addTime}</span>
                <span><FolderOutlined />{datail.typeName}</span>
                <span><FireOutlined />{datail.view_count}</span>
              </div>

              <div className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}>
              </div>
            </div>

          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />

          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
              {/* <MarkNav
                className="article-menu"
                source={html}
                ordered={false}
              /> */}
            </div>
          </Affix>

        </Col>
      </Row>

    </>
  )
}


Detail.getInitialProps = async (context) => {

  // console.log('context.query.id:',context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {

    axios('http://127.0.0.1:7001/default/getArticleListById/' + id).then(
      (res) => {
        console.log('res.data:', res.data)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise

}


export default Detail