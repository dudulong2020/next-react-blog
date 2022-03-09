import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd'
import '../static/style/components/Author.css'


const Author = () => {

  return (
    <div className="author-div comm-box">
      <div> <Avatar size={100} src="/maomao.jpeg" /></div>
      <div className="author-introduction">
        上次入门完了以后感受意犹未尽，总以为这个脚手架仍是不太完美，还有能够改进的地方，
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />

      </div>
    </div>
  )

}

export default Author