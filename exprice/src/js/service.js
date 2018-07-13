import axios from 'axios'

function Service() {
  let _this = this
  let _http = axios.create({
    baseURL: '/majax',
    timeout: 20000,
    withCredentials: true
  })

  _this.myInvite = (chapterId, _csrfToken = 'XJm8BHDAPs9R0QkOVVe8ZXVtoxjUdbiypvgkuo5D', bookId = 1931432) => {
    return _http.get('/chapter/getChapterInfo', { params: { chapterId, _csrfToken, bookId } })
  }
}

export default new Service()
