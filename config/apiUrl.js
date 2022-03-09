let ipUrl = 'http://127.0.0.1:7001/default/';

// let ipUrl = null; //接口
// if(process.env.NEXT_PUBLIC_DOMAIN_ENV==="production"){
//     //生产环境接口地址
//     ipUrl="http://127.0.0.1:7001"
// }else {
//     //开发以及测试环境接口地址(我这里开发环境和测试环境是一样的接口)
//     ipUrl="http://128.0.0.1:7005"
// }

let servicePath = {
  getArticleList: ipUrl + 'getArticleList',
  getTypeInfo: ipUrl + 'getTypeInfo',
  getArticleListById: ipUrl + 'getArticleListById/',
  getArticleById: ipUrl + 'getArticleById/',

}

export default servicePath;