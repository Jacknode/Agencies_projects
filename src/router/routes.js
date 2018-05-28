/**
 * Created by leibo on 18/1/2.
 */
//------------------------------------------------管理员------------------------------------------
// import AdminAllFunction2 from '@/components/admin/AdminAllFunction2'
// import Home from '@/components/public/newHome'
const Home = resolve => require.ensure([], () => resolve(require('@/components/public/newHome')));
const AdminAllFunction2 = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminAllFunction2')));
// const Home = () => import('@/components/public/Home')
// const newHome = () => import('@/components/public/newHome')
//登录
const adminLogin = resolve => require.ensure([], () => resolve(require('@/components/admin/Login')));
// import adminLogin from '@/components/admin/Login'
//时间活动
const AdminTimeActivities = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminTimeActivities')));
// import AdminTimeActivities from '@/components/admin/AdminTimeActivities'
//日程时间
const AdminScheduleTime = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminScheduleTime')));
// import AdminScheduleTime from '@/components/admin/AdminScheduleTime'
//产品线路
const AdminQueryProductInformation = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminQueryProductInformation')));
// import AdminQueryProductInformation from '@/components/admin/AdminQueryProductInformation'
//商家产品
const AdminMerchantProducts = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminMerchantProducts')));
// import AdminMerchantProducts from '@/components/admin/AdminMerchantProducts'
//跟团游栏目
const AdminGroupTour = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminGroupTour')));
// import AdminGroupTour from '@/components/admin/AdminGroupTour'
//商家信息
const AdminBusinessInformation = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminBusinessInformation')));
// import AdminBusinessInformation from '@/components/admin/AdminBusinessInformation'
//查询菜单
//产品线路下的所有内容
const AdminQueryProductInformationList = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminQueryProductInformationList')));
// import AdminQueryProductInformationList from '@/components/admin/AdminQueryProductInformationList'
//时间活动下的所有内容
const AdminTimeActivitiesList = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminTimeActivitiesList')));
// import AdminTimeActivitiesList from '@/components/admin/AdminTimeActivitiesList'
//系统菜单
//商家营业执照管理
const AdminBusinessLicense = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminBusinessLicense')));
// import AdminBusinessLicense from '@/components/admin/AdminBusinessLicense'
//评论类型
const AdminCommentsType = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminCommentsType')));
// import AdminCommentsType from '@/components/admin/AdminCommentsType'

//订单明细
const AdminOrderDetail = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminOrderDetail')));
// import AdminOrderDetail from '@/components/admin/AdminOrderDetail'
//交通信息
const TicketTrafficInformation = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketTrafficInformation')));
// import TicketTrafficInformation from '@/components/ticket/TicketTrafficInformation'

//供应商信息
const AdminUserInfo = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminUserInfo')));
// import AdminUserInfo from '@/components/admin/AdminUserInfo'
//个人收益
const AdminPersonalBenefits = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminPersonalBenefits')));
// import AdminPersonalBenefits from '@/components/admin/AdminPersonalBenefits'

//酒店管理系统

//酒店详情页
const HotelDetil = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelDetil')));
// import HotelDetil from '@/components/hotel/HotelDetil'
//酒店推荐信息
const HotelQueryRecommend = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelQueryRecommend')));
// import HotelQueryRecommend from '@/components/hotel/HotelQueryRecommend'
//酒店图片信息
const HotelImage = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelImage')));
// import HotelImage from '@/components/hotel/HotelImage'
//酒店图片政策
const HotelPolicy = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelPolicy')));
// import HotelPolicy from '@/components/hotel/HotelPolicy'
//酒店主题
const HotelTheme = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelTheme')));
// import HotelTheme from '@/components/hotel/HotelTheme'
//酒店图标
const HotelIcon = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelIcon')));
// import HotelIcon from '@/components/hotel/HotelIcon'
//酒店房间
const HotelRoom = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelRoom')));
// import HotelRoom from '@/components/hotel/HotelRoom'
//酒店设施服务
const HotelFacilitiesServices = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelFacilitiesServices')));
// import HotelFacilitiesServices from '@/components/hotel/HotelFacilitiesServices'
//酒店设施服务设施
const HotelFacilitiesServicesFacilities = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelFacilitiesServicesFacilities')));
// import HotelFacilitiesServicesFacilities from '@/components/hotel/HotelFacilitiesServicesFacilities'
//酒店房间产品
const HotelRoomProduct = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelRoomProduct')));
// import HotelRoomProduct from '@/components/hotel/HotelRoomProduct'
//酒店房间房间设施
const HotelRoomRoomFacilities = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelRoomRoomFacilities')));
// import HotelRoomRoomFacilities from '@/components/hotel/HotelRoomRoomFacilities'
//酒店订单明细
const HotelOrderDetails = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelOrderDetails')));
// import HotelOrderDetails from '@/components/hotel/HotelOrderDetails'
//酒店确认订单
const HotelConfirmOrder = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelConfirmOrder')));
// import HotelConfirmOrder from '@/components/hotel/HotelConfirmOrder'
//酒店生成房间
const HotelRoomNumber = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelRoomNumber')));
// import HotelRoomNumber from '@/components/hotel/HotelRoomNumber'
//酒店批量生成房间
const HotelLotRoomNumber = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelLotRoomNumber')));
// import HotelLotRoomNumber from '@/components/hotel/HotelLotRoomNumber'
//酒店房间实体
const HotelRoomEntity = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelRoomEntity')));
// import HotelRoomEntity from '@/components/hotel/HotelRoomEntity'


/*------------------------------------门票----------------------------------------*/
//门票景点
const TicketAttractions = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketAttractions')));
// import TicketAttractions from '@/components/ticket/TicketAttractions'
//地图导览
const TicketMap = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketMap')));
// import TicketMap from '@/components/ticket/TicketMap'
//预定须知
const TicketPredeterminedInstructions = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketPredeterminedInstructions')));
// import TicketPredeterminedInstructions from '@/components/ticket/TicketPredeterminedInstructions'
//交通信息
//票种管理
const TicketType = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketType')));
// import TicketType from '@/components/ticket/TicketType'
//票种票价管理
const TicketTypeTicketPrice = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketTypeTicketPrice')));
// import TicketTypeTicketPrice from '@/components/ticket/TicketTypeTicketPrice'
//查询商户订单
const TicketQueryOrder = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketQueryOrder')));
// import TicketQueryOrder from '@/components/ticket/TicketQueryOrder'
//申请显示在首页
const TicketApplyShowHomePage = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketApplyShowHomePage')));
// import TicketApplyShowHomePage from '@/components/ticket/TicketApplyShowHomePage'

/*------------------------------------美食----------------------------------------*/

//店面信息
const FoodStoreInformation = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreInformation')));
// import FoodStoreInformation from '@/components/food/FoodStoreInformation'
//店面房间
const FoodStoreRoom = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreRoom')));
// import FoodStoreRoom  from '@/components/food/FoodStoreRoom'
//店面产品
const FoodStoreProduct = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreProduct')));
// import FoodStoreProduct from '@/components/food/FoodStoreProduct'
//房间图片
const FoodRoomPicture = resolve => require.ensure([], () => resolve(require('@/components/food/FoodRoomPicture')));
// import FoodRoomPicture from '@/components/food/FoodRoomPicture'
//店面图片
const FoodStorePicture = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStorePicture')));
// import FoodStorePicture from '@/components/food/FoodStorePicture'
//店面产品图片
const FoodStoreProductPicture = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreProductPicture')));
// import FoodStoreProductPicture from '@/components/food/FoodStoreProductPicture'
//房间餐桌
const FoodStoreRoomTabel = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreRoomTabel')));
// import FoodStoreRoomTabel from '@/components/food/FoodStoreRoomTabel'
//推荐菜
const FoodStoreRecommend = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreRecommend')));
// import FoodStoreRecommend from '@/components/food/FoodStoreRecommend'
//店面每天可锁桌时间
const FoodStoreTableTime = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreTableTime')));
// import FoodStoreTableTime from '@/components/food/FoodStoreTableTime'
//店面可订餐时间
const FoodStoreOrderingTime = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreOrderingTime')));
// import FoodStoreOrderingTime from '@/components/food/FoodStoreOrderingTime'
//查询订单
const FoodStoreConfirmOrder = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoreConfirmOrder')));
// import FoodStoreConfirmOrder from '@/components/food/FoodStoreConfirmOrder'
//停车场
const FoodStoppingPlace = resolve => require.ensure([], () => resolve(require('@/components/food/FoodStoppingPlace')));
// import  FoodStoppingPlace from '@/components/food/FoodStoppingPlace'





/*------------------------------------广告----------------------------------------*/
//广告申请管理
const AdApply = resolve => require.ensure([], () => resolve(require('@/components/adverts/AdApply')));
const CarHome = resolve => require.ensure([], () => resolve(require('@/components/car/CarHome')));
const CarStore = resolve => require.ensure([], () => resolve(require('@/components/car/CarStore')));
const CarProduct = resolve => require.ensure([], () => resolve(require('@/components/car/CarProduct')));
// import AdApply from '@/components/adverts/AdApply'

// import CarHome from '@/components/car/CarHome'
// import CarStore from '@/components/car/CarStore'
// import CarProduct from '@/components/car/CarProduct'
//公司汽车
const CarCompanyCar = resolve => require.ensure([], () => resolve(require('@/components/car/CarCompanyCar')));
// import CarCompanyCar from '@/components/car/CarCompanyCar'
//公司优惠政策
const CarPreferentialPolicies = resolve => require.ensure([], () => resolve(require('@/components/car/CarPreferentialPolicies')));
// import CarPreferentialPolicies from '@/components/car/CarPreferentialPolicies'
//公司订单明细
const CarOrderDetails = resolve => require.ensure([], () => resolve(require('@/components/car/CarOrderDetails')));
// import CarOrderDetails from '@/components/car/CarOrderDetails'
//公司确认订单
const CarConfirmOrder = resolve => require.ensure([], () => resolve(require('@/components/car/CarConfirmOrder')));
// import CarConfirmOrder from '@/components/car/CarConfirmOrder'

/*------------------------------------V电影----------------------------------------*/
//V电影审核表
const VMovieCheckTable = resolve => require.ensure([], () => resolve(require('@/components/movie/VMovieCheckTable')));
// import  VMovieCheckTable from '@/components/movie/VMovieCheckTable'
//V电影系列
const VMovieSeries = resolve => require.ensure([], () => resolve(require('@/components/movie/VMovieSeries')));
// import  VMovieSeries from '@/components/movie/VMovieSeries'
//V电影视频系列
const VMovieVideoSeries = resolve => require.ensure([], () => resolve(require('@/components/movie/VMovieVideoSeries')));
// import  VMovieVideoSeries from '@/components/movie/VMovieVideoSeries'
//V电影微电影
const VMovieMiniMovie = resolve => require.ensure([], () => resolve(require('@/components/movie/VMovieMiniMovie')));
// import  VMovieMiniMovie from '@/components/movie/VMovieMiniMovie'
//V电影分类
const VMovieSorting = resolve => require.ensure([], () => resolve(require('@/components/movie/VMovieSorting')));
// import  VMovieSorting from '@/components/movie/VMovieSorting'
//V电影视频分类
const VMovieVideoCategories = resolve => require.ensure([], () => resolve(require('@/components/movie/VMovieVideoCategories')));
// import  VMovieVideoCategories from '@/components/movie/VMovieVideoCategories'
//V电影视频
const VMovieVideo = resolve => require.ensure([], () => resolve(require('@/components/movie/VMovieVideo')));
// import  VMovieVideo from '@/components/movie/VMovieVideo'
//V电影系列分类
const VMovieSeriesCategories = resolve => require.ensure([], () => resolve(require('@/components/movie/VMovieSeriesCategories')));
// import  VMovieSeriesCategories from '@/components/movie/VMovieSeriesCategories'


/*------------------------------------旅行社----------------------------------------*/
//订单
const TravelAgencyOrder = resolve => require.ensure([], () => resolve(require('@/components/travelAgency/TravelAgencyOrder')));
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
