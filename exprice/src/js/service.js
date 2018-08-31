import axios from 'axios'

function Service() {
  let _this = this
  let _http = axios.create({
    baseURL: 'http://test.163.com:3000',
    timeout: 20000,
    withCredentials: true
  })

  _this.myInvite = data => {
    return _http.get('/recommend/songs', data)
  }
}

export default new Service()
