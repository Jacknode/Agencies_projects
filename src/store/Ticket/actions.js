/**
 * Created by leibo on 18/3/29.
 */
import axios from 'axios'

export default {
  initTicketAttractions({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TourSite/GetTourSite', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          console.log(data.data)
          commit('initTicketAttractions', data.data);
          relove(Number(data.totalrows));
        } else {
          reject(data.resultcontent)
        }
      })
    })
  }
}
