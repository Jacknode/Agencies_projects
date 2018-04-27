/**
 * Created by leibo on 18/1/2.
 */
//------------------------------------------------管理员------------------------------------------
// import AdminAllFunction2 from '@/components/admin/AdminAllFunction2'
import Home from '@/components/public/Home'
//登录
// import adminLogin from '@/components/admin/Login'
//时间活动
// import AdminTimeActivities from '@/components/admin/AdminTimeActivities'
//日程时间
// import AdminScheduleTime from '@/components/admin/AdminScheduleTime'
//产品线路
// import AdminQueryProductInformation from '@/components/admin/AdminQueryProductInformation'
//商家产品
// import AdminMerchantProducts from '@/components/admin/AdminMerchantProducts'
//跟团游栏目
// import AdminGroupTour from '@/components/admin/AdminGroupTour'
//商家信息
// import AdminBusinessInformation from '@/components/admin/AdminBusinessInformation'
//查询菜单
// import AdminProductMenu from '@/components/admin/AdminProductMenu'
//产品线路下的所有内容
// import AdminQueryProductInformationList from '@/components/admin/AdminQueryProductInformationList'
//时间活动下的所有内容
// import AdminTimeActivitiesList from '@/components/admin/AdminTimeActivitiesList'
//系统菜单
// import AdminSystemMenu from '@/components/admin/AdminSystemMenu'
//商家营业执照管理
// import AdminBusinessLicense from '@/components/admin/AdminBusinessLicense'
//评论类型
// import AdminCommentsType from '@/components/admin/AdminCommentsType'

//供应商信息
import AdminUserInfo from '@/components/admin/AdminUserInfo'
//个人收益
// import AdminPersonalBenefits from '@/components/admin/AdminPersonalBenefits'

/*------------------------------------酒店----------------------------------------*/
//酒店管理系统

//酒店详情页
// import HotelDetil from '@/components/hotel/HotelDetil'
//酒店推荐信息
// import HotelQueryRecommend from '@/components/hotel/HotelQueryRecommend'
//酒店图片信息
// import HotelImage from '@/components/hotel/HotelImage'
//酒店图片政策
// import HotelPolicy from '@/components/hotel/HotelPolicy'
//酒店主题
// import HotelTheme from '@/components/hotel/HotelTheme'
//酒店图标
// import HotelIcon from '@/components/hotel/HotelIcon'
//酒店房间
// import HotelRoom from '@/components/hotel/HotelRoom'
//酒店设施服务
// import HotelFacilitiesServices from '@/components/hotel/HotelFacilitiesServices'
//酒店设施服务设施
// import HotelFacilitiesServicesFacilities from '@/components/hotel/HotelFacilitiesServicesFacilities'
//酒店房间产品
// import HotelRoomProduct from '@/components/hotel/HotelRoomProduct'
//酒店房间房间设施
// import HotelRoomRoomFacilities from '@/components/hotel/HotelRoomRoomFacilities'
//酒店订单明细
// import HotelOrderDetails from '@/components/hotel/HotelOrderDetails'
//酒店确认订单
// import HotelConfirmOrder from '@/components/hotel/HotelConfirmOrder'
//酒店生成房间
// import HotelRoomNumber from '@/components/hotel/HotelRoomNumber'
//酒店批量生成房间
// import HotelLotRoomNumber from '@/components/hotel/HotelLotRoomNumber'
//酒店房间实体
// import HotelRoomEntity from '@/components/hotel/HotelRoomEntity'


/*------------------------------------门票----------------------------------------*/
//门票景点
// import TicketAttractions from '@/components/ticket/TicketAttractions'
//预定须知
// import TicketPredeterminedInstructions from '@/components/ticket/TicketPredeterminedInstructions'
//交通信息
//票种管理
// import TicketType from '@/components/ticket/TicketType'
//票种票价管理
// import TicketTypeTicketPrice from '@/components/ticket/TicketTypeTicketPrice'
//查询商户订单
// import TicketQueryOrder from '@/components/ticket/TicketQueryOrder'
//申请显示在首页
// import TicketApplyShowHomePage from '@/components/ticket/TicketApplyShowHomePage'

/*------------------------------------美食----------------------------------------*/

//店面信息
// import FoodStoreInformation from '@/components/food/FoodStoreInformation'
//店面房间
// import FoodStoreRoom  from '@/components/food/FoodStoreRoom'
//店面产品
// import FoodStoreProduct from '@/components/food/FoodStoreProduct'
//房间图片
// import FoodRoomPicture from '@/components/food/FoodRoomPicture'
//店面图片
// import FoodStorePicture from '@/components/food/FoodStorePicture'
//店面产品图片
// import FoodStoreProductPicture from '@/components/food/FoodStoreProductPicture'
//房间餐桌
// import FoodStoreRoomTabel from '@/components/food/FoodStoreRoomTabel'
//推荐菜
// import FoodStoreRecommend from '@/components/food/FoodStoreRecommend'
//店面每天可锁桌时间
// import FoodStoreTableTime from '@/components/food/FoodStoreTableTime'
//店面可订餐时间
// import FoodStoreOrderingTime from '@/components/food/FoodStoreOrderingTime'
//查询订单
// import FoodStoreConfirmOrder from '@/components/food/FoodStoreConfirmOrder'
//停车场
// import  FoodStoppingPlace from '@/components/food/FoodStoppingPlace'





/*------------------------------------广告----------------------------------------*/
//广告申请管理
// import AdApply from '@/components/adverts/AdApply'









export default [
  {
    path: '/',
    name: 'adminLogin',
    component: (resolve) => require(['@/components/admin/Login'],resolve)
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default:(resolve) => require(['@/components/public/Home'],resolve)
    },
    children: [
// <------------------------------------管理员------------------------------------------------------>
      //广告申请
      {
        path: 'adApply',
        components: {
          default:(resolve) => require(['@/components/public/Home'],resolve),
          User:(resolve) => require(['@/components/adverts/AdApply'],resolve)
        },
        name: 'AdApply'
      },
//       AdminActivitySite
      //线路日程
      {
        path: 'adminAllFunction2',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/admin/AdminAllFunction2'],resolve),
        },
        name: 'AdminAllFunction2',
        children:[
          //商家信息
          {
            path: 'adminBusinessInformation',
            components: {
              default: (resolve) => require(['@/components/public/Home'],resolve),
              Content: (resolve) => require(['@/components/admin/AdminBusinessInformation'],resolve)
            },
            name: 'AdminBusinessInformation'
          },

          //产品线路下的所有东西
          {
            path: 'adminQueryProductInformationList',
            components: {
              default: (resolve) => require(['@/components/public/Home'],resolve),
              Content: (resolve) => require(['@/components/admin/AdminQueryProductInformationList'],resolve)
            },
            name: 'AdminQueryProductInformationList'
          },
          //产品线路下的所有东西AdminTimeActivitiesList
          {
            path: 'adminTimeActivitiesList',
            components: {
              default: (resolve) => require(['@/components/public/Home'],resolve),
              Content: (resolve) => require(['@/components/admin/AdminTimeActivitiesList'],resolve)
            },
            name: 'AdminTimeActivitiesList'
          },
          //商家产品
          {
            path: 'adminMerchantProducts',
            components: {
              default: (resolve) => require(['@/components/public/Home'],resolve),
              Content: (resolve) => require(['@/components/admin/AdminMerchantProducts'],resolve)
            },
            name: 'AdminMerchantProducts'
          },
          //产品线路
          {
            path: 'adminQueryProductInformation',
            components: {
              default: (resolve) => require(['@/components/public/Home'],resolve),
              Content: (resolve) => require(['@/components/admin/AdminQueryProductInformation'],resolve)
            },
            name: 'AdminQueryProductInformation'
          },
          //日程时间
          {
            path: 'adminScheduleTime',
            components: {
              default: (resolve) => require(['@/components/public/Home'],resolve),
              Content: (resolve) => require(['@/components/admin/AdminScheduleTime'],resolve)
            },
            name: 'AdminScheduleTime'
          },
          //时间活动
          {
            path: 'adminTimeActivities',
            components: {
              default: (resolve) => require(['@/components/public/Home'],resolve),
              Content: (resolve) => require(['@/components/admin/AdminTimeActivities'],resolve)
            },
            name: 'AdminTimeActivities'
          },
        ]
      },
      //供应商信息
      {
        path: 'adminUserInfo',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/admin/AdminUserInfo'],resolve)
        },
        name: 'AdminUserInfo'
      },
      //个人收益
      {
        path: 'adminPersonalBenefits',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/admin/AdminPersonalBenefits'],resolve)
        },
        name: 'AdminPersonalBenefits'
      },

      //跟团游栏目
      {
        path: 'adminGroupTour',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/admin/AdminGroupTour'],resolve)
        },
        name: 'AdminGroupTour'
      },

      //查询菜单
      {
        path: 'adminProductMenu',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/admin/AdminProductMenu'],resolve)
        },
        name: 'AdminProductMenu'
      },

      //查询菜单
      {
        path: 'adminBusinessLicense',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/admin/AdminBusinessLicense'],resolve)
        },
        name: 'AdminBusinessLicense'
      },
      //系统菜单
      {
        path: 'adminSystemMenu',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/admin/AdminSystemMenu'],resolve)
        },
        name: 'AdminSystemMenu'
      },
      {
        path: 'adminCommentsType',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/admin/AdminCommentsType'],resolve)
        },
        name: 'AdminCommentsType'
      },
      //酒店基本信息
      {
        path: 'hotelDetil',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelDetil'],resolve)
        },
        name: 'HotelDetil'
      },
      //酒店订单明细
      {
        path: 'hotelOrderDetails',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelOrderDetails'],resolve)
        },
        name: 'HotelOrderDetails'
      },
      //酒店确认订单
      {
        path: 'hotelConfirmOrder',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelConfirmOrder'],resolve)
        },
        name: 'HotelConfirmOrder'
      },
      //酒店生成房间
      {
        path: 'hotelRoomNumber/:id',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelRoomNumber'],resolve)
        },
        name: 'HotelRoomNumber'
      },
      //酒店批量生成房间
      {
        path: 'hotelLotRoomNumber/:id',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelLotRoomNumber'],resolve)
        },
        name: 'HotelLotRoomNumber'
      },
      //酒店房间实体
      {
        path: 'hotelRoomEntity/:id',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelRoomEntity'],resolve)
        },
        name: 'HotelRoomEntity'
      },
      //酒店图标
      {
        path: 'hotelIcon',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelIcon'],resolve)
        },
        name: 'HotelIcon'
      },
      //酒店房间
      {
        path: 'hotelRoom',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelRoom'],resolve)
        },
        name: 'HotelRoom'
      },
      //酒店房间产品
      {
        path: 'hotelRoomProduct/:id',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelRoomProduct'],resolve)
        },
        name: 'HotelRoomProduct'
      },
      //酒店房间房间设施
      {
        path: 'hotelRoomRoomFacilities/:id',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelRoomRoomFacilities'],resolve)
        },
        name: 'HotelRoomRoomFacilities'
      },
      //酒店设施服务
      {
        path: 'hotelFacilitiesServices',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelFacilitiesServices'],resolve)
        },
        name: 'HotelFacilitiesServices'
      },
      //酒店设施服务设施
      {
        path: 'hotelFacilitiesServicesFacilities',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelFacilitiesServicesFacilities'],resolve)
        },
        name: 'HotelFacilitiesServicesFacilities'
      },
      //酒店推荐信息
      {
        path: 'hotelQueryRecommend',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelQueryRecommend'],resolve)
        },
        name: 'HotelQueryRecommend'
      },
      //酒店主题
      {
        path: 'hotelTheme',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelTheme'],resolve)
        },
        name: 'HotelTheme'
      },
      //酒店政策信息
      {
        path: 'hotelPolicy',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelPolicy'],resolve)
        },
        name: 'HotelPolicy'
      },
      //酒店图片信息

      {
        path: 'hotelImage',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/hotel/HotelImage'],resolve)
        },
        name: 'HotelImage'
      },
      //门票景点
      {
        path: 'ticketAttractions',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/ticket/TicketAttractions'],resolve)
        },
        name: 'TicketAttractions',
      },
      //预定须知
      {
        path: 'ticketPredeterminedInstructions',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/ticket/TicketPredeterminedInstructions'],resolve)
        },
        name: 'TicketPredeterminedInstructions',
      },
      //交通信息
      {
        path: 'ticketTrafficInformation',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/ticket/TicketTrafficInformation'],resolve)
        },
        name: 'TicketTrafficInformation',
      },
      //票种票价管理
      {
        path: 'ticketType',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/ticket/TicketType'],resolve)
        },
        name: 'TicketType',
      },
      //票种票价管理
      {
        path: 'ticketTypeTicketPrice',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/ticket/TicketTypeTicketPrice'],resolve)
        },
        name: 'TicketTypeTicketPrice',
      },
      //查询商户订单
      {
        path: 'ticketQueryOrder',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/ticket/TicketQueryOrder'],resolve)
        },
        name: 'TicketQueryOrder',
      },
      //申请显示在首页
      {
        path: 'ticketApplyShowHomePage',
        components: {
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/ticket/TicketApplyShowHomePage'],resolve)
        },
        name: 'TicketApplyShowHomePage',
      },

      //美食

      //美食管理
      {
        path: 'foodStoreInformation',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreInformation'],resolve)
        },
        name:'FoodStoreInformation'
      },
      //店面房间
      {
        path: 'foodStoreRoom',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreRoom'],resolve)
        },
        name:'FoodStoreRoom'
      },
      //店面产品
      {
        path: 'foodStoreProduct',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreProduct'],resolve)
        },
        name:'FoodStoreProduct'
      },
      //房间图片
      {
        path: 'foodRoomPicture',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodRoomPicture'],resolve)
        },
        name:'FoodRoomPicture'
      },
      //产品图片
      {
        path: 'foodStorePicture',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStorePicture'],resolve)
        },
        name:'FoodStorePicture'
      },
      //房间餐桌
      {
        path: 'foodStoreRoomTabel',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreRoomTabel'],resolve)
        },
        name:'FoodStoreRoomTabel'
      },
      //推荐菜
      {
        path: 'foodStoreRecommend',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreRecommend'],resolve)
        },
        name:'FoodStoreRecommend'
      },
      //店面每天可锁桌时间
      {
        path: 'foodStoreTableTime',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreTableTime'],resolve)
        },
        name:'FoodStoreTableTime'
      },
      //店面可订餐时间
      {
        path: 'foodStoreOrderingTime',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreOrderingTime'],resolve)
        },
        name:'FoodStoreOrderingTime'
      },
      //查询订单
      {
        path: 'foodStoreConfirmOrder',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreConfirmOrder'],resolve)
        },
        name:'FoodStoreConfirmOrder'
      },
      //店面菜肴图片
      {
        path:'foodStoreProductPicture',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoreProductPicture'],resolve)
        },
        name:'FoodStoreProductPicture'
      },
      //停车场
      {
        path:'foodStoppingPlace',
        components:{
          default: (resolve) => require(['@/components/public/Home'],resolve),
          User: (resolve) => require(['@/components/food/FoodStoppingPlace'],resolve)
        },
        name:'FoodStoppingPlace'
      },
    ],
  },


  {
    path: '*',
    hidden: true,
    redirect: { name: 'AdminBusinessInformation' }
  },

]
