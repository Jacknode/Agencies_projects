/**
 * Created by leibo on 18/1/2.
 */
//------------------------------------------------管理员------------------------------------------
import AdminAllFunction2 from '@/components/admin/AdminAllFunction2'
import Home from '@/components/public/Home'
//登录
import adminLogin from '@/components/admin/Login'
//时间活动
import AdminTimeActivities from '@/components/admin/AdminTimeActivities'
//日程时间
import AdminScheduleTime from '@/components/admin/AdminScheduleTime'
//产品线路
import AdminQueryProductInformation from '@/components/admin/AdminQueryProductInformation'
//商家产品
import AdminMerchantProducts from '@/components/admin/AdminMerchantProducts'
//跟团游栏目
import AdminGroupTour from '@/components/admin/AdminGroupTour'
//商家信息
import AdminBusinessInformation from '@/components/admin/AdminBusinessInformation'
//查询菜单
import AdminProductMenu from '@/components/admin/AdminProductMenu'
//产品线路下的所有内容
import AdminQueryProductInformationList from '@/components/admin/AdminQueryProductInformationList'
//时间活动下的所有内容
import AdminTimeActivitiesList from '@/components/admin/AdminTimeActivitiesList'
//系统菜单
import AdminSystemMenu from '@/components/admin/AdminSystemMenu'
//商家营业执照管理
import AdminBusinessLicense from '@/components/admin/AdminBusinessLicense'
//评论类型
import AdminCommentsType from '@/components/admin/AdminCommentsType'

//供应商信息
import AdminUserInfo from '@/components/admin/AdminUserInfo'

export default [
  {
    path: '/',
    name: 'adminLogin',
    component: adminLogin
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home
    },
    children: [
// <------------------------------------管理员------------------------------------------------------>
//       AdminActivitySite
      //线路日程
      {
        path: 'adminAllFunction2',
        components: {
          default: Home,
          User: AdminAllFunction2
        },
        name: 'AdminAllFunction2',
        children:[
          //商家信息
          {
            path: 'adminBusinessInformation',
            components: {
              default: Home,
              Content: AdminBusinessInformation
            },
            name: 'AdminBusinessInformation'
          },

          //产品线路下的所有东西
          {
            path: 'adminQueryProductInformationList',
            components: {
              default: Home,
              Content: AdminQueryProductInformationList
            },
            name: 'AdminQueryProductInformationList'
          },
          //产品线路下的所有东西AdminTimeActivitiesList
          {
            path: 'adminTimeActivitiesList',
            components: {
              default: Home,
              Content: AdminTimeActivitiesList
            },
            name: 'AdminTimeActivitiesList'
          },
          //商家产品
          {
            path: 'adminMerchantProducts',
            components: {
              default: Home,
              Content: AdminMerchantProducts
            },
            name: 'AdminMerchantProducts'
          },
          //产品线路
          {
            path: 'adminQueryProductInformation',
            components: {
              default: Home,
              Content: AdminQueryProductInformation
            },
            name: 'AdminQueryProductInformation'
          },
          //日程时间
          {
            path: 'adminScheduleTime',
            components: {
              default: Home,
              Content: AdminScheduleTime
            },
            name: 'AdminScheduleTime'
          },
          //时间活动
          {
            path: 'adminTimeActivities',
            components: {
              default: Home,
              Content: AdminTimeActivities
            },
            name: 'AdminTimeActivities'
          },
        ]
      },
      //供应商信息
      {
        path: 'adminUserInfo',
        components: {
          default: Home,
          User: AdminUserInfo
        },
        name: 'AdminUserInfo'
      },

      //跟团游栏目
      {
        path: 'adminGroupTour',
        components: {
          default: Home,
          User: AdminGroupTour
        },
        name: 'AdminGroupTour'
      },

      //查询菜单
      {
        path: 'adminProductMenu',
        components: {
          default: Home,
          User: AdminProductMenu
        },
        name: 'AdminProductMenu'
      },

      //查询菜单
      {
        path: 'adminBusinessLicense',
        components: {
          default: Home,
          User: AdminBusinessLicense
        },
        name: 'AdminBusinessLicense'
      },
      //系统菜单
      {
        path: 'adminSystemMenu',
        components: {
          default: Home,
          User: AdminSystemMenu
        },
        name: 'AdminSystemMenu'
      },
      {
        path: 'adminCommentsType',
        components: {
          default: Home,
          User: AdminCommentsType
        },
        name: 'AdminCommentsType'
      },
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { name: 'AdminBusinessInformation' }
  },
]
