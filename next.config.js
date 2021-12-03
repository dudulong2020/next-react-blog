// const withCss = require('@zeit/next-css')

// if(typeof require !== 'undefined'){
//     require.extensions['.css']=file=>{}
// }

// module.exports = withCss({})

const withLess = require('@zeit/next-less');
const WithCss = require('@zeit/next-css');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

// const prod = process.env.NODE_ENV === 'production';

module.exports = withLess(
  WithCss({
    lessLoaderOptions: {
      modifyVars: {
        // 'primary-color': '#1DA57A'
      },
      javascriptEnabled: true
    },

    // next-antd-ssr这个名字是你github项目名称
    // assetPrefix: prod ? '/next-react-blog' : '',
    // publicRuntimeConfig: {
    //   linkPrefix: prod ? '/next-react-blog' : ''
    // }
    // assetPrefix: prod ? '/blog' : '',
    // publicRuntimeConfig: {
    //   linkPrefix: prod ? '/blog' : ''
    // }
  })
);