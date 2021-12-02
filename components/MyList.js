import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'
import { CalendarOutlined , FolderOutlined, FireOutlined } from '@ant-design/icons';
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/components/MyList.css'



const MyList = () => {

  const [mylist, setMylist] = useState(
    [
      { title: '使用redux-devtools工具 ', context: '在vue中型项目开发的过程中，一般都是要用到vuex这个状态管理工具的，这样可以方便我们管理全局的状态，同时，为了在开发的过程中，更加方便地实时查看到state状态，我们会使用 vue-devtool 工具，这样就可以在浏览器中实时看到 state 的变化以及触发的 mutations 等等。在react的开发过程中也是如此，redux类似于vue中的vuex，也是状态管理工具，同样，为了实时观察（而不是讨厌的console.log()），我们一般都会选择使用redux-devtools工具来进行使用了redux项目的开发。 ' },
      { title: '舍伍德·安德森的小说《鸡蛋》', context: '小说是用一个孩子的视角叙述的，讲的是他父亲的故事。父亲是俄亥俄州的一个农民，一直以种地为生。但是有了孩子以后，父亲和母亲决定为了孩子将来有出息，必须做一些"ambitious"的事情，不能再当农民了。父亲先开了一个养鸡场，但是没有成功。于是，全家搬到几英里以外的一个小镇上，改为开餐馆，最终也没有成功。小说讲的就是这样一个故事。小说的前半部分是一个农村家庭苦难的奋斗史，后半部则是写作者的父亲企图用一个鸡蛋取悦他的客人，但是遭到失败。在这里，那只鸡蛋实际上象征着命运和人生。作者的父亲企图改变命运，就像他企图征服那只鸡蛋那样。但是最终还是要失败，遭到他人的耻笑和命运无情的打击。' },
      { title: '《万物简史》（A Short History Of Nearly Everything）是一本难得的科普佳作。', context: '本书2003年5月在美国出版后，连续数十周高居《纽约时报》、《泰晤士报》排行榜最前列，荣登亚马逊网站2003年度十大畅销书之列，在年度科学类图书排行榜中，本书更是勇夺桂冠。2004年初，被美国《科学》杂志评选为2003年度最佳科学著作之一。2004年6月，又一举夺得了由英国皇家学会颁布的世界最著名的科普图书大奖----安万特（Aventis）奖。我用过的教科书全都出自那些怀有一种挺有意思的想法的男人（始终都是男人）的笔下，美国的孩子们会喜欢各个章节的结尾都带有问题部分，供他们在自己的时代冥思苦想。' },
      { title: '威廉·布莱克《从一颗沙子看世界》', context: '主要是很少从国外诗中看到禅意，我比较喜欢宗白桦先生所译的。但翻译过来之后还是跟禅宗偈子意境查多了，如果大家有兴趣可以查一下指月录，华严经合论等等的意境和语言也是非常美的。十世古今始终不离于当念无边刹境自他不隔于毫端。布莱克本人是出名的，只是这首诗在欧美不出名。最后一版的现代文笔比较优美，但是有些扭曲了含义。而且本人觉得可以润色一下：一颗沙里看出一个世界.一朵花里窥见一座天堂.把无限放在你的掌心.把永恒在一刹那收藏.第一个版本和宗白华的译文精辟，而且符合原文。指月录的确有不少人生的智慧。' },
      { title: '关于幸福，你知道多少（上）', context: 'People see love as the key to happiness. Those who love and are loved in return are happier than others. Great prosperity, a high-status job, health, personal attractiveness, marriage, even sex -- none of these make up for a lack of love. "You can be happy without a good sex life, and you can have a good sex life and be unhappy." Freedman point out, though sex is an important element in happiness for most people.很同意这个结论，我觉得有回应的爱情是幸福的充分条件，甚至是第一位的。没有爱情，怎么都不可能是幸福的。' },
      { title: '关于幸福，你知道多少（下）', context: 'A large part of the influence of money and education on happiness derives from one original expectations. If you thought youd earn a lot, and did, you may have a so what? attitude. But if your expectations have been overfulfilled, the happiness that comes from getting more than you thought you would get can be quite pronounced. The happiness that comes from getting more than you thought you would get can be quite pronounced. The happiest groups were those with little education who earned a lot; while the highly educated who earned a lot were not so well off psychologically.幸福与期望有关，受过的教育越高，幸福的机会越小，不知道是不是这样？' },
    ]
  );


  return (
      <List
        itemLayout="vertical"
        dataSource={mylist}
        renderItem={item => (
          <List.Item>
            <div className="list-title">{item.title}</div>
            <div className="list-icon">
              <span><CalendarOutlined />2019-06-28</span>
              <span><FolderOutlined />视频教程</span>
              <span><FireOutlined />5498人</span>
            </div>
            <div className="list-context">{item.context}</div>
          </List.Item>
        )}
      />

  )

}

export default MyList

