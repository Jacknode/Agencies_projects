/**
 * Created by leibo on 18/1/2.
 */
//------------------------------------------------管理员------------------------------------------
// import AdminAllFunction2 from '@/views/admin/AdminAllFunction2'
// import Home from '@/views/public/newHome'
const Home = resolve => require.ensure([], () => resolve(require('@/views/public/newHome')));
const AdminAllFunction2 = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminAllFunction2')));
// const Home = () => import('@/views/public/Home')
// const newHome = () => import('@/views/public/newHome')
//登录
const adminLogin = resolve => require.ensure([], () => resolve(require('@/views/admin/Login')));
// import adminLogin from '@/views/admin/Login'
//时间活动
const AdminTimeActivities = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminTimeActivities')));
// import AdminTimeActivities from '@/views/admin/AdminTimeActivities'
//日程时间
const AdminScheduleTime = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminScheduleTime')));
// import AdminScheduleTime from '@/views/admin/AdminScheduleTime'
//产品线路
const AdminQueryProductInformation = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminQueryProductInformation')));
// import AdminQueryProductInformation from '@/views/admin/AdminQueryProductInformation'
//商家产品
const AdminMerchantProducts = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminMerchantProducts')));
// import AdminMerchantProducts from '@/views/admin/AdminMerchantProducts'
//跟团游栏目
const AdminGroupTour = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminGroupTour')));
// import AdminGroupTour from '@/views/admin/AdminGroupTour'
//商家信息
const AdminBusinessInformation = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminBusinessInformation')));
// import AdminBusinessInformation from '@/views/admin/AdminBusinessInformation'
//查询菜单
//产品线路下的所有内容
const AdminQueryProductInformationList = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminQueryProductInformationList')));
// import AdminQueryProductInformationList from '@/views/admin/AdminQueryProductInformationList'
//时间活动下的所有内容
const AdminTimeActivitiesList = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminTimeActivitiesList')));
// import AdminTimeActivitiesList from '@/views/admin/AdminTimeActivitiesList'
//系统菜单
//商家营业执照管理
const AdminBusinessLicense = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminBusinessLicense')));
// import AdminBusinessLicense from '@/views/admin/AdminBusinessLicense'
//评论类型
const AdminCommentsType = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminCommentsType')));
// import AdminCommentsType from '@/views/admin/AdminCommentsType'

//订单明细
const AdminOrderDetail = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminOrderDetail')));
// import AdminOrderDetail from '@/views/admin/AdminOrderDetail'
//交通信息
const TicketTrafficInformation = resolve => require.ensure([], () => resolve(require('@/views/ticket/TicketTrafficInformation')));
// import TicketTrafficInformation from '@/views/ticket/TicketTrafficInformation'

//供应商信息
const AdminUserInfo = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminUserInfo')));
// import AdminUserInfo from '@/views/admin/AdminUserInfo'
//个人收益
const AdminPersonalBenefits = resolve => require.ensure([], () => resolve(require('@/views/admin/AdminPersonalBenefits')));
// import AdminPersonalBenefits from '@/views/admin/AdminPersonalBenefits'

//酒店管理系统

//酒店详情页
const HotelDetil = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelDetil')));
// import HotelDetil from '@/views/hotel/HotelDetil'
//酒店推荐信息
const HotelQueryRecommend = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelQueryRecommend')));
// import HotelQueryRecommend from '@/views/hotel/HotelQueryRecommend'
//酒店图片信息
const HotelImage = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelImage')));
// import HotelImage from '@/views/hotel/HotelImage'
//酒店图片政策
const HotelPolicy = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelPolicy')));
// import HotelPolicy from '@/views/hotel/HotelPolicy'
//酒店主题
const HotelTheme = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelTheme')));
// import HotelTheme from '@/views/hotel/HotelTheme'
//酒店图标
const HotelIcon = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelIcon')));
// import HotelIcon from '@/views/hotel/HotelIcon'
//酒店房间
const HotelRoom = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelRoom')));
// import HotelRoom from '@/views/hotel/HotelRoom'
//酒店设施服务
const HotelFacilitiesServices = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelFacilitiesServices')));
// import HotelFacilitiesServices from '@/views/hotel/HotelFacilitiesServices'
//酒店设施服务设施
const HotelFacilitiesServicesFacilities = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelFacilitiesServicesFacilities')));
// import HotelFacilitiesServicesFacilities from '@/views/hotel/HotelFacilitiesServicesFacilities'
//酒店房间产品
const HotelRoomProduct = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelRoomProduct')));
// import HotelRoomProduct from '@/views/hotel/HotelRoomProduct'
//酒店房间房间设施
const HotelRoomRoomFacilities = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelRoomRoomFacilities')));
// import HotelRoomRoomFacilities from '@/views/hotel/HotelRoomRoomFacilities'
//酒店订单明细
const HotelOrderDetails = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelOrderDetails')));
// import HotelOrderDetails from '@/views/hotel/HotelOrderDetails'
//酒店确认订单
const HotelConfirmOrder = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelConfirmOrder')));
// import HotelConfirmOrder from '@/views/hotel/HotelConfirmOrder'
//酒店生成房间
const HotelRoomNumber = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelRoomNumber')));
// import HotelRoomNumber from '@/views/hotel/HotelRoomNumber'
//酒店批量生成房间
const HotelLotRoomNumber = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelLotRoomNumber')));
// import HotelLotRoomNumber from '@/views/hotel/HotelLotRoomNumber'
//酒店房间实体
const HotelRoomEntity = resolve => require.ensure([], () => resolve(require('@/views/hotel/HotelRoomEntity')));
// import HotelRoomEntity from '@/views/hotel/HotelRoomEntity'


/*------------------------------------门票----------------------------------------*/
//门票景点
const TicketAttractions = resolve => require.ensure([], () => resolve(require('@/views/ticket/TicketAttractions')));
// import TicketAttractions from '@/views/ticket/TicketAttractions'
//地图导览
const TicketMap = resolve => require.ensure([], () => resolve(require('@/views/ticket/TicketMap')));
// import TicketMap from '@/views/ticket/TicketMap'
//预定须知
const TicketPredeterminedInstructions = resolve => require.ensure([], () => resolve(require('@/views/ticket/TicketPredeterminedInstructions')));
// import TicketPredeterminedInstructions from '@/views/ticket/TicketPredeterminedInstructions'
//交通信息
//票种管理
const TicketType = resolve => require.ensure([], () => resolve(require('@/views/ticket/TicketType')));
// import TicketType from '@/views/ticket/TicketType'
//票种票价管理
const TicketTypeTicketPrice = resolve => require.ensure([], () => resolve(require('@/views/ticket/TicketTypeTicketPrice')));
// import TicketTypeTicketPrice from '@/views/ticket/TicketTypeTicketPrice'
//查询商户订单
const TicketQueryOrder = resolve => require.ensure([], () => resolve(require('@/views/ticket/TicketQueryOrder')));
// import TicketQueryOrder from '@/views/ticket/TicketQueryOrder'
//申请显示在首页
const TicketApplyShowHomePage = resolve => require.ensure([], () => resolve(require('@/views/ticket/TicketApplyShowHomePage')));
// import TicketApplyShowHomePage from '@/views/ticket/TicketApplyShowHomePage'

/*------------------------------------美食----------------------------------------*/

//店面信息
const FoodStoreInformation = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreInformation')));
// import FoodStoreInformation from '@/views/food/FoodStoreInformation'
//店面房间
const FoodStoreRoom = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreRoom')));
// import FoodStoreRoom  from '@/views/food/FoodStoreRoom'
//店面产品
const FoodStoreProduct = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreProduct')));
// import FoodStoreProduct from '@/views/food/FoodStoreProduct'
//房间图片
const FoodRoomPicture = resolve => require.ensure([], () => resolve(require('@/views/food/FoodRoomPicture')));
// import FoodRoomPicture from '@/views/food/FoodRoomPicture'
//店面图片
const FoodStorePicture = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStorePicture')));
// import FoodStorePicture from '@/views/food/FoodStorePicture'
//店面产品图片
const FoodStoreProductPicture = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreProductPicture')));
// import FoodStoreProductPicture from '@/views/food/FoodStoreProductPicture'
//房间餐桌
const FoodStoreRoomTabel = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreRoomTabel')));
// import FoodStoreRoomTabel from '@/views/food/FoodStoreRoomTabel'
//推荐菜
const FoodStoreRecommend = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreRecommend')));
// import FoodStoreRecommend from '@/views/food/FoodStoreRecommend'
//店面每天可锁桌时间
const FoodStoreTableTime = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreTableTime')));
// import FoodStoreTableTime from '@/views/food/FoodStoreTableTime'
//店面可订餐时间
const FoodStoreOrderingTime = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreOrderingTime')));
// import FoodStoreOrderingTime from '@/views/food/FoodStoreOrderingTime'
//查询订单
const FoodStoreConfirmOrder = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoreConfirmOrder')));
// import FoodStoreConfirmOrder from '@/views/food/FoodStoreConfirmOrder'
//停车场
const FoodStoppingPlace = resolve => require.ensure([], () => resolve(require('@/views/food/FoodStoppingPlace')));
// import  FoodStoppingPlace from '@/views/food/FoodStoppingPlace'





/*------------------------------------广告----------------------------------------*/
//广告申请管理
const AdApply = resolve => require.ensure([], () => resolve(require('@/views/adverts/AdApply')));
const CarHome = resolve => require.ensure([], () => resolve(require('@/views/car/CarHome')));
const CarStore = resolve => require.ensure([], () => resolve(require('@/views/car/CarStore')));
const CarProduct = resolve => require.ensure([], () => resolve(require('@/views/car/CarProduct')));
// import AdApply from '@/views/adverts/AdApply'

// import CarHome from '@/views/car/CarHome'
// import CarStore from '@/views/car/CarStore'
// import CarProduct from '@/views/car/CarProduct'
//公司汽车
const CarCompanyCar = resolve => require.ensure([], () => resolve(require('@/views/car/CarCompanyCar')));
// import CarCompanyCar from '@/views/car/CarCompanyCar'
//公司优惠政策
const CarPreferentialPolicies = resolve => require.ensure([], () => resolve(require('@/views/car/CarPreferentialPolicies')));
// import CarPreferentialPolicies from '@/views/car/CarPreferentialPolicies'
//公司订单明细
const CarOrderDetails = resolve => require.ensure([], () => resolve(require('@/views/car/CarOrderDetails')));
// import CarOrderDetails from '@/views/car/CarOrderDetails'
//公司确认订单
const CarConfirmOrder = resolve => require.ensure([], () => resolve(require('@/views/car/CarConfirmOrder')));
// import CarConfirmOrder from '@/views/car/CarConfirmOrder'

/*------------------------------------V电影----------------------------------------*/
//V电影审核表
const VMovieCheckTable = resolve => require.ensure([], () => resolve(require('@/views/movie/VMovieCheckTable')));
// import  VMovieCheckTable from '@/views/movie/VMovieCheckTable'
//V电影系列
const VMovieSeries = resolve => require.ensure([], () => resolve(require('@/views/movie/VMovieSeries')));
// import  VMovieSeries from '@/views/movie/VMovieSeries'
//V电影视频系列
const VMovieVideoSeries = resolve => require.ensure([], () => resolve(require('@/views/movie/VMovieVideoSeries')));
// import  VMovieVideoSeries from '@/views/movie/VMovieVideoSeries'
//V电影微电影
const VMovieMiniMovie = resolve => require.ensure([], () => resolve(require('@/views/movie/VMovieMiniMovie')));
// import  VMovieMiniMovie from '@/views/movie/VMovieMiniMovie'
//V电影分类
const VMovieSorting = resolve => require.ensure([], () => resolve(require('@/views/movie/VMovieSorting')));
// import  VMovieSorting from '@/views/movie/VMovieSorting'
//V电影视频分类
const VMovieVideoCategories = resolve => require.ensure([], () => resolve(require('@/views/movie/VMovieVideoCategories')));
// import  VMovieVideoCategories from '@/views/movie/VMovieVideoCategories'
//V电影视频
const VMovieVideo = resolve => require.ensure([], () => resolve(require('@/views/movie/VMovieVideo')));
// import  VMovieVideo from '@/views/movie/VMovieVideo'
//V电影系列分类
const VMovieSeriesCategories = resolve => require.ensure([], () => resolve(require('@/views/movie/VMovieSeriesCategories')));
// import  VMovieSeriesCategories from '@/views/movie/VMovieSeriesCategories'


/*------------------------------------旅行社----------------------------------------*/
//订单
const TravelAgencyOrder = resolve => require.ensure([], () => resolve(require('@/views/travelAgency/TravelAgencyOrder')));
/*------------------------------------酒店----------------------------------------*/


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
      default:Home
    },
    children: [
// <------------------------------------管理员------------------------------------------------------>
      //广告申请
      {
        path: 'adApply',
        components: {
          default:Home,
          User:AdApply
        },
        name: 'AdApply'
      },
// <------------------------------------旅行社------------------------------------------------------>
      {
        path: 'TravelAgencyOrder',
        components: {
          default:Home,
          User:TravelAgencyOrder
        },
        name: 'TravelAgencyOrder'
      },
// <------------------------------------租车------------------------------------------------------>
      {
        path: 'carHome',
        components: {
          default:Home,
          User:CarHome
        },
        name: 'CarHome'
      },
      {
        path: 'carStore',
        components: {
          default:Home,
          User:CarStore
        },
        name: 'CarStore'
      },
      {
        path: 'carPreferentialPolicies',
        components: {
          default:Home,
          User:CarPreferentialPolicies
        },
        name: 'CarPreferentialPolicies'
      },
      {
        path: 'carOrderDetails',
        components: {
          default:Home,
          User:CarOrderDetails
        },
        name: 'CarOrderDetails'
      },
      {
        path: 'carConfirmOrder',
        components: {
          default:Home,
          User:CarConfirmOrder
        },
        name: 'CarConfirmOrder'
      },
      {
        path: 'carProduct',
        components: {
          default:Home,
          User:CarProduct
        },
        name: 'CarProduct'
      },
      {
        path: 'carCompanyCar/:id/:carID',
        components: {
          default:Home,
          User:CarCompanyCar
        },
        name: 'CarCompanyCar'
      },
//       AdminActivitySite
      //线路日程
      {
        path: 'adminAllFunction2',
        components: {
          default: Home,
          User: AdminAllFunction2,
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
              Content:AdminQueryProductInformation
            },
            name: 'AdminQueryProductInformation'
          },
          //日程时间
          {
            path: 'adminScheduleTime',
            components: {
              default: Home,
              Content:AdminScheduleTime
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
      //旅行社订单明细
      {
        path: 'adminOrderDetail',
        components: {
          default: Home,
          User: AdminOrderDetail
        },
        name: 'AdminOrderDetail'
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
          User:AdminGroupTour
        },
        name: 'AdminGroupTour'
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
          User:HotelOrderDetails
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
          User:HotelRoomEntity
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
          User:HotelQueryRecommend
        },
        name: 'HotelQueryRecommend'
      },
      //酒店主题
      {
        path: 'hotelTheme',
        components: {
          default: Home,
          User:HotelTheme
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
      //地图导览
      {
        path: 'ticketMap',
        components: {
          default: Home,
          User: TicketMap
        },
        name: 'TicketMap',
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
        path: 'ticketTrafficInformation',
        components: {
          default: Home,
          User: TicketTrafficInformation
        },
        name: 'TicketTrafficInformation',
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
          User:TicketQueryOrder
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
          default: Home,
          User: FoodStoreInformation
        },
        name:'FoodStoreInformation'
      },
      //店面房间
      {
        path: 'foodStoreRoom',
        components:{
          default: Home,
          User: FoodStoreRoom
        },
        name:'FoodStoreRoom'
      },
      //店面产品
      {
        path: 'foodStoreProduct',
        components:{
          default: Home,
          User: FoodStoreProduct
        },
        name:'FoodStoreProduct'
      },
      //房间图片
      {
        path: 'foodRoomPicture',
        components:{
          default: Home,
          User: FoodRoomPicture
        },
        name:'FoodRoomPicture'
      },
      //产品图片
      {
        path: 'foodStorePicture',
        components:{
          default: Home,
          User: FoodStorePicture
        },
        name:'FoodStorePicture'
      },
      //房间餐桌
      {
        path: 'foodStoreRoomTabel',
        components:{
          default: Home,
          User: FoodStoreRoomTabel
        },
        name:'FoodStoreRoomTabel'
      },
      //推荐菜
      {
        path: 'foodStoreRecommend',
        components:{
          default: Home,
          User: FoodStoreRecommend
        },
        name:'FoodStoreRecommend'
      },
      //店面每天可锁桌时间
      {
        path: 'foodStoreTableTime',
        components:{
          default: Home,
          User: FoodStoreTableTime
        },
        name:'FoodStoreTableTime'
      },
      //店面可订餐时间
      {
        path: 'foodStoreOrderingTime',
        components:{
          default: Home,
          User: FoodStoreOrderingTime
        },
        name:'FoodStoreOrderingTime'
      },
      //查询订单
      {
        path: 'foodStoreConfirmOrder',
        components:{
          default: Home,
          User: FoodStoreConfirmOrder
        },
        name:'FoodStoreConfirmOrder'
      },
      //店面菜肴图片
      {
        path:'foodStoreProductPicture',
        components:{
          default: Home,
          User: FoodStoreProductPicture
        },
        name:'FoodStoreProductPicture'
      },
      //停车场
      {
        path:'foodStoppingPlace',
        components:{
          default: Home,
          User: FoodStoppingPlace
        },
        name:'FoodStoppingPlace'
      },
      // <------------------------------------V电影------------------------------------------------------>
      {
        path: 'vMovieCheckTable',
        components: {
          default:Home,
          User:VMovieCheckTable
        },
        name: 'VMovieCheckTable'
      },
      {
        path: 'vMovieSeries',
        components: {
          default:Home,
          User:VMovieSeries
        },
        name: 'VMovieSeries'
      },
      {
        path: 'vMovieVideoSeries',
        components: {
          default:Home,
          User:VMovieVideoSeries
        },
        name: 'VMovieVideoSeries'
      },
      {
        path: 'vMovieMiniMovie',
        components: {
          default:Home,
          User:VMovieMiniMovie
        },
        name: 'VMovieMiniMovie'
      },
      {
        path: 'vMovieSorting',
        components: {
          default:Home,
          User:VMovieSorting
        },
        name: 'VMovieSorting'
      },
      {
        path: 'vMovieVideoCategories',
        components: {
          default:Home,
          User:VMovieVideoCategories
        },
        name: 'VMovieVideoCategories'
      },
      {
        path: 'vMovieVideo',
        components: {
          default:Home,
          User:VMovieVideo
        },
        name: 'VMovieVideo'
      },
      {
        path: 'vMovieSeriesCategories',
        components: {
          default:Home,
          User:VMovieSeriesCategories
        },
        name: 'VMovieSeriesCategories'
      },
    ],
  },


  {
    path: '*',
    hidden: true,
    redirect: { name: 'AdminBusinessInformation' }
  },

]
