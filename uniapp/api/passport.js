const http = uni.$u.http
// 小程序登录
export const MPLogin = (data) => http.post('/api/v1/login', data)
