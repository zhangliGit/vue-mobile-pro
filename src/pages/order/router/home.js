/**
 * @des 主页模块路由
 * @key {module} 模块名
 * @key {path} vue组件
 * @key {title} 路由标题
 * @author zhangli
 */

const Home = [
  {
    module: 'home',
    path: 'Home',
    type: 'index',
    keepAlive: true,
    title: '首页'
  },
  {
    module: 'home',
    path: 'Search',
    title: '订货查询'
  },
  {
    module: 'home',
    path: 'OrderMenu',
    title: '今日菜单'
  }
]

export default Home
