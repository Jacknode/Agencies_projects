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
//个人收益
import AdminPersonalBenefits from '@/components/admin/AdminPersonalBenefits'

/*------------------------------------酒店----------------------------------------*/
//酒店管理系统

//酒店详情页
import HotelDetil from '@/components/hotel/HotelDetil'
//酒店推荐信息
import HotelQueryRecommend from '@/components/hotel/HotelQueryRecommend'
//酒店图片信息
import HotelImage from '@/components/hotel/HotelImage'
//酒店图片政策
import HotelPolicy from '@/components/hotel/HotelPolicy'
//酒店主题
import HotelTheme from '@/components/hotel/HotelTheme'
//酒店图标
import HotelIcon from '@/components/hotel/HotelIcon'


/*------------------------------------门票----------------------------------------*/
//门票景点
import TicketAttractions from '@/components/ticket/TicketAttractions'
//预定须知
import TicketPredeterminedInstructions from '@/components/ticket/TicketPredeterminedInstructions'
//交通信息
import TrafficInformation from '@/components/ticket/TrafficInformation'
//票种管理
import TicketType from '@/components/ticket/TicketType'
//票种票价管理
import TicketTypeTicketPrice from '@/components/ticket/TicketTypeTicketPrice'
//查询商户订单
import TicketQueryOrder from '@/components/ticket/TicketQueryOrder'
//申请显示在首页
import TicketApplyShowHomePage from '@/components/ticket/TicketApplyShowHomePage'

//美食
/*------------------------------------美食----------------------------------------*/


//美食店铺管理
import FoodStoreInformation from '@/components/food/FoodStoreInformation'
//店面房间餐桌时间
import FoodStorefrontRoomTableTime from '@/components/food/FoodStorefrontRoomTableTime'
//店面每天可锁桌时间
import FoodRoomTableTimeEveryDay from '@/components/food/FoodRoomTableTimeEveryDay'


//房间图片
import FoodStoreRoomPicture from '@/components/food/FoodStoreRoomPicture'
//美食推荐菜
import StoreRecommendFood from '@/components/food/StoreRecommendFood'
//店面产品
import FoodStoreProduct from '@/components/food/FoodStoreProduct'
//店面房间
import FoodStoreRoom  from '@/components/food/FoodStoreRoom'
//停车位
import FoodParkingSpace  from '@/components/food/FoodParkingSpace'
//房间餐桌
import FoodRoomTable  from '@/components/food/FoodRoomTable'
//产品图片
import FoodProductImg  from '@/components/food/FoodProductImg'











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
      //个人收益
      {
        path: 'adminPersonalBenefits',
        components: {
          default: Home,
          User: AdminPersonalBenefits
        },
        name: 'AdminPersonalBenefits'
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
      //酒店基本信息
      {
        path: 'hotelDetil',
        components: {
          default: Home,
          User: HotelDetil
        },
        name: 'HotelDetil'
      },
      //酒店图标
      {
        path: 'hotelIcon',
        components: {
          default: Home,
          User: HotelIcon
        },
        name: 'HotelIcon'
      },
      //酒店推荐信息
      {
        path: 'hotelQueryRecommend',
        components: {
          default: Home,
          User: HotelQueryRecommend
        },
        name: 'HotelQueryRecommend'
      },
      //酒店主题
      {
        path: 'hotelTheme',
        components: {
          default: Home,
          User: HotelTheme
        },
        name: 'HotelTheme'
      },
      //酒店政策信息
      {
        path: 'hotelPolicy',
        components: {
          default: Home,
          User: HotelPolicy
        },
        name: 'HotelPolicy'
      },
      //酒店图片信息

      {
        path: 'hotelImage',
        components: {
          default: Home,
          User: HotelImage
        },
        name: 'HotelImage'
      },
      //门票景点
      {
        path: 'ticketAttractions',
        components: {
          default: Home,
          User: TicketAttractions
        },
        name: 'TicketAttractions',
      },
      //预定须知
      {
        path: 'ticketPredeterminedInstructions',
        components: {
          default: Home,
          User: TicketPredeterminedInstructions
        },
        name: 'TicketPredeterminedInstructions',
      },
      //交通信息
      {
        path: 'trafficInformation',
        components: {
          default: Home,
          User: TrafficInformation
        },
        name: 'TrafficInformation',
      },
      //票种票价管理
      {
        path: 'ticketType',
        components: {
          default: Home,
          User: TicketType
        },
        name: 'TicketType',
      },
      //票种票价管理
      {
        path: 'ticketTypeTicketPrice',
        components: {
          default: Home,
          User: TicketTypeTicketPrice
        },
        name: 'TicketTypeTicketPrice',
      },
      //查询商户订单
      {
        path: 'ticketQueryOrder',
        components: {
          default: Home,
          User: TicketQueryOrder
        },
        name: 'TicketQueryOrder',
      },
      //申请显示在首页
      {
        path: 'ticketApplyShowHomePage',
        components: {
          default: Home,
          User: TicketApplyShowHomePage
        },
        name: 'TicketApplyShowHomePage',
      },

      //美食

      //美食管理
      {
        path: 'foodStoreInformation',
        components:{
          default:Home,
          User:FoodStoreInformation
        },
        name:'FoodStoreInformation'
      },

      //房间图片
      {
        path: 'foodStoreRoomPicture',
        components:{
          default:Home,
          User:FoodStoreRoomPicture
        },
        name:'FoodStoreRoomPicture'
      },
      //推荐菜
      {
        path: 'storeRecommendFood',
        components:{
          default:Home,
          User:StoreRecommendFood
        },
        name:'StoreRecommendFood'
      },
      //店面产品
      {
        path: 'foodStoreProduct',
        components:{
          default:Home,
          User:FoodStoreProduct
        },
        name:'FoodStoreProduct'
      },
      //店面房间
      {
        path: 'foodStoreRoom',
        components:{
          default:Home,
          User:FoodStoreRoom
        },
        name:'FoodStoreRoom'
      },
      //停车位
      {
        path: 'foodParkingSpace',
        components:{
          default:Home,
          User:FoodParkingSpace
        },
        name:'FoodParkingSpace'
      },
      //房间餐桌
      {
        path: 'foodRoomTable',
        components:{
          default:Home,
          User:FoodRoomTable
        },
        name:'FoodRoomTable'
      },
      //店面房间餐桌时间
      {
        path: 'foodStorefrontRoomTableTime',
        components:{
          default:Home,
          User:FoodStorefrontRoomTableTime
        },
        name:'FoodStorefrontRoomTableTime'
      },
      //店面每天可锁桌时间
      {
        path:'foodRoomTableTimeEveryDay',
        components:{
          default: Home,
          User: FoodRoomTableTimeEveryDay
        },
        name: 'FoodRoomTableTimeEveryDay'
      },

      //产品图片
      {
        path: 'foodProductImg',
        components:{
          default:Home,
          User:FoodProductImg
        },
        name:'FoodProductImg'
      }
    ],
  },


  {
    path: '*',
    hidden: true,
    redirect: { name: 'AdminBusinessInformation' }
  },
]
