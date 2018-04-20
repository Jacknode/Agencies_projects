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
//酒店房间
import HotelRoom from '@/components/hotel/HotelRoom'
//酒店设施服务
import HotelFacilitiesServices from '@/components/hotel/HotelFacilitiesServices'
//酒店设施服务设施
import HotelFacilitiesServicesFacilities from '@/components/hotel/HotelFacilitiesServicesFacilities'
//酒店房间产品
import HotelRoomProduct from '@/components/hotel/HotelRoomProduct'
//酒店房间房间设施
import HotelRoomRoomFacilities from '@/components/hotel/HotelRoomRoomFacilities'
//酒店订单明细
import HotelOrderDetails from '@/components/hotel/HotelOrderDetails'
//酒店确认订单
import HotelConfirmOrder from '@/components/hotel/HotelConfirmOrder'
//酒店生成房间
import HotelRoomNumber from '@/components/hotel/HotelRoomNumber'
//酒店批量生成房间
import HotelLotRoomNumber from '@/components/hotel/HotelLotRoomNumber'
//酒店房间实体
import HotelRoomEntity from '@/components/hotel/HotelRoomEntity'


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

/*------------------------------------美食----------------------------------------*/

//店面信息
import FoodStoreInformation from '@/components/food/FoodStoreInformation'
//店面房间
import FoodStoreRoom  from '@/components/food/FoodStoreRoom'
//店面产品
import FoodStoreProduct from '@/components/food/FoodStoreProduct'
//房间图片
import FoodRoomPicture from '@/components/food/FoodRoomPicture'
//店面图片
import FoodStorePicture from '@/components/food/FoodStorePicture'
//店面产品图片
import FoodStoreProductPicture from '@/components/food/FoodStoreProductPicture'
//房间餐桌
import FoodStoreRoomTabel from '@/components/food/FoodStoreRoomTabel'
//推荐菜
import FoodStoreRecommend from '@/components/food/FoodStoreRecommend'
//店面每天可锁桌时间
import FoodStoreTableTime from '@/components/food/FoodStoreTableTime'
//店面可订餐时间
import FoodStoreOrderingTime from '@/components/food/FoodStoreOrderingTime'
//查询订单
import FoodStoreConfirmOrder from '@/components/food/FoodStoreConfirmOrder'
//停车场
import  FoodStoppingPlace from '@/components/food/FoodStoppingPlace'





/*------------------------------------广告----------------------------------------*/
//广告申请管理
import AdApply from '@/components/adverts/AdApply'









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
      //广告申请
      {
        path: 'adApply',
        components: {
          default: Home,
          User: AdApply
        },
        name: 'AdApply'
      },
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
      //酒店订单明细
      {
        path: 'hotelOrderDetails',
        components: {
          default: Home,
          User: HotelOrderDetails
        },
        name: 'HotelOrderDetails'
      },
      //酒店确认订单
      {
        path: 'hotelConfirmOrder',
        components: {
          default: Home,
          User: HotelConfirmOrder
        },
        name: 'HotelConfirmOrder'
      },
      //酒店生成房间
      {
        path: 'hotelRoomNumber/:id',
        components: {
          default: Home,
          User: HotelRoomNumber
        },
        name: 'HotelRoomNumber'
      },
      //酒店批量生成房间
      {
        path: 'hotelLotRoomNumber/:id',
        components: {
          default: Home,
          User: HotelLotRoomNumber
        },
        name: 'HotelLotRoomNumber'
      },
      //酒店房间实体
      {
        path: 'hotelRoomEntity/:id',
        components: {
          default: Home,
          User: HotelRoomEntity
        },
        name: 'HotelRoomEntity'
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
      //酒店房间
      {
        path: 'hotelRoom',
        components: {
          default: Home,
          User: HotelRoom
        },
        name: 'HotelRoom'
      },
      //酒店房间产品
      {
        path: 'hotelRoomProduct/:id',
        components: {
          default: Home,
          User: HotelRoomProduct
        },
        name: 'HotelRoomProduct'
      },
      //酒店房间房间设施
      {
        path: 'hotelRoomRoomFacilities/:id',
        components: {
          default: Home,
          User: HotelRoomRoomFacilities
        },
        name: 'HotelRoomRoomFacilities'
      },
      //酒店设施服务
      {
        path: 'hotelFacilitiesServices',
        components: {
          default: Home,
          User: HotelFacilitiesServices
        },
        name: 'HotelFacilitiesServices'
      },
      //酒店设施服务设施
      {
        path: 'hotelFacilitiesServicesFacilities',
        components: {
          default: Home,
          User: HotelFacilitiesServicesFacilities
        },
        name: 'HotelFacilitiesServicesFacilities'
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
      //店面房间
      {
        path: 'foodStoreRoom',
        components:{
          default:Home,
          User:FoodStoreRoom
        },
        name:'FoodStoreRoom'
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
      //房间图片
      {
        path: 'foodRoomPicture',
        components:{
          default:Home,
          User:FoodRoomPicture
        },
        name:'FoodRoomPicture'
      },
      //产品图片
      {
        path: 'foodStorePicture',
        components:{
          default:Home,
          User:FoodStorePicture
        },
        name:'FoodStorePicture'
      },
      //房间餐桌
      {
        path: 'foodStoreRoomTabel',
        components:{
          default:Home,
          User:FoodStoreRoomTabel
        },
        name:'FoodStoreRoomTabel'
      },
      //推荐菜
      {
        path: 'foodStoreRecommend',
        components:{
          default:Home,
          User:FoodStoreRecommend
        },
        name:'FoodStoreRecommend'
      },
      //店面每天可锁桌时间
      {
        path: 'foodStoreTableTime',
        components:{
          default:Home,
          User:FoodStoreTableTime
        },
        name:'FoodStoreTableTime'
      },
      //店面可订餐时间
      {
        path: 'foodStoreOrderingTime',
        components:{
          default:Home,
          User:FoodStoreOrderingTime
        },
        name:'FoodStoreOrderingTime'
      },
      //查询订单
      {
        path: 'foodStoreConfirmOrder',
        components:{
          default:Home,
          User:FoodStoreConfirmOrder
        },
        name:'FoodStoreConfirmOrder'
      },
      //店面菜肴图片
      {
        path:'foodStoreProductPicture',
        components:{
          default:Home,
          User:FoodStoreProductPicture
        },
        name:'FoodStoreProductPicture'
      },
      //停车场
      {
        path:'foodStoppingPlace',
        components:{
          default:Home,
          User:FoodStoppingPlace
        },
        name:'FoodStoppingPlace'
      }
    ],
  },


  {
    path: '*',
    hidden: true,
    redirect: { name: 'AdminBusinessInformation' }
  },

]
