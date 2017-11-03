export function loginHandle (res) {
  if (res.body.code === 10000) {
    let result = res.body
    if (result.message === '未登录') {
      localStorage.removeItem('username')
      window.appEvent.emit('login')
      throw res
    } else {
      return res
    }
  } else {
    throw res
  }
}
export function errorRequestHandle (res) {
}
