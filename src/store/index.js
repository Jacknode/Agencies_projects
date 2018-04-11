/**
 * Created by leibo on 18/1/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import hotel from './Hotel'
import travelAgency from './TravelAgency'
import ticket from './Ticket'
import food from './Food'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules:{
    hotel,
    travelAgency,
    ticket,
    food
  },
})
